import Login from './components/Login'
import SinUp from './components/SinUp'
import Users from './components/Users'
import Parts from './components/Parts'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RequireAuth from './auth/RequireAuth'
import AddPart from './components/AddPart'
import EditPart from './components/EditPart'
import {Cart} from './client/pages/cart/cart'
import { Shop } from './client/pages/shop/shop'
import { CartProvider } from './client/pages/context/cartContext'



function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/sinup" element={<SinUp/>}/>

        <Route element={<RequireAuth/>} >
        
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='users' element={<Users/>}/>
            <Route path='' element={<Parts/>}/>
            <Route path='addPart' element={<AddPart/>}/> 
            <Route path='editPart/:id' element={<EditPart/>}/>    
          </Route>
        </Route>
      </Routes>

      <CartProvider>
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
      </CartProvider>

      
    </div>
  );
}

export default App;
