import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar({ links = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Favorites", href: "/favorites" },
  { text: "Contact Us", href: "/contact" }
] }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className={`links ${location.pathname === link.href ? 'active' : ''}`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
