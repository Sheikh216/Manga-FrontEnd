import Navigation from "./customer/components/navbar/Navigation";
import FooterFiveColsLogo from "./customer/components/footer";

import HomePage from "./customer/pages/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route } from "react-router-dom";
import React from "react";
import AddProducts from "./customer/products/AddProducts";
import Edit from "./customer/products/Edit";
import CustomerView from "./customer/pages/CustomerView";

import ViewProduct from "./customer/products/ViewProduct";
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';
import Login from './customer/pages/Login';

import Nbar from "./customer/components/navbar/Nbar";
import Navbar from "./customer/components/navbar/Navbar";

import AddUser from "./customer/user/AddUser";
import UserList from './customer/pages/UserList';
import MainCar2 from "./customer/components/homeCarosel/MainCar2";
import MainCarosel from "./customer/components/homeCarosel/MainCarosel";
import EditUser from "./customer/user/EditUser";
import ViewUser from "./customer/user/ViewUser";
import SingleProductView from "./customer/products/SingleProductView";
function App() {
  return (
    <div >
        
        <Router>
        <Navigation /> 
        
        <Nbar/>
       
      
      <Routes>
      <Route exact path= "/edituser/:id" element={<EditUser/>}/>
      <Route exact path= "/viewuser/:id" element={<ViewUser/>}/>
      <Route exact path = "/UserList" element = {<> <MainCar2/><UserList/> </>}/>
      <Route exact path = "/loginUser" element={<Login/>}/>
       <Route exact path="/" element={<CustomerView/>}/>
       <Route exact path="/productList" element={<HomePage/>}/>
       <Route exact path ="/addUsers" element= {<AddUser/>}/>
       <Route exact path="/customerView" element={<CustomerView/>}/>
       <Route exact path="/addProduct" element={<AddProducts/>}/>
       <Route exact path="/editProduct/:id" element={<Edit/>}/>
       <Route exact path="/manga/:id" element={<SingleProductView/>}/>
       <Route exact path="/viewProduct/:id" element={<ViewProduct/>}/>
       
      
        
        
      </Routes>
      <FooterFiveColsLogo />
      </Router>
      
    </div>
  );
}

export default App;
