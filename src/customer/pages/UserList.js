import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link, useParams } from "react-router-dom";
import { async } from "q";

export default function UserList() {
  const navigate = useNavigate();
  const ADMIN = localStorage.getItem("admin");
  const [users, setUsers] = useState([]);

  const LOGIN = localStorage.getItem("LOGIN")

  

  const checkAdmin = () => {
    console.log(ADMIN)
    if (ADMIN !== "true" || LOGIN === "false") {
      console.log('admin',ADMIN)
      console.log('login',LOGIN)
      console.log('NOT ADMIN')
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

const deleteUser=async (id)=> {
  await axios.delete(`http://localhost:8080/user/${id}`);
  loadUsers();
};


//

// const SetAdmin = async(id)=>{
//   await axios.put(`http://localhost:8080/newAdmin/${id}`)
  
// }

const setAsAdmin = async (uid) => {
  try {
    await axios.put(`http://localhost:8080/newAdmin/${uid}`,);
    loadUsers();
  } catch (error) {
    console.error("Error setting as admin:", error);
    // Log the detailed error response if available
    console.log(error.response.data); // Check the response data for more details
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

            {users.map((user,index)=>(
                <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  
                  <td>
                    <Link
                        className="btn btn-primary mx-2"
                        to={`/edituser/${user.id}`}
                    >
                      EDIT
                    </Link>
                    <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    < button
                        className="btn btn-danger mx-2"
                        onClick={()=>deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    {!user.admin && (
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => setAsAdmin(user.id)}
                    >
                      SET AS ADMIN
                    </button>
                  )}
                  </td>
                </tr>
              ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}