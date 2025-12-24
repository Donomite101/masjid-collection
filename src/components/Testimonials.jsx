import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { FaStarAndCrescent } from 'react-icons/fa';
import './Testimonials.css';

gsap.registerPlugin(Draggable);

const testimonials = [
    {
        name: "Imam Abdullah",
        role: "Masjid Al-Noor",
        text: "DeenDesk has completely transformed our daily operations. The Mulakaat tracking feature alone has saved us countless hours of administrative work, allowing us to focus more on our community's spiritual needs.",
        color: "green"
    },
    {
        name: "Brother Yusuf",
        role: "Community Leader",
        text: "The area-wise analytics are a game-changer. We can now visualize exactly where our efforts are needed most. It's not just an app; it's a strategic tool for community growth and engagement.",
        color: "black"
    },
    {
        name: "Brother Ali",
        role: "Volunteer",
        text: "I've used many tools, but DeenDesk is by far the most intuitive. It's simple enough for our elders to understand yet powerful enough to handle all our complex data needs. Truly a blessing.",
        color: "yellow"
    },
    {
        name: "Imam Ahmed",
        role: "Masjid Quba",
        text: "Managing donations and events used to be a headache. With DeenDesk, everything is streamlined. The transparency it brings has increased our community's trust and participation significantly.",
        color: "blue"
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, []);

    return (
        <section className="testimonials-section">
            <div className="container test-container">

                {/* LEFT */}
                <div className="test-left">
                    <div className="headline-wrapper">
                        <h2 className="test-headline">
                            DON'T <br /> BELIEVE US?
                        </h2>
                    </div>

                    <p className="test-subtitle">Hear from real masjid admins</p>
                    <button className="test-cta">JOIN NOW</button>
                </div>

                {/* RIGHT */}
                <div className="test-right" ref={scrollRef}>
                    <div className="t-cards-stack">
                        {testimonials.map((item, i) => (
                            <div
                                key={i}
                                className={`t-card ${item.color}`}
                            >
                                <p className="test-text">“{item.text}”</p>
                                <div className="test-author">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
