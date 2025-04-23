import React from 'react';
import Navbar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>PhoGalleria</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
