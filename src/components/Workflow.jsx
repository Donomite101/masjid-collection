import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUserPlus, FaMapMarkerAlt, FaClipboardCheck, FaSearch, FaChartBar } from 'react-icons/fa';
import './Workflow.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { id: 1, icon: <FaUserPlus />, title: "Add Local Person", desc: "Register new congregants quickly.", color: "blue" },
    { id: 2, icon: <FaMapMarkerAlt />, title: "Assign Area", desc: "Link them to their Mohalla.", color: "orange" },
    { id: 3, icon: <FaClipboardCheck />, title: "Log Activity", desc: "Record Mulakaat and notes.", color: "green" },
    { id: 4, icon: <FaSearch />, title: "Review Notes", desc: "Check Wasooli and Jod details.", color: "yellow" },
    { id: 5, icon: <FaChartBar />, title: "Track Progress", desc: "Monitor 10-day engagement cycles.", color: "purple" }
];

const Workflow = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.workflow-sticker',
                { y: 50, opacity: 0, rotation: 5 },
                {
                    y: 0, opacity: 1, rotation: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="workflow-section" ref={sectionRef}>
            <div className="container">
                <h2 className="text-center mb-2 section-title">How It Works</h2>
                <div className="workflow-grid">
                    {steps.map((step) => (
                        <div className={`workflow-sticker ${step.color}`} key={step.id}>
                            <div className="sticker-number">{step.id}</div>
                            <div className="sticker-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
