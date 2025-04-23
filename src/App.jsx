// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import './App.css';

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
            {/* Gallery content will go here */}
          </div>
        } />
        
        
      </Routes>
    </Router>
  );
}

export default App;