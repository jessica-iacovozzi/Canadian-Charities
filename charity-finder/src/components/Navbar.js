import React from 'react';
import '../css/Home.css';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand" id="reg-nav">
      <div className="container py-2">
        <a className="navbar-brand gothic nav" href="/">Charity Finder</a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link gothic nav" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link gothic nav" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link gothic nav" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
