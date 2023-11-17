import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [passwordData, setPasswordData] = useState({
    username: '',
    mobileNo: '',
    newPassword: '',
  });

  const [error, setError] = useState(null); // State to store error messages

  const [updatemsg,setupdatemsg] = useState(false)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(passwordData)
    try {
      const response = await axios.put(`http://localhost:8080/forget`, passwordData);
      console.log(response.data);
      setupdatemsg(true)

      navigate('/loginUser')
      // Handle success, show a success message to the user if needed
    } catch (error) {
      // Handle error, set error state with the appropriate message
      setError('Failed to update password. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forget Password</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {updatemsg && <div className="alert alert-success">Updated</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={passwordData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="oldPassword"
            name = "mobileNo"
            // name="password"
            value={passwordData.oldPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
