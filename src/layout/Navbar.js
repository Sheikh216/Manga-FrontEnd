import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {

  const [user,setUser] = React.useState([])

  React.useEffect(()=>{
    loadUser()
  },[])

  const loadUser = async ()=>{
    const result =await axios.get("http://localhost:8080/users") //coming from backend.
    setUser(result.data)
  };

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Add your other navigation links here */}
            </ul>
            <div className="d-flex">
              <Link className="btn btn-primary me-2" to={"/addUsers"}>REGISTER</Link>
              {/* You can add more buttons or components here */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
