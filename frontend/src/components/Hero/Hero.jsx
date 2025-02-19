import React from 'react';
import './Hero.css';
import bgVideo from '../../assets/bgHero.mp4';
import logo from '../../assets/images/logo.png';

const Hero = () => {
    return (
        <div className="Hero">
            <video autoPlay loop muted playsInline className="bgVideo">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <img src={logo} alt="" />
                <div className="block">Welcome to Krishi Yantra</div>
                <div className="title">
                    <h1>Transform Your Farm with Smart Technology</h1>
                    <p className="desc">
                        Access AI-driven solutions for farming. Embrace the future of agriculture today with cutting-edge solutions.
                    </p>
                </div>
                <div className="buttons">
                    <a href="" className='dark-btn'>Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
