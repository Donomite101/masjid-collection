import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Workflow from '../components/Workflow';

import AppShowcase from '../components/AppShowcase';
import LanguageSupport from '../components/LanguageSupport';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <div style={{
                position: 'relative',
                zIndex: 10,
                marginTop: '100vh',
                background: 'white'
            }}>
                <Features />
                <Workflow />
                <AppShowcase />
                <LanguageSupport />
                <Testimonials />
                <FAQ />
                <Enquiry />
                <Footer />
            </div>
        </>
    );
};

export default Home;
