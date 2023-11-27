import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddUser({setPremier,setLoggedIn}) {

  let navigate = useNavigate()
  const [user, setuser] = React.useState({
    name: '',
    username: '',
    email: '',
    password:'',
    mobileNo: ''
  });

  const { name, username, email, password, mobileNo } = user;

  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  ///for submit button

  const onSubmit=async(e)=>{
   e.preventDefault()
   await axios.post("http://localhost:8080/user",user)
   setPremier(false)
   setLoggedIn(true)
   navigate("/customerView");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your User Name"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
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
                  value={password}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={onInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
