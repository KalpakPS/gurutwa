import React from 'react';
import './Hero.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
    return (
        <div className="hero">
            <DotLottieReact
                src="https://lottie.host/0795a3d5-9ba9-4997-9933-fe973bc3b21f/P0aD9ojFTn.lottie"
                loop
                autoplay
                className="hero-background"
            />
            <img src="/GURUTWA logo white.png" alt="Logo" className="hero-logo" />
            
        </div>
    );
};

export default Hero;