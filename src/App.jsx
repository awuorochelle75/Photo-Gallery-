import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import './App.css';
import GalleryApp from './GalleryApp';
import Contact from './components/Contact';
import Favourites from './components/favourites';

function App() {
  const [title] = useState("PhoGalleria");

  return (
    <Router>
      <Header headtext={title} />
      
      <Routes>
        <Route path="/" element={
          <div className="home-page">
            <Searchbar />
            <GalleryApp />
            <Contact/>
            <Favourites/>
            <Searchbar/>
          </div>
        } />
        
        
      </Routes>
    </Router>
  );
}

export default App;


