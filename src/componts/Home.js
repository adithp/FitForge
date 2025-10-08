import React, { useEffect } from 'react'
import '../App.css';
import '../static/css/home.css';
function Home() {


    return (
        <header className="ff-wrapper">

            <nav className="ff-nav">
                <div className="ff-brand">

                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L22 8L14 14L6 8L14 2Z" fill="#08ff20" />
                        <path d="M14 14L22 8L22 20L14 26L6 20L6 8L14 14Z" fill="#06d91a" />
                    </svg>
                    <span className="ff-brand-name">FitForge</span>
                </div>

                <ul className="ff-links">
                    {["Home", "Classes", "Trainers", "Membership", "Contact"].map(
                        (label) => (
                            <li key={label}>
                                <a href={`#${label.toLowerCase()}`}>{label}</a>
                            </li>
                        )
                    )}
                </ul>

                <a href="#join" className="ff-btn ff-btn--outline">
                    Join Now
                </a>
            </nav>


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
