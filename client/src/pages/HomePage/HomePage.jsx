import React from 'react';
import Hero from '../../components/Hero/Hero';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <Hero />
            <section className="features">
                <h2>Our Features</h2>
                <div className="feature-list">
                    <div className="feature-item">Feature 1</div>
                    <div className="feature-item">Feature 2</div>
                    <div className="feature-item">Feature 3</div>
                </div>
            </section>
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