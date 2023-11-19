import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
const Nbar = () => {
    return (
        <nav className="bg-black text-white flex justify-between items-center p-4 container">
            <div className="flex items-center space-x-4 ">
                {/* Logo */}
                <div>
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
                </div>

                {/* Buttons on the left */}
                <button className="px-4 py-2 hover:bg-gray-700">Left 1</button>
                <button className="px-4 py-2 hover:bg-gray-700">Left 2</button>
            </div>

            <div className="flex items-center space-x-4">
                {/* Buttons on the right */}
                <button className="px-4 py-2 hover:bg-gray-700">Right 1</button>
                <Link to="/productList">
               Product List 

                </Link>
                <Link to="/UserList">
               User List

                </Link>
                <Link to="/addUsers">
                <AppRegistrationIcon/>
                </Link>
                Registation

                {/* Login Button */}
                <Link to="/loginUser">
                <LoginIcon/>
                </Link>
                 login
                
                
            </div>
        </nav>
    );
};

export default Nbar;
