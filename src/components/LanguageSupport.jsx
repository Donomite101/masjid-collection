import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLanguage } from 'react-icons/fa';
import './LanguageSupport.css';

gsap.registerPlugin(ScrollTrigger);

const languages = [
    { name: "Hindi", native: "हिंदी", color: "orange" },
    { name: "English", native: "English", color: "blue" },
    { name: "Urdu", native: "اردو", color: "green" },
    { name: "Marathi", native: "मराठी", color: "yellow" }
];

const LanguageSupport = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.lang-sticker',
                { scale: 0.8, opacity: 0, rotation: -5 },
                {
                    scale: 1, opacity: 1, rotation: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="language-section" ref={sectionRef}>
            <div className="container text-center">
                <div className="lang-header">
                    <FaLanguage className="lang-icon-main" />
                    <h2 className="section-title-lang">Multi-Language Support</h2>
                </div>

                <div className="languages-grid">
                    {languages.map((lang, index) => (
                        <div className={`lang-sticker ${lang.color}`} key={index}>
                            <span className="lang-native">{lang.native}</span>
                            <span className="lang-name">{lang.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LanguageSupport;
