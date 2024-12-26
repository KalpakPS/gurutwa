import React from 'react';
import Hero from '../../components/Hero/Hero';
import './HomePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import About from '../../components/About/About';


const HomePage = () => {
    return (
        <div className="homepage" style={{ backgroundColor: '#11142E', color: 'white' }}>   
            <Hero />
            <About />
        </div>
    );
}

export default HomePage;