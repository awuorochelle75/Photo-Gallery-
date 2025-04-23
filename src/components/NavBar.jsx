import React from 'react';


function NavBar ()  {
  return (
    <nav className="navbar">
      <ul>
        <li ><a href="#home"  className="links">Home</a></li>
        <li ><a href="#about"  className="links">About</a></li>
        <li><a href="#Favorites"  className="links">Favorites</a></li>
       
      </ul>
    </nav>
  );
}

export default NavBar;
