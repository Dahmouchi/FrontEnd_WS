import '../styles/topbar.css'
import { Link } from 'react-router-dom';
import Logo from '../images/Untitled-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,faBell } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import usePartNotification from '../hooks/usePartNotification';
export default function TopBar(){
    function logout(){
        window.localStorage.removeItem('email');
        window.location.pathname="/login";
    }

    const partNotification = usePartNotification();

    const [badge, setBadge] = useState(0);

    useEffect(() => {
        if(partNotification.message){
            setBadge((prev) => prev + 1);

        }
        

    }, [partNotification])

    return(
        <>
        <div className='top'>
            <div  className='logo'>
                <img src={Logo} alt='logo' style={{width:"50px",height:"50px"}}/>
                <h3>IAM Project</h3>
            </div>
            <div className='icons'>
                <div className='notification'
                style={{
                    position:"relative"
                }}
                >
                    <FontAwesomeIcon icon={faBell} style={{width:"30px",height:"30px"}}/>
                        {
                            badge > 0 ? <span 
                            style={{
                                position:"absolute",
                                top:"0",
                                right:"0",
                                width:"20px",
                                height:"20px",
                                borderRadius:"50%",
                                backgroundColor:"red",
                                color:"white",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                fontSize:"12px",
                                fontWeight:"bold",
                                cursor:"pointer"
                            }}
                            >{badge}</span> : null
                        }
                </div>
                
                <Link onClick={logout} className='lin'><FontAwesomeIcon icon={faRightFromBracket} style={{width:"30px",height:"30px"}}/></Link>
            </div>
        </div>
        </>
    )
} 