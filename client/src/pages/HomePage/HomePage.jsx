import React from 'react';
import Hero from '../../components/Hero/Hero';
import './HomePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const HomePage = () => {
    return (
        <div className="homepage" style={{ backgroundColor: '#11142E', height: '100vh', color: 'white' }}>
            
            <Hero />
            
            <section className="about">
                <h2>About Us</h2>
                <p>We are a company that does amazing things.</p>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Email: contact@company.com</p>
            </section>
        </div>
    );
}

export default HomePage;