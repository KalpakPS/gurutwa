import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero">
                <img src="./Hero.svg" alt="Hero Background" className="hero-background" />
                <img src="/GURUTWA logo white.png" alt="Logo" className="hero-logo" />
                <Button />
            </div>
        </div>
    );
};

export default Hero;
