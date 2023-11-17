import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {

  const [users,setusers] = React.useState([])

  // for different type of navbar
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState('');


  React.useEffect(() => {
    const loginstatus = localStorage.getItem('login');
    console.log('sam',loginstatus)
    
    if (loginstatus === 'true') {
      setLoggedIn(true);
      console.log(loginstatus)
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    }
    
  }, []);

  const loadusers = async ()=>{
    const result =await axios.get("http://localhost:8080/users") //coming from backend.
    setusers(result.data)
  };

  
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {/* Add your other navigation links here */}
//             </ul>
//             <div className="d-flex">
//               <Link className="btn btn-primary me-2" to={"/addUsers"}>REGISTER</Link>
//               {/* You can add more buttons or components here */}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


return (
  <div>
    {loggedIn && (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-text">Navbar</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <span className="me-3">Welcome, {username}</span>
            </div>
          </div>
        </div>
      </nav>
    )}
    {!loggedIn && (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-text">Navbar</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <Link className="btn btn-primary" to="/addUsers">
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )}
  </div>
);
}