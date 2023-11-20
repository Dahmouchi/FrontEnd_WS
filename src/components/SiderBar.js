import '../styles/sidbar.css'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece,faGear, faUser,faHouse,faFileCirclePlus} from '@fortawesome/free-solid-svg-icons'
export default function SideBar(){
    return(
        <>
        <div className='bar'>
            <NavLink to ="/dashboard/parts"  activClassName='active'>
                <span><FontAwesomeIcon icon={faPuzzlePiece} /></span>
                <h3>Parts</h3>
            </NavLink>   
            <NavLink to ="/dashboard/addPart"  activClassName='active'>
                <span><FontAwesomeIcon icon={faFileCirclePlus} /></span>
                <h3>Add Parts</h3>
            </NavLink>    
            <NavLink to ="/dashboard/users"  activClassName='active'>
                <span><FontAwesomeIcon icon={faUser} /></span>
                <h3>Users</h3>
            </NavLink> 
            <NavLink to ="/dashboard/setting" activClassName='active'>
                <span><FontAwesomeIcon icon={faGear} /></span>
                <h3>Setting</h3>
            </NavLink>         
            <NavLink to ="/dashboard/Home" activClassName='active'>
                <span><FontAwesomeIcon icon={faHouse} /></span>
                <h3>Home</h3>
            </NavLink>            
      
        </div>
        </>
    )
} 