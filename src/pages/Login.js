import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate,useEffect } from 'react-router-dom';


export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null); // State to store error messages

  const vari = localStorage.getItem('login')

  React.useEffect(()=>{
    localStorage.setItem('login','false')
  },[vari])
  
// username' Shawon' , password:'11234 ' forget 
  const onInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault(); // wont refresh out page. 
    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      



      
      
      
      

      if (response.status === 200) {
        // Login successful, redirect to the dashboard or another page
        // console.log('Login successful!', response.data.admin);
 
        localStorage.setItem('admin',response.data.admin)

        // just for routing to different path.
        const admin_value = localStorage.getItem('admin')


        localStorage.setItem('login',response.data.login)
        console.log(response.data.login)
        localStorage.setItem('username',response.data.username)
        if (response.data.admin === true){

         navigate('/admin')
        }else{
         navigate('/Homepage')
        }

        
      }
    } catch (error) {
      // Handle login error, set error state with the appropriate message
      if (error.response && error.response.status === 401) {
        setError('Wrong username or password. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="container mt-5">
    <h1>{error && <div className="alert alert-danger">{error}</div>}</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  name="username"
                  value={loginData.username}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginData.password}
                  onChange={onInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mx-3 mb-2">
                Login
              </button>
            </form>

            <Link className="btn btn-primary btn-block mx-3" to={"/forget"}>forget password? </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
