import React, { useState } from "react";
import "./App.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";

function App() {
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <>
      {/* Main Header with Navigation */}
    <header>
        <nav aria-label="Main navigation">
            <div class="logo">
                <h1>Agora Convention Center</h1>
            </div>
            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    {/* Hero Section with Two Column Flexbox Layout */}
    <main>
        <section className="hero" aria-labelledby="hero-heading">
            {/* Background overlay */}
            <div className="hero-overlay"></div>
            {/* Two Column Container */}
            <div className="hero-container">
                {/* Left Column: Heading, Tagline, CTA */}
                <div className="hero-left">
                    <h2 id="hero-heading">Plan Your Perfect Conference</h2>
                    <p className="tagline">Professional spaces, transparent pricing, unforgettable events</p>
                    <button className="cta-button" onClick={() => handleGetStarted()}>
                        Get Started
                    </button>
                </div>

                {/* Right Column: About Content */}
                <div className="hero-right">
                    <div className="aboutus_main">
                    <AboutUs />
                    </div>
                </div>
            </div>
        </section>

        {/* Features/Value Proposition Section */}
        <section id="services" aria-labelledby="services-heading">
            <h2 id="services-heading">Why Choose Agora</h2>
            <ul>
                <li>
                    <h3>Transparent Pricing</h3>
                    <p>Real-time expense calculations with no hidden fees</p>
                </li>
                <li>
                    <h3>Flexible Spaces</h3>
                    <p>Modular rooms adaptable to any event size</p>
                </li>
                <li>
                    <h3>Full-Service Support</h3>
                    <p>Catering, tech support, and event coordination included</p>
                </li>
            </ul>
        </section>
    </main>

    {/* Footer */}
    <footer id="contact">
        <p>&copy; 2026 Agora Convention Center. All rights reserved.</p>
        <address>
            <p>123 Business Plaza, Metropolitan District</p>
            <p>Email: <a href="mailto:events@agoracenter.com">events@agoracenter.com</a></p>
        </address>
    </footer>

    {/* <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <ConferenceEvent />
  </div> */}
    </>
  );
}

export default App;
