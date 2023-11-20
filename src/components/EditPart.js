import { useContext, useEffect, useState } from "react";
import Form from "../layout/Fomr";
import { User } from "../Context/Context";
function EditPart(){
    const user = useContext(User);
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [sell,setSell]=useState("");
    const [purchase,setPurchase]=useState("");
    const [quantity,setQuantity]=useState("");
    const id=window.location.pathname.split("/").slice(-1)[0];
    console.log(id)
     useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/admin/parts/${id}`,{
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${user.auth.token}`,
            }  
        })
        .then((res)=>res.json())
        .then((data)=>{
            setName(data.name);
            setDesc(data.description);
            setSell(data.sellPrice);
            setPurchase(data.purchasePrice);
            setQuantity(data.quantity);
            console.log(data)
        });
     },[]);
    return (
        <Form name={name} desc={desc} sell={sell} purchase={purchase} quantity={quantity} title =" Edit Parts" endPoint={`parts/${id}`} btn="Update Part" method="put"/>
    )
}
export default EditPart;