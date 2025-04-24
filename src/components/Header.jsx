import React from 'react';
import Navbar from './NavBar';



function  Header  ({headtext}) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-text">{headtext}</h1> 
        <span>  <Navbar /></span>
       
      </div>
    
    </header>
  );
}

export default Header;