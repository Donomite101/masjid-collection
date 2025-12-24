import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp } from 'react-icons/fa';
import './Enquiry.css';

gsap.registerPlugin(ScrollTrigger);

const Enquiry = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = '919854638786'; // <-- YOUR number here

        const message =
            'Assalamu Alaikum,%0A%0AI would like to know more about DeenDesk for our masjid. Please share the details and demo process.%0A%0AThank you.';

        window.open(
            `https://wa.me/${phoneNumber}?text=${message}`,
            '_blank'
        );
    };


    return (
        <section className="enquiry-section" ref={sectionRef}>
            <div className="enquiry-container">
                <h2 className="enquiry-title">Digitize Your Masjid with DeenDesk</h2>
                <p className="enquiry-subtitle">
                    See how DeenDesk simplifies records, members, and administration —
                    built specifically for masjid committees.
                </p>
                <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
                    <FaWhatsapp size={22} />
                    Book a Free Walkthrough
                </button>
            </div>
        </section>
    );
};

export default Enquiry;
