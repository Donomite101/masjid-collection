import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
    {
        question: "Is DeenConnect free to use?",
        answer: "Yes, DeenConnect offers a free version with essential features. We also have premium plans for advanced community management tools."
    },
    {
        question: "Can I manage multiple masjids?",
        answer: "Absolutely. Our platform is designed to handle multiple branches and localities under a single admin account."
    },
    {
        question: "Is my data secure?",
        answer: "We take data privacy seriously. All your community data is encrypted and stored securely, complying with international privacy standards."
    },
    {
        question: "How do I get started?",
        answer: "Simply download the app from the Play Store or App Store, create an account, and start setting up your community profile."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="text-center mb-2 section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
