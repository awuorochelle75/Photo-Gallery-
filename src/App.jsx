
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import './App.css';
import GalleryApp from './GalleryApp';
import about from './components/About';
import Contact from './components/Contact';
import favourites from './components/Favourites';

function App() {
  const [title] = useState("PhoGalleria");

  return (
    <Router>
      <Header headtext={title} />
      
      <Routes>
        {/* Home route - contains Searchbar and future gallery */}
        <Route path="/" element={
          <div className="home-page">
            <Searchbar />
            <GalleryApp />
          </div>
        } />
        
        {/* About */}
  <Route path="/about" element={<About />} />
{/* Contact */}
<Route path="/contact" element={<Contact />} />




      </Routes>
    </Router>
  );
}

export default App;
