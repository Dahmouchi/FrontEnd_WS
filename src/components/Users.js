import '../styles/user.css'
import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import {User} from '../Context/Context'
export default function Users(){
   const user =useContext(User);
   const [runE,setRunE]=useState(5);

   useEffect(()=>{
      fetch('http://127.0.0.1:8000/api/admin',{  
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${user.auth.token}`,
            // Other headers if needed
          }
        })
        .then(response => response.json())
        .then(data => {
          
          console.log(data)
        })
   },[runE]);
    return (
  
   <div className="container">
	   <div className="row">
         <div className="col-md-12">
            <div className="table-responsive">  
              <table id="mytable" className="table table-bordred table-striped">                
               <thead>
                  <th></th>
                   <th>First Name</th>
                    <th>Last Name</th>
                     <th>Address</th>
                     <th>Email</th>
                     <th>Contact</th>
                      <th>Edit</th>
                      
                       <th>Delete</th>
                   </thead>
                     <tbody>
                     
                     <tr>
                        <td><input type="checkbox" className="checkthis" /></td>
                        <td>Mohsin</td>
                        <td>Irshad</td>
                        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                        <td>isometric.mohsin@gmail.com</td>
                        <td>+923335586757</td>
                        <td><button className="btn btn-primary btn-xs" ><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                        <td><button className="btn btn-danger btn-xs" ><FontAwesomeIcon icon={faTrash} /></button></td>
                     </tr>                       
                     <tr>
                        <td><input type="checkbox" className="checkthis" /></td>
                        <td>Mohsin</td>
                        <td>Irshad</td>
                        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                        <td>isometric.mohsin@gmail.com</td>
                        <td>+923335586757</td>
                        <td><button className="btn btn-primary btn-xs" ><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                        <td><button className="btn btn-danger btn-xs" ><FontAwesomeIcon icon={faTrash} /></button></td>
                     </tr>                                           
                     <tr>
                        <td><input type="checkbox" className="checkthis" /></td>
                        <td>Mohsin</td>
                        <td>Irshad</td>
                        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                        <td>isometric.mohsin@gmail.com</td>
                        <td>+923335586757</td>
                        <td><button className="btn btn-primary btn-xs" ><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                        <td><button className="btn btn-danger btn-xs" ><FontAwesomeIcon icon={faTrash} /></button></td>
                     </tr>        
                     <tr>
                        <td><input type="checkbox" className="checkthis" /></td>
                        <td>Mohsin</td>
                        <td>Irshad</td>
                        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                        <td>isometric.mohsin@gmail.com</td>
                        <td>+923335586757</td>
                        <td><button className="btn btn-primary btn-xs" ><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                        <td><button className="btn btn-danger btn-xs" ><FontAwesomeIcon icon={faTrash} /></button></td>
                     </tr>
                     <tr>
                        <td><input type="checkbox" className="checkthis" /></td>
                        <td>Mohsin</td>
                        <td>Irshad</td>
                        <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                        <td>isometric.mohsin@gmail.com</td>
                        <td>+923335586757</td>
                        <td><button className="btn btn-primary btn-xs" ><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                        <td><button className="btn btn-danger btn-xs" ><FontAwesomeIcon icon={faTrash} /></button></td>
                     </tr>   
                  </tbody>        
               </table>  
            </div>
         </div>
      </div>
   </div>
    )
}