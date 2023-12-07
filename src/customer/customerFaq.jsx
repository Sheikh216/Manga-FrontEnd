import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FaqForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        faq: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    React.useEffect(() => {
        checkAdmin(); // Call checkAdmin function first
        
      }, []);
    const navigate = useNavigate();
    const sam = localStorage.getItem("LOGIN");
  
    const checkAdmin = () => {
     console.log(sam)
     if (sam !== "true") {
       
       navigate('/loginUser');
     }
   };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend endpoint
            await axios.post('http://localhost:8080/faq', formData);
            // Reset form data after successful submission
            setFormData({
                name: '',
                email: '',
                faq: ''
            });
            alert('FAQ submitted successfully!');
        } catch (error) {
            console.error('Error submitting FAQ:', error);
            alert('Failed to submit FAQ');
        }
    };

    return (
        <div>
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        FAQ:
                        <textarea
                            name="faq"
                            value={formData.faq}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FaqForm;
