import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const FaqView = () => {
    const { id } = useParams();
    const [faqDetails, setFaqDetails] = useState({});
    const [reply, setReply] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef();
    useEffect(() => {
        fetchFaqDetails();
    }, []);

    const fetchFaqDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/faq/${id}`);
            setFaqDetails(response.data);
            setEmail(response.data.email);
        } catch (error) {
            console.error('Error fetching FAQ details:', error);
        }
    };
    const replyForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_q17yc8o', 'question_answer', replyForm.current, 'cQUqPlFkrc_X00QHr')
            .then((result) => {
                axios.post(`http://localhost:8080/faq/${id}`);
                console.log(result.text);
                console.log(result.status);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <h2>FAQ Details</h2>
            <p>Name: {faqDetails.name}</p>
            <p>Email: {faqDetails.email}</p>
            <p>FAQ: {faqDetails.faq}</p>

            <form ref={replyForm} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default FaqView;
