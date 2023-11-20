import Login from './components/Login'
import SinUp from './components/SinUp'
import Users from './components/Users'
import Parts from './components/Parts'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RequireAuth from './auth/RequireAuth'
import AddPart from './components/AddPart'
import EditPart from './components/EditPart'

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/sinup" element={<SinUp/>}/>
        <Route element={<RequireAuth/>} >
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='users' element={<Users/>}/>
            <Route path='parts' element={<Parts/>}/>
            <Route path='addPart' element={<AddPart/>}/> 
            <Route path='editPart/:id' element={<EditPart/>}/>    
          </Route>
        </Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
