import '../styles/parts.css'
import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import {User} from '../Context/Context'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Parts(){
    const [parts,setParts] =useState([]);
    const user = useContext(User);
    const [runE,setRunE]=useState(5);


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/parts',{  
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${user.auth.token}`,
              // Other headers if needed
            }
          })
          .then(response => response.json())
          .then(data => {
            setParts(data);
          })
     },[runE]);
     
     const showData =parts.map((data,index)=>(
                    <tr>
                        <td>{index +1}</td>
                        <td><img src={data.image} alt='product' width="75px"/></td>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                        <td>{data.sellPrice}</td>
                        <td>{data.purchasePrice}</td>
                        <td>{data.quantity}</td>
                        <td><Link to={`/dashboard/editPart/${data.id}`} className="btn btn-primary btn-xs" ><FontAwesomeIcon icon={faPenToSquare} /></Link></td>
                        <td><Link className="btn btn-danger btn-xs" ><FontAwesomeIcon icon={faTrash} onClick={()=>delet(data.id)}/></Link></td>
                     </tr>   
        ));
        async function delet(id){
            try{
                const res=await axios.delete(`http://127.0.0.1:8000/api/admin/parts/${id}`,{
                    headers: {
                      'accept': 'application/json',
                      'Authorization': `Bearer ${user.auth.token}`,
                }});
                if(res.status===200){
                    setRunE((prev)=>prev+1);
                }      
            }catch(err){
                console.log(err)
            }
        }
    return(
    
    <body>
    <div className="container">
        <main>
         <h1>Analytics</h1>
            
            <div className="analyse">
                <div className="sales">
                    <div className="status">
                        <div className="info">
                            <h3>Total Sales</h3>
                            <h1>$65,024</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visits">
                    <div className="status">
                        <div className="info">
                            <h3>Site Visit</h3>
                            <h1>24,981</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>-48%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searches">
                    <div className="status">
                        <div className="info">
                            <h3>Searches</h3>
                            <h1>14,147</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+21%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recent-orders">
                <h2>Parts Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Sell Price</th>
                            <th>Purchase Price</th>
                            <th>Quantitié</th>
                            <th>Edit</th>                          
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showData}
                    </tbody>
                </table>
            </div>
            </main>
            
        
   </div>
   </body>
   
    )
}