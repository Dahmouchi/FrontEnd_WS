import Background from '../images/login-bg.png'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import {User} from '../Context/Context'

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const nav=useNavigate();
    const userNow=useContext(User);
    console.log(userNow)
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
            let res=await axios.post('http://127.0.0.1:8000/api/admin/auth/login',{
              
               email:email,
               password:password,

           },{
               headers : { 
                   Accept : ' application/json'
                   }                       
           });         
           if(res){
                  const token =res.data.token.plainTextToken;
                  const detail=res.data.admin;
                  userNow.setAuth({token,detail});
                  console.log(userNow);
                  nav('/dashboard');
           }    
            
          }
      }catch(err){
          console.log(err.response.status)         
      }

  }
    return (
        <>
        <div className="login">
         <img src={Background} alt="background" className="login__bg"/>

         <form onSubmit={submit} className="login__form">
            <h1 className="login__title">Login</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input type="email" placeholder="Email ID" required className="login__input" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  <i className="ri-mail-fill"></i>
               </div>

               <div className="login__box">
                  <input type="password" placeholder="Password" required className="login__input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>

            <div className="login__check">
               <div className="login__check-box">
                  <input type="checkbox" className="login__check-input" id="user-check"/>
                  <label htmlFor="user-check" className="login__check-label">Remember me</label>
               </div>

               <Link href="#" className="login__forgot">Forgot Password?</Link>
            </div>

            <button type="submit" className="login__button">Login</button>

            <div className="login__register">
               Don't have an account? <Link to="/sinup">Register</Link>
            </div>
         </form>
      </div>
      </>
    )
}
export default Login;