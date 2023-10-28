import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
  const navigate = useNavigate();
  const sam = localStorage.getItem("admin");
  const [users, setUsers] = useState([]);

  const checkAdmin = () => {
    console.log(sam)
    if (sam !== "true") {
      console.log('olaola')
      navigate('/loginUser');
    }
  };

  useEffect(() => {
    checkAdmin(); // Call checkAdmin function first
    loadUsers(); // Then load users
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };


  return (
    <div className='container-fluid'>
      <div className='py-4'>
        {/* Additional content can be placed here */}
      </div>
      <div className='table-responsive'>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user,index)=>(
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{'***'}</td>
                
                  
                  <td>
                    <button className='btn btn-primary mx-2'>EDIT</button>
                    <button className='btn btn-outline-primary mx-1'>View</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}
