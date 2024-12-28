import React from 'react';
import './Hero.css';
import Button from '../Button/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
    return (
        <div className="hero">
            <DotLottieReact
                src="https://lottie.host/555e75eb-7be5-403b-8427-b5afdf78fc2f/7CkKTpNZO2.lottie"
                loop
                autoplay
                className="hero-background"
            />
            <img src="/GURUTWA logo white.png" alt="Logo" className="hero-logo" />
            <Button />
        </div>
    );
};

export default Hero;