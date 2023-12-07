import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

// Main Rating component
const Rating = () => {
    const { orderId, productId } = useParams(); // Extract orderId and productId from URL params
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {

        checkLogin()
        const storedUserName = localStorage.getItem('user');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);


    const navigate = useNavigate();
    const login_info = localStorage.getItem("LOGIN");
  
  
  
    
  
  
    const checkLogin = () => {
     if (login_info !== "true") {
       
       navigate('/loginUser');
     }
   };
  


    const submitRating = async () => {
        try {
            await axios.post(`http://localhost:8080/products/rating`, {
                orderId, // Use the orderId from the URL
                productId,
                rating,
                review,
                userName,
            });

            console.log('Rating submitted successfully!');
            // Clear the form after submission
            setRating(0);
            setReview('');
            setUserName('');
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Manga Rating</h2>
                <div className="mt-6">
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Enter Rating (1-5)"
                    />
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write a review..."
                    />
                    <button onClick={submitRating}>Submit Rating</button>
                </div>
            </div>
        </div>
    );
};

export default Rating;
