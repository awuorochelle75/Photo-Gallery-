import React from 'react';

function NavBar({ links = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Favourites", href: "/favourites" },
  { text: "Contact Us", href: "/contact" }
] }) {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="links">{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;