import { useContext, useEffect, useState } from 'react';
import '../styles/addpart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {User} from '../Context/Context'
import { useNavigate } from 'react-router-dom';
function Form(props){
    const nav=useNavigate();
    const user = useContext(User);
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [sell,setSell]=useState("");
    const [purchase,setPurchase]=useState("");
    const [quantity,setQuantity]=useState("");
    const admin_id=user.auth.detail.id;
    useEffect(()=>{
        setName(props.name)
        setDesc(props.desc)
        setSell(props.sell)
        setPurchase(props.purchase)
        setQuantity(props.quantity)
        
    },[props.name,props.desc,props.sell,props.purchase,props.quantity])
    async function submit(e){

        e.preventDefault();
        try{
            if(props.method==='post'){
                let res=await axios.post(`http://127.0.0.1:8000/api/admin/${props.endPoint}`,{
                name:name,
                description:desc,
                sellPrice:sell,
                purchasePrice:purchase,
                quantity:quantity,
                admin_id:admin_id,
                },{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${user.auth.token}`,
                }                       
             });     
             nav('/dashboard/parts')
            }else{
                let res=await axios.put(`http://127.0.0.1:8000/api/admin/${props.endPoint}`,{
                name:name,
                description:desc,
                sellPrice:sell,
                purchasePrice:purchase,
                quantity:quantity,
                admin_id:admin_id,
                },{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${user.auth.token}`,
                }                       
             });     
             nav('/dashboard/parts')
            }
        }catch(err){
            console.log(err);           
        }
            
        
    }
    return (
        <div classNameName='all'>
        <h2>{props.title}</h2><br/>
        <form className="row g-3" onSubmit={submit}>
            <div className='row gy-2'>
                <div className="col-6">
                    <label htmlFor="name" class="form-label">Name</label>
                    <input type="text" className="form-control"  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputPassword5" class="form-label">Description</label>
                    <input type="text" className="form-control"  placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                </div>
            </div>
            <div className='row gy-2'>
                <div className="col-6">
                    <label htmlFor="staticEmail2" class="form-label">sellPrice</label>
                    <input type="text" className="form-control" id="staticEmail2"value={sell} onChange={(e)=>setSell(e.target.value)} placeholder="Price" />
                </div>
                <div className="col-6">
                    <label htmlFor="inputPassword5" class="form-label">Purchase Price</label>
                    <input type="text" className="form-control"  placeholder="purchse Price " value={purchase} onChange={(e)=>setPurchase(e.target.value)}/>
                </div>
            </div>
            <div className='row gy-2'>
                <div className="col-6">
                    <label htmlFor="staticEmail2" class="form-label">quantity</label>
                    <input type="number" className="form-control"  placeholder="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                </div>
                <div className="col-6">
                    
                </div>
            </div>
            <div className='row gy-2'>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">{props.btn}</button>
                </div>
            </div>
            
            
        </form>
    </div>
    )
}
export default Form;