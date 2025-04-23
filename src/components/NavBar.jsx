import React from 'react';


function NavBar ()  {
  return (
    <nav className="navbar">
      <ul>
        <li ><a href="#home"  className="links">Home</a></li>
        <li ><a href="#about"  className="links">About</a></li>
        <li><a href="#favorites"  className="links">Favorites</a></li>
        <li><a href="#favorites"  className="links">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
