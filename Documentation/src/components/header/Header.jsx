import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation(); // Get current path

  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          Documentation
        </Link>
        <Link 
          to="/examples" 
          className={`nav-item ${location.pathname === '/examples' ? 'active' : ''}`}
        >
          Examples
        </Link>
        <Link 
          to="/integrations" 
          className={`nav-item ${location.pathname === '/integrations' ? 'active' : ''}`}
        >
          Integrations
        </Link>
        <Link 
          to="/api-reference" 
          className={`nav-item ${location.pathname === '/api-reference' ? 'active' : ''}`}
        >
          API Reference
        </Link>
      </nav>
    </header>
  );
}

export default Header;
