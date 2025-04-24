import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import './App.css';
import GalleryApp from './GalleryApp';
import About from './components/About';
import Contact from './components/Contact';
import Favourites from './components/Favourites';

function AppContent() {
  const [title] = useState("PhoGalleria");
  const location = useLocation();
  
  // List of paths where header should be hidden
  const hideHeaderPaths = ['/about', '/contact', '/favorites'];

  return (
    <>
      {/* Show header only if current path is not in hideHeaderPaths */}
      {!hideHeaderPaths.includes(location.pathname) && <Header headtext={title} />}
      
      <Routes>
        <Route path="/" element={
          <div className="home-page">
            <Searchbar />
            <GalleryApp />
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;