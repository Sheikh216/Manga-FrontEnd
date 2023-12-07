import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function UserProfiles() {
  
    
  const CID = localStorage.getItem("CID");

  


  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    mobileNo:""
});

const [showPassword, setShowPassword] = useState(false);

useEffect(() => {
    loadUser();
}, []);

const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${CID}`);
    setUser(result.data);
};











    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div className='container'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User Informations</h3>
        
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
          </div>
          {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">User Mobile Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.mobileNO==null?"Mobile number not given":user.mobileNo}</dd>
          </div> */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">password</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {showPassword ? user.password : '••••••'}</dd>

           
        <button className="bg-gray-300" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
          </div>
          
           
            

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Is premier member?</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.premier?"yes":"No"}</dd>
          </div>
          <Link 
          to={`/editProfile/${CID}`}>
          <button className='bg-black text-white p-3 rounded-full '>Edit User</button>
          
          </Link>
          
         
         
        </dl>
      </div>
    </div>
  )
}
