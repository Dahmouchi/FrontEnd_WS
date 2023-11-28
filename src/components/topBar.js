import '../styles/topbar.css'
import { Link } from 'react-router-dom';
import Logo from '../images/Untitled-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,faBell } from '@fortawesome/free-solid-svg-icons'
export default function TopBar(){
    function logout(){
        window.localStorage.removeItem('email');
        window.location.pathname="/login";
    }
    return(
        <>
        <div className='top'>
            <div  className='logo'>
                <img src={Logo} alt='logo' style={{width:"50px",height:"50px"}}/>
                <h3>IAM Project</h3>
            </div>
            <div className='icons'>
                <FontAwesomeIcon icon={faBell} style={{width:"30px",height:"30px"}}/>
                <Link onClick={logout} className='lin'><FontAwesomeIcon icon={faRightFromBracket} style={{width:"30px",height:"30px"}}/></Link>
            </div>
        </div>
        </>
    )
} 