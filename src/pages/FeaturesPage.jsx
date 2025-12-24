import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaArrowLeft, FaCheck } from 'react-icons/fa';
import Footer from '../components/Footer';
import './FeaturesPage.css';

const allFeatures = [
    {
        category: "Community Management",
        items: [
            "Digital Congregant Records",
            "Family Grouping & Relations",
            "Contact Information Management",
            "Membership Status Tracking",
            "Volunteer Management"
        ]
    },
    {
        category: "Engagement & Tracking",
        items: [
            "Mulakaat (Visit) Tracking",
            "Automatic 10-Day Reset Cycles",
            "Engagement History Logs",
            "Follow-up Reminders",
            "Activity Heatmaps"
        ]
    },
    {
        category: "Analytics & Reporting",
        items: [
            "Area-wise (Mohalla) Stats",
            "Attendance Trends",
            "Demographic Insights",
            "Customizable Reports",
            "Export to CSV/PDF"
        ]
    },
    {
        category: "Communication",
        items: [
            "In-app Announcements",
            "SMS/WhatsApp Integration",
            "Event Notifications",
            "Feedback Collection",
            "Multi-language Support"
        ]
    }
];

const FeaturesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="features-page">
            {/* Simple Navbar for Features Page */}
            <nav className="features-navbar container">
                <Link to="/" className="nav-logo">
                    <div className="logo-symbol">
                        <FaMosque />
                    </div>
                    <span>DeenConnect</span>
                </Link>
                <Link to="/" className="back-link">
                    <FaArrowLeft /> Back to Home
                </Link>
            </nav>

            <header className="features-header text-center">
                <div className="container">
                    <h1>Comprehensive Features</h1>
                    <p>Everything you need to manage your masjid and community effectively.</p>
                </div>
            </header>

            <div className="container features-content">
                <div className="features-grid-detailed">
                    {allFeatures.map((section, index) => (
                        <div className="feature-category-card" key={index}>
                            <h2>{section.category}</h2>
                            <ul>
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                        <FaCheck className="check-icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FeaturesPage;
