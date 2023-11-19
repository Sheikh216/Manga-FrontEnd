import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams  } from "react-router-dom";

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b>
                                    {user.name}
                                </li>

                                <li className="list-group-item">
                                    <b>Username:</b>
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}