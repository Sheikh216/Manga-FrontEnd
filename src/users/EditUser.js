import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let Navigate = useNavigate();

  const {id}=useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password:"",
  });


  const { name, username, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadUser();
  },[]);

  ///for submit button
  const onSubmit = async(e)=> {
   e.preventDefault();
   await axios.put(`http://localhost:8080/users/${id}`,user);
   Navigate("/");
  };

  const loadUser = async ()=> {

    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div className="card p-4">
            <h2 className="text-center mb-4">Edit User</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="name"
                  value={name}
                  onChange={(e)=>onInputChange(e)}
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
                  placeholder="Enter your User Name"
                  name="username"
                  value={username}
                  onChange={(e)=>onInputChange(e)}
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
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e)=>onInputChange(e)}
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
              <button type="submit" className="btn btn-outline primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
