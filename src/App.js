
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import About from './Pages/Customer/About';
import Home from './Pages/Customer/Home';
import Master from './Layout/Customer/Master';
import AdminMaster from './Layout/Admin/AdminMaster';
import ManageCategory from './Pages/Admin/ManageCategory';
import ManageMenu from './Pages/Admin/ManageMenu';
import ManageCustomer from './Pages/Admin/ManageCustomer';
import UpdateCategory from './Pages/Admin/UpdateCategory';
import UpdateMenu from './Pages/Admin/UpdateMenu';
import Menu from './Pages/Customer/Menu';
import Dashboard from './Layout/Admin/Dashboard';
import ManageOrder from './Pages/Admin/ManageOrder';
import Order from './Pages/Customer/Order';
import SignUp from './Pages/Auth/SignUp';
import { useState } from 'react';
import Login from './Pages/Auth/Login';
import AddCategory from './Pages/Admin/AddCategory';
import AddMenu from './Pages/Admin/AddMenu';
import ChangePassword from './Component/ChangePassword';
import Profile from './Pages/Customer/Profile';
import UpdateProfile from './Pages/Customer/UpdateProfile';
import Cart from './Pages/Customer/Cart';
import Header from './Layout/Customer/Header';

function App() {
  
  
  return (
  
    
    <div className="App">
  
    <BrowserRouter>
    <Routes>
     
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/cart' element={<Cart/>}/>
      
    <Route path='/updateprofile/:id' element={<UpdateProfile/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/'  element={<Master/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/order' element={<Order/>}/>
     
    
      </Route>
      <Route path='/admin' element={<AdminMaster/>}>
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/admin/managecategory' element={<ManageCategory/>}/>
      <Route path='/admin/managemenu' element={<ManageMenu/>}/>
      <Route path='/admin/managecustomer' element={<ManageCustomer/>}/>
      <Route path='/admin/manageorder' element={<ManageOrder/>}/>
      <Route path='/admin/updatecategory/:id' element={<UpdateCategory/>}/>
      <Route path='/admin/updatemenu/:id' element={<UpdateMenu/>}/>
      <Route path='/admin/addcategory' element={<AddCategory/>}/>
      <Route path='/admin/addmenu' element={<AddMenu/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
