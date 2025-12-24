import React from 'react';
import { FaRocket } from 'react-icons/fa';
import './GetDeenConnect.css';

const GetDeenConnect = () => {
    return (
        <section className="get-started-section">
            <div className="container">
                <div className="get-started-content">
                    <div className="get-started-badge">
                        <FaRocket />
                        <span>Transform Your Masjid</span>
                    </div>

                    <h2 className="get-started-title">
                        Get Started with <span className="highlight-green">Deen</span> Desk
                    </h2>

                    <p className="get-started-description">
                        Request a demo or contact us to digitize your masjid today.
                    </p>

                    <button className="cta-demo-btn">
                        <div className="btn-icon-group">
                            <div className="btn-circle orange"></div>
                            <div className="btn-circle blue"></div>
                            <div className="btn-circle green"></div>
                        </div>
                        Request Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetDeenConnect;
