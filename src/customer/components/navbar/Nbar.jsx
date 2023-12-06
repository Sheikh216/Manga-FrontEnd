import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline'

const Nbar = ({ loggedIn, Premier, setLoggedIn, setPremier,admin_status }) => {

    const admin = localStorage.getItem('admin')

    const [input, setinput] = React.useState('');

    const[result,setresult] = React.useState([])

    console.log('admin',admin)

    const navigate = useNavigate()

    function SignOut() {
        admin_status(false)
        setLoggedIn(false);
        setPremier(false);
        localStorage.setItem('LOGIN', false);
        localStorage.setItem('admin', false);
        localStorage.setItem('loggedIn', false);
        localStorage.setItem('USER_PREMIER', false);
        navigate("/customerView")

    }



    const fetchData = (value) => {
        fetch("http://localhost:8080/products/getAll")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((product) => {
                    return (product && product.productName.toLowerCase().includes(value.toLowerCase()));
                });
                console.log(results);
                setresult(results)

                // Logging inside this scope to access the filtered results
                // Perform further actions with 'results' here, if needed
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    const handleChange = (value)=> {
        setinput(value)
        fetchData(value)
    }

    return (
        <nav className="bg-black text-white flex justify-between items-center p-4 container">
            {/* Logo */}
            <div>
                <Link to={"/customerView"}>HOME</Link>
            </div>

            {admin === 'true' ? (
                <div>
                    <Link to={"/message_admin"}>Inbox</Link>
                </div>
            ) : (
                <div>
                    <Link to={"/message"}>Message</Link>
                </div>
            )}


            {/* CART */}
            <Link to="/Cart" className="group -m-2 flex items-center p-2">
                <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h10.8a2 2 0 0 0 1.92-1.61L23 6H6" />
                </svg>
                {/* You can replace the static '0' with the actual count of items in the cart */}
                {/* <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        0
      </span> */}
                <span className="sr-only">items in cart, view bag</span>
            </Link>
            {/* CART */}


            <div className="flex items-center">
                <input

                    placeholder="Search..."
                    value={input}
                    onChange={(e)=> handleChange(e.target.value)}
                    className="bg-gray-200 px-3 py-1 rounded-md focus:outline-none"
                />
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
                    <p className="text-yellow-500 font-semibold">PREMIUM</p>
                )}

                {/* Buttons/Links based on login status */}
                {loggedIn ? (
                    <>
                        {/* <p>HELLO</p> */}
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
