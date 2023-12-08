import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UnansweredMessages = () => {
    const [unansweredMessages, setUnansweredMessages] = useState([]);

    useEffect(() => {
        fetchUnansweredMessages();
    }, []);

    const fetchUnansweredMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/message/unreplied');
            setUnansweredMessages(response.data);
        } catch (error) {
            console.error('Error fetching unanswered Messages:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Unanswered Messages</h2>
            {unansweredMessages.map((message) => (
                <div key={message.id} className="mb-4 border p-3">
                    <h3 className="mb-2">{message.name}</h3>
                    <p className="mb-3">{message.faq}</p>
                    <Link to={`/message_view/${message.id}`}>
                        <button className="btn btn-primary">View Message</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default UnansweredMessages;
