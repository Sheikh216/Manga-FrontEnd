import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

const MessageView = () => {
    const { id } = useParams();
    const [messageDetails, setMessageDetails] = useState({});
    const [reply, setReply] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef();
    useEffect(() => {
        fetchMessageDetails();
    }, []);

    const fetchMessageDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/message/${id}`);
            setMessageDetails(response.data);
            setEmail(response.data.email);
        } catch (error) {
            console.error('Error fetching Message details:', error);
        }
    };
    const replyForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_q17yc8o', 'question_answer', replyForm.current, 'cQUqPlFkrc_X00QHr')
            .then((result) => {
                axios.post(`http://localhost:8080/message/${id}`);
                console.log(result.text);
                console.log(result.status);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Message Details</h2>
            <p><FontAwesomeIcon icon={faUser} className="mr-2" /> Name: {messageDetails.name}</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email: {messageDetails.email}</p>
            <p><FontAwesomeIcon icon={faComment} className="mr-2" /> Message: {messageDetails.faq}</p>

            <form ref={replyForm} onSubmit={sendEmail} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="user_name" name="user_name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="user_email" name="user_email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="4" />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};

export default MessageView;
