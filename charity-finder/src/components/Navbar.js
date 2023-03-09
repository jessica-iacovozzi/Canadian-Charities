import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand red-bg shadow">
      <div className="container py-2">
        <a className="navbar-brand text-white gothic nav" href="/">Charity Finder</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link text-white gothic nav" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white gothic nav" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white gothic nav" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
