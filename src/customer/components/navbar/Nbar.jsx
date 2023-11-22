import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { ContactlessOutlined } from '@mui/icons-material';
const Nbar = ({ loggedIn,Premier }) => {

    const [login, setLogin] = React.useState(false);
    const [str, setStr] = React.useState("GO PRO");
    const [Prem, setPrem] = React.useState(null);
    const [admin,setadmin] = React.useState(false)

    React.useEffect(() => {
        const loginStatus = localStorage.getItem('LOGIN');
        setLogin(loginStatus);
        
        const userPremier = localStorage.getItem("USER_PREMIER");
        setPrem(userPremier);
        
        const admin = localStorage.getItem("admin")
        setadmin(admin)

        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const loginId = localStorage.getItem("CID")

    
    console.log('PREM',Prem)
    console.log('Login',login)
    console.log('STR',str)
    console.log("LOgged In",loggedIn)
    console.log("Premier", Premier)

    return (
        <nav className="bg-black text-white flex justify-between items-center p-4 container">
            <div className="flex items-center space-x-4 ">
                
                <div>
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
                </div>

                {/* Buttons on the left */}
                {(!Premier && loggedIn) &&  (
                    <Link
                        to={`/PRO/`}
                        className="px-4 py-2 hover:bg-gray-700 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out"
                    >
                        {str}
                    </Link>
                )}

                
                {(loggedIn && Premier) &&  (
                    <p>YOU ARE A PREMIER USER</p>
                )} 

                {/* <button className="px-4 py-2 hover:bg-gray-700">GO PRO</button>
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
