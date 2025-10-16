import React, { useEffect } from 'react'
import '../App.css';
import '../static/css/home.css';
function Home() {


    return (
        <header className="ff-wrapper">

            <navbar />

            <section className="ff-hero">
                <h1 className="ff-title">Forge Your Strength</h1>
                <p className="ff-tagline">
                    Unleash your potential with FitForge. Our state-of-the-art facility and expert
                    trainers will help you achieve your fitness goals.
                </p>
                <a href="#join" className="ff-btn ff-btn--solid">
                    Join Now
                </a>
            </section>
        </header>
    )
}

export default Home
