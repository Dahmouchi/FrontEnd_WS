import Background from '../images/login-bg.png'
import '../styles/login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SinUp(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [emailErr,setEmailErr]=useState("");


    async function submit(e){
        let flag =true;
        e.preventDefault();
        if(password.length < 8 ){
            flag=false;
        }else{
            flag=true;
        }
        try{
            if(flag){
                let res=await axios.post('http://127.0.0.1:8000/api/admin/auth/register',{
                    name:name,
                    email:email,
                    password:password,
                    phone:phone,
                },{
                    headers : { 
                        Accept : ' application/json'
                        }                       
                });         
                if(res){
                        console.log(res)
                        window.location.pathname="/login";
                        window.localStorage.setItem('email',email)
                }
            }
        }catch(err){
            console.log(err);
            setEmailErr(err);
           
        }
    }
    return (
        <>
        <div className="login">
         <img src={Background} alt="backgounds   2" className="login__bg"/>

         <form onSubmit={submit} className="login__form">
            <h1 className="login__title">Sign Up</h1>

            <div className="login__inputs">

                <div className="login__box">
                  <input type="name" placeholder="Name" required className="login__input" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input type="email" placeholder="Email ID" required className="login__input" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  <i className="ri-mail-fill"></i>
                  { emailErr === 422 && <p style={{color:"red"}}>email alredy been taken</p>}
               </div>

               <div className="login__box">
                  <input type="password" placeholder="Password" required className="login__input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                  <i className="ri-lock-2-fill"></i>
                  
               </div>
               <div className="login__box">
                  <input type="phone" placeholder="Phone" required className="login__input" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                  <i className="ri-mail-fill"></i>
               </div>
            </div>

            <div className="login__check">
               <div className="login__check-box">
                  <input type="checkbox" className="login__check-input" id="user-check"/>
                  <label htmlFor="user-check" className="login__check-label">Remember me</label>
               </div>

               <Link href="#" className="login__forgot">Forgot Password?</Link>
            </div>

            <button type="submit" className="login__button">Sigh up</button>

            <div className="login__register">
               Don't have an account? <Link to="/login">Login</Link>
            </div>
         </form>
      </div>
      </>
    )
}
export default SinUp;