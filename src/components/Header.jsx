import React from 'react';
import Navbar from './NavBar';



const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-text">PhoGalleria</h1> 
        <span>  <Navbar /></span>
       
      </div>
    
    </header>
  );
}

export default Header;
