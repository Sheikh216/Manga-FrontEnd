import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend endpoint
            await axios.post('http://localhost:8080/message', formData);
            // Reset form data after successful submission
            setFormData({
                name: '',
                email: '',
                faq: ''
            });
            alert('Message submitted successfully!');
        } catch (error) {
            console.error('Error submitting message:', error);
            alert('Failed to submit message');
        }
    };

    return (
        <div>
            {/*<h2>Contact us</h2>*/}
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <div>*/}
            {/*        <label>*/}
            {/*            Name:*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                name="name"*/}
            {/*                value={formData.name}*/}
            {/*                onChange={handleChange}*/}
            {/*                required*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label>*/}
            {/*            Email:*/}
            {/*            <input*/}
            {/*                type="email"*/}
            {/*                name="email"*/}
            {/*                value={formData.email}*/}
            {/*                onChange={handleChange}*/}
            {/*                required*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label>*/}
            {/*            Message:*/}
            {/*            <textarea*/}
            {/*                name="faq"*/}
            {/*                value={formData.faq}*/}
            {/*                onChange={handleChange}*/}
            {/*                required*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*    <button type="submit">Submit</button>*/}
            {/*</form>*/}
            <div className="container align-items-center justify-content-center mb-5 mt-5">
                <div className="card p-3">
                    <h5 className="card-title text-center mb-4">Contact Us</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                placeholder="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
