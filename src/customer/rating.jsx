import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const Rating = () => {
    const { orderId, productId } = useParams();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('user');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const submitRating = async () => {
        try {
            await axios.post(`http://localhost:8080/products/rating`, {
                orderId,
                productId,
                rating,
                review,
                userName,
            });

            console.log('Rating submitted successfully!');
            setRating(0);
            setReview('');
            setUserName('');
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Manga Rating</h2>
                <div className="mt-6">
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">
                            Rating
                        </label>
                        <StarRatings
                            rating={rating}
                            starRatedColor="orange"
                            changeRating={(newRating) => setRating(newRating)}
                            numberOfStars={5}
                            name="rating"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">
                            Write a review...
                        </label>
                        <textarea
                            className="form-control"
                            id="review"
                            rows="3"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={submitRating}>
                        Submit Rating
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rating;
