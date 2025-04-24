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
                            <h3>View and Like Your Favorite Photos!</h3>
                            <p>
                                Browse endlessly on MyPhotoGallery, viewing and liking handpicked 
                                and curated images from emerging photographers around the world 
                                in collaboration with Unsplash API.
                            </p>
                        </div>
                
                        <div className="about-card">
                            <h3>Our Features</h3>
                            <ul>
                                <li><strong>Endless Scrolling</strong> - Never run out of images with our infinite scroll</li>
                                <li><strong>Favorites</strong> - Save images with a simple heart click</li>
                                <li><strong>Responsive Layout</strong> - Adapts perfectly to any device</li>
                                <li><strong>Image Search</strong> - Find specific images quickly</li>
                            </ul>
                        </div>
                
                        <div className="about-card">
                            <h3>Fast and Efficient</h3>
                            <p>
                                Built with React and Vite for blazing fast performance, 
                                smooth browsing, and a clean modern interface.
                            </p>
                        </div>
                
                        <div className="about-card">
                            <h3>Creators</h3>
                            <p>
                                All rights reserved to Presbury Wamae, Rochelle Awour, 
                                and Neville Ng'ang'a.
                            </p>
                        </div>
                    </div>
                </section>
                
                <footer className="about-footer">
                    <div className="footer-content">
                        <h5>MyPhotoGallery</h5>
                        <p>© {new Date().getFullYear()} All Rights Reserved</p>
                        <p>Created with ❤️ by Presbury, Rochelle, and Neville</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default About;