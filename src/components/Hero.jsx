import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FaMosque, FaGooglePlay, FaApple, FaCheckCircle } from 'react-icons/fa';
import deendeskLogo from '../assets/deendesk.png';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animations
    tl.fromTo('.ctrl-header-floating', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo('.ctrl-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo('.ctrl-headline', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }, "-=0.6")
      .fromTo('.ctrl-cta-green', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");

  }, []);

  return (
    <div className="hero-ctrl-wrapper">
      {/* Header */}
      <header className="ctrl-header-floating">
        <div className={`floating-nav-container ${isNavOpen ? 'mobile-open' : ''}`}>
          <div className="nav-top-row">
            <div className="nav-logo">
              <img src={deendeskLogo} alt="Deen Desk Logo" className="logo-icon" />
              <span className="logo-text">
                <span style={{ color: '#0F5132' }}>Deen</span> Desk
              </span>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? '✕' : '☰'}
            </button>
          </div>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#community">Community</a>
            <a href="#about">About</a>
          </nav>

          <a href="#download" className="nav-btn-action">Download App</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="ctrl-main">
        <p className="ctrl-subtitle">Serving the community<br />with faith and dedication</p>

        <div className="ctrl-headline-container">
          <h1 className="ctrl-headline">
            <span style={{ color: '#0F5132' }}>DEEN</span> <div className="ctrl-icon-box"><FaMosque /></div> DESK
          </h1>
        </div>

        <button className="ctrl-cta-green">
          <div className="cta-icon-group">
            <div className="cta-circle orange"></div>
            <div className="cta-circle blue"></div>
            <div className="cta-circle white"></div>
          </div>
          Download App
        </button>
      </main>
    </div>
  );
};

export default Hero;
