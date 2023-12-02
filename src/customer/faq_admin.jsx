import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UnansweredFaqs = () => {
    const [unansweredFaqs, setUnansweredFaqs] = useState([]);

    useEffect(() => {
        fetchUnansweredFaqs();
    }, []);

    const fetchUnansweredFaqs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/faq/unreplied');
            setUnansweredFaqs(response.data);
        } catch (error) {
            console.error('Error fetching unanswered FAQs:', error);
        }
    };

    return (
        <div>
            <h2>Unanswered FAQs</h2>
            {unansweredFaqs.map((faq) => (
                <div key={faq.id}>
                    <h3>{faq.name}</h3>
                    <p>{faq.faq}</p>
                    <Link to={`/faq_view/${faq.id}`}>
                        <button>View FAQ</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default UnansweredFaqs;
