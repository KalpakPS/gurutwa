import React from 'react';
import Lottie from 'lottie-react';
import './Hero.css';
import Button from '../Button/Button';
import animationData from './Hero.json'; 

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero">
                {/* Replace SVG with Lottie Animation */}
                <Lottie 
                    animationData={animationData} 
                    className="hero-background" 
                    loop={true} 
                />
                <img src="/GURUTWA logo white.png" alt="Logo" className="hero-logo" />
                <Button />
            </div>
        </div>
    );
};

export default Hero;
