import '../styles/dashboard.css'
import TopBar from '../components/topBar'
import SidBar from '../components/SiderBar'
import { Outlet } from 'react-router-dom'
import usePartNotification from '../hooks/usePartNotification';
import { useEffect, useState } from 'react';

function Dashboard(){


    const PartNotification = usePartNotification();

 

   
    useEffect(() => {



        if(PartNotification.message){
            console.log(PartNotification);
            if (!("Notification" in window)) {
                alert("This browser does not support Desktop notifications");
            }
    
            if(Notification.permission === 'granted'){
                var notification = new Notification(
                    PartNotification.part.name,
                    {

                        icon: PartNotification.part.image,
                        body: PartNotification.message,
                    }
                );
    
            }
            else if(Notification.permission !== 'denied'){
                Notification.requestPermission().then(function(permission){
                    if(permission === 'granted'){
                        var notification = new Notification(
                            PartNotification.part.name,
                            {
        
                                icon: PartNotification.part.image,
                                body: PartNotification.message,
                            }
                        );
            
                    }
                })
            }
    
    
        };



        return () => {
            console.log('unmount');
        }


    }, [PartNotification])


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