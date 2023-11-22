import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { Navigate, useNavigate } from 'react-router-dom';

const Nbar = ({ loggedIn, Premier, setLoggedIn, setPremier }) => {

  const admin = localStorage.getItem('admin')

  console.log('admin',admin)

  const navigate = useNavigate()

  function SignOut() {
    setLoggedIn(false);
    setPremier(false);
    localStorage.setItem('LOGIN', false);
    localStorage.setItem('admin', false);
    navigate("/customerView")

  }

  return (
    <nav className="bg-black text-white flex justify-between items-center p-4 container">
      {/* Logo */}
      <div>
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Left section */}
      <div className="flex items-center space-x-4">
        {/* Display GO PRO button if not a Premier user and logged in */}
        {!Premier && loggedIn && (
          <Link
            to={`/PRO/`}
            className="px-4 py-2 hover:bg-gray-700 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out"
          >
            GO PRO
          </Link>
        )}

        {/* Display message for Premier users with enhanced styling */}
        {loggedIn && Premier && (
          <p className="text-yellow-500 font-semibold">PREMIER</p>
        )}

        {/* Buttons/Links based on login status */}
        {loggedIn ? (
          <>
            <p>HELLO</p>
            <Button onClick={SignOut}>SignOut</Button>
          </>
        ) : (
          <>
            <Link to="/addUsers">REGISTER</Link>
            <Link to="/loginUser">Login</Link>
          </>
        )}


        { admin==='true' && (
                <>
                    <Link to={'/admin'}>ADMIN PANEL</Link>
                </>
                )}
      </div>
    </nav>
  );
};

export default Nbar;
