import React from 'react';
import '../App.css';
import { scrollTo } from '../Home';

function Banner() {
  return(
    <div className='container'>
      <nav className="navbar navbar-expand red-bg shadow fixed-top">
        <div className="container py-2">
          <a className="navbar-brand text-white gothic" href="/">Charity Finder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link text-white gothic" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white gothic" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white gothic" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div id='world' className="col-10 col-sm-8 col-lg-6">
            <img src={require('../Donate-Charity-PNG-Image.png')} className="d-block mx-lg-auto img-fluid" alt="Charity" width="700" height="400" loading="lazy"/>
          </div>
          <div id='banner' className="col-12 col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Not all charities are built the same</h1>
            <p className="lead">Find one you can trust.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button onClick={() => {scrollTo("filter-bar")}} type="button" class="btn btn-lg px-4 me-md-2 red-bg banner-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
