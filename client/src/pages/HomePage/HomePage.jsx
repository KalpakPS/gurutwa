import React from 'react';
import Hero from '../../components/Hero/Hero';
import './HomePage.css';
import Contact from '../../components/Faq/Contact'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import About from '../../components/About/About';
import EventSection from '../../components/EventSection/EventSection';


const HomePage = () => {
    return (
        <div className="homepage">   
            <Hero />
            <About />
            <EventSection />
            <Contact />
        </div>
    );
}

export default HomePage;