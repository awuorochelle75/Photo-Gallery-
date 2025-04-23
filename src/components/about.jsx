import React from "react";

function About(){
    return(
        <about.section
        className="about-section">
            <div className="about-container">
                <div classname="about-title">
                <h2>About MyPhotoGallery</h2>
                </div>
        
                <div>
                    <h3> View and Like Your Favourite Photos!</h3>
                    <p> Browse endlessly on MyPhotoGallery, viewin and liking g handpicked and curated images from emerging photographers around the world in collobaration with Unsplash AXIOS</p>
                </div> 
        
                <div>
                    <h3>Our Features</h3>
                    <ul>
                        <li>Endless Scrolling - Never run out images to view with our endless site scrolling</li>
                        <li>Favourites - Store all your favourite images with the simple click of a heart</li>
                        <li>Responsive Layout - A responsvie grid layout adjusts itself and seamlessly displays our sites images </li>
                        <li>Image Search - Filter through the endless imaging using our search bar to search for specific images</li>
                    </ul>
                </div>
        
                <div>
                    <h3>Quick and Fast</h3>
                    <p>Built using react + vite for instant loading, seamless browsing and a cleanr interface</p>
                </div>
        
        
                <div>
                    <h3>Creators</h3>
                    <p>All Rights reserved to Presbury Wamae, Rochelle Awour and Neville Ng'ang'a</p>
                </div>
            </div>
        </about.section>
         )
    }


export default About