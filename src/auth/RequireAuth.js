import { useContext } from "react";
import {User} from '../Context/Context'
import { Navigate, Outlet, useLocation } from "react-router-dom";
export default function RequireAuth(){
    const location =useLocation();
    const user = useContext(User);
    return user.auth.detail ? <Outlet/> : <Navigate state={{form : location}} replace  to='/login'/>
}