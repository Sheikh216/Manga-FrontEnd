import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

export default function EditProfile() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className=" py-4 ">
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <div className="card border-0 shadow bg-gray-700">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Edit Your Profile</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">Name</label>
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
                  <label htmlFor="username" className="form-label">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <Link to="/" className="btn btn-outline-secondary bg-red-500">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
