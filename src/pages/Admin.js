import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Admin() {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const buttonStyle = {
    marginTop: '20px',
    fontSize: '18px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    
  };
  const navigate = useNavigate();
  const sam = localStorage.getItem("admin");

  const checkAdmin = () => {
   if (sam !== "true") {
     
     navigate('/loginUser');
   }
 };

 useEffect(() => {
  checkAdmin(); // Call checkAdmin function first
  
}, []);

  return (
    <div style={containerStyle}>
      <h1>Admin Page</h1>
      <Link to="/">
        <button className='mx-2' style={buttonStyle}>USERS</button>
      </Link>
      <Link to="/admin/products">
        <button className='mx-2' style={buttonStyle}>PRODUCTS</button>
      </Link>
    </div>
  );
}