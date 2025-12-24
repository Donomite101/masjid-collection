import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AppShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const phoneRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(phoneRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="app-showcase">
            <div className="container text-center">
                <h2 className="mb-2 section-title-dark">Experience the Interface</h2>
                <p className="mb-2 showcase-subtitle">Clean, intuitive, and designed for focus.</p>

                <div className="phone-mockup" ref={phoneRef}>
                    <div className="phone-notch"></div>
                    <div className="phone-screen">
                        <div className="app-screen-content">
                            {/* Fake UI Header */}
                            <div className="ui-header">
                                <span className="ui-time">12:30</span>
                                <div className="ui-status-icons">
                                    <span>5G</span>
                                    <span>100%</span>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="app-top-bar">
                                <span className="app-logo-text">DeenConnect</span>
                                <div className="app-profile-pic"></div>
                            </div>

                            {/* Stats Grid */}
                            <div className="ui-stats-grid">
                                <div className="ui-stat-card blue">
                                    <span className="stat-value">1,250</span>
                                    <span className="stat-label">Members</span>
                                </div>
                                <div className="ui-stat-card orange">
                                    <span className="stat-value">450</span>
                                    <span className="stat-label">Students</span>
                                </div>
                                <div className="ui-stat-card green">
                                    <span className="stat-value">320</span>
                                    <span className="stat-label">Professionals</span>
                                </div>
                                <div className="ui-stat-card purple">
                                    <span className="stat-value">85</span>
                                    <span className="stat-label">Mulaqaat</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="ui-action-grid">
                                <button className="ui-action-btn">
                                    <div className="action-icon yellow"></div>
                                    <span>Add Members</span>
                                </button>
                                <button className="ui-action-btn">
                                    <div className="action-icon blue"></div>
                                    <span>View Members</span>
                                </button>
                                <button className="ui-action-btn">
                                    <div className="action-icon green"></div>
                                    <span>Create Notes</span>
                                </button>
                                <button className="ui-action-btn">
                                    <div className="action-icon orange"></div>
                                    <span>Add Area</span>
                                </button>
                            </div>

                            {/* Bottom Nav */}
                            <div className="app-nav">
                                <div className="nav-item active"></div>
                                <div className="nav-item"></div>
                                <div className="nav-item"></div>
                                <div className="nav-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
