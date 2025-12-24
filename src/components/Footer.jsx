import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="dd-footer-wrapper">
            <div className="dd-footer-card">

                {/* Top Section */}
                <div className="dd-footer-top">

                    {/* Left - Newsletter */}
                    <div className="dd-footer-left">
                        <h2>
                            <span>Deen</span>Desk Newsletter
                        </h2>
                        <div className="dd-footer-input">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email address"
                            />
                            <button type="button">Subscribe</button>
                        </div>
                    </div>

                    {/* Right - Description & Links */}
                    <div className="dd-footer-right">
                        <p>
                            A modern and secure platform designed to help masjid
                            committees manage records, members, and administration
                            with clarity and trust.
                        </p>
                        <div className="dd-footer-links">
                            <a href="#features">Features</a>
                            <a href="#security">Security</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#privacy">Privacy</a>
                        </div>
                    </div>

                </div>

                {/* Big Brand Text */}
                <div className="dd-footer-brand">
                    DEENDESK
                </div>

                {/* Bottom */}
                <div className="dd-footer-bottom">
                    <span>© {new Date().getFullYear()} DeenDesk. All rights reserved.</span>
                    <div>
                        <a href="#terms">Terms</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
