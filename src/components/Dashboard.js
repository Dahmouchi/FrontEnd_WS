import '../styles/dashboard.css'
import TopBar from '../components/topBar'
import SidBar from '../components/SiderBar'
import { Outlet } from 'react-router-dom'

function Dashboard(){
 
    return (
        <>
            <TopBar/><br/>
            <div className='d-content'>
                <SidBar/>
                <Outlet/>
            </div>
           
        </>
    
   
    )
}
export default Dashboard;