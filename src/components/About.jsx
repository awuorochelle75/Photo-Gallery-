import React from "react";
import "../About.css";
import Navbar from './NavBar';

function About() {
    return (
        <div className="about-layout">
            <div className="navbar-about">
                <Navbar />
            </div>
            <main className="about-content">
                <section className="about-section">
                    <div className="about-title">
                        <h2>About Us</h2>
                    </div>
                    
                    <div className="about-container">
                        <div className="about-card"> 
                            <h3>Who we are</h3>
                            <p>
                            PhoGalleria was founded in 2020 with one goal: to celebrate and share beautiful moments captured through the lenses of photographers from all over the world. We are a global community of photography lovers—creators, curators, and storytellers—brought together by a shared passion for visual storytelling. From breathtaking landscapes to intimate portraits, we showcase images that spark emotion, preserve memories, and reflect the diversity of human experience.
                            </p>
                        </div>

                        <div className="about-card">
                            <h3>Our mission</h3>
                            <p>
                            At PhoGalleria, we believe that every photograph tells a unique story. Our mission is to bring these stories to the forefront, connecting people through the universal language of imagery. We are passionate about showcasing the diverse perspectives and creative talents of photographers from all corners of the globe, while inspiring others to capture and appreciate the beauty in the world around us. 
                            </p>
                        </div>
                
                
                        <div className="about-card">
                            <h3>What We Offer</h3>
                            <ul>
                                <li><strong>Global Showcase</strong> – Featuring photographers who've journeyed across continents</li>
                                <li><strong>Favorites</strong> – Like and save your favorite shots with a simple tap</li>
                                <li><strong>Smart Search</strong> – Discover specific themes or places instantly</li>
                                <li><strong>Endless Browsing</strong> – Keep scrolling and discovering with our infinite gallery</li>
                                <li><strong>Responsive Design</strong> – Works beautifully on all devices</li>
                            </ul>
                        </div>
                
                      
                        <div className="about-card">
                            <h3>Meet the Creators</h3>
                            <p>
                                PhoGalleria is proudly crafted by Presbury Wamae, Rochelle Awuor, and Neville Ng'ang'a — a passionate trio of developers and design lovers who believe in the power of photography to tell stories, inspire creativity, and connect people across borders.
                            </p>
                        </div>
                    </div>
                </section>
                
                <footer className="about-footer">
                    <div className="footer-content">
                        <h5>PhoGalleria</h5>
                        <p>© {new Date().getFullYear()} All Rights Reserved</p>
                        <p>Created with ❤️ by Presbury, Rochelle, and Neville</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default About;
