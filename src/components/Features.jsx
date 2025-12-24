import React, { useState } from 'react';
import { FaUserCheck, FaChartLine, FaMapMarked, FaArrowRight } from 'react-icons/fa';
import './Features.css';

const Features = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const features = [
        {
            id: 1,
            title: 'CONGREGANT\nMANAGEMENT',
            shortDesc: 'Keep track of every individual in your community. Store contact details and engagement history.',
            fullDesc: 'Keep track of every individual in your community with comprehensive member profiles. Store contact details, engagement history, attendance records, and personal notes. Organize members by areas (Mohallas) for better community management. Track Mulakaat status, Wasooli contributions, and Jod participation. Generate detailed reports and analytics to understand community engagement patterns and identify members who need attention.',
            icon: FaUserCheck,
            color: 'yellow'
        },
        {
            id: 2,
            title: 'MULAKAAT\nTRACKING',
            shortDesc: 'Never miss a follow-up. Automatically track visits and reset status every 10 days.',
            fullDesc: 'Never miss a follow-up with our intelligent Mulakaat tracking system. Automatically track all community visits and interactions with a 10-day reset cycle. Get notifications for pending visits and overdue follow-ups. Record detailed notes for each Mulakaat including discussion points, concerns raised, and action items. Track Wasooli (collections) and Jod (gatherings) participation. View complete visit history with timestamps and notes. Generate reports to monitor engagement trends and ensure consistent community outreach.',
            icon: FaChartLine,
            color: 'purple'
        },
        {
            id: 3,
            title: 'AREA\nANALYTICS',
            shortDesc: 'Visualize growth. Organize data by locality to identify areas needing attention.',
            fullDesc: 'Visualize community growth and engagement with powerful area-based analytics. Organize all data by locality (Mohalla) to identify areas needing attention. View comprehensive dashboards showing member distribution, engagement rates, and activity trends across different areas. Track area-wise statistics including total members, active participants, pending Mulakaats, and collection summaries. Generate detailed reports to make data-driven decisions for community development. Identify underserved areas and allocate resources effectively.',
            icon: FaMapMarked,
            color: 'blue'
        }
    ];

    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="features" className="features-section-ctrl">
            <div className="features-header">
                <h2 className="features-title">
                    Serving the Ummah.<br />
                    Not just users.
                </h2>
            </div>

            <div className="features-grid">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    const isExpanded = expandedCard === feature.id;

                    return (
                        <div key={feature.id} className={`feature-card card-${feature.color} ${isExpanded ? 'expanded' : ''}`}>
                            <div className="card-content">
                                <h3 className="card-title">
                                    {feature.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}{i === 0 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p className="card-description">
                                    {isExpanded ? feature.fullDesc : feature.shortDesc}
                                </p>
                                {!isExpanded && (
                                    <div className="card-icon-wrapper">
                                        <Icon className="card-icon" />
                                    </div>
                                )}
                            </div>
                            <button className="card-btn" onClick={() => toggleCard(feature.id)}>
                                {isExpanded ? 'LESS' : 'MORE'} <FaArrowRight className="btn-arrow" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
