import React from 'react';
import '../App.css';

function Banner() {
  return(
    <div>
      <nav class="navbar navbar-expand-lg red-bg shadow fixed-top">
        <div class="container py-2">
          <a class="navbar-brand text-white gothic" href="/">Charity Finder</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link text-white gothic" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white gothic" href="/">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white gothic" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container col-xxl-8 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={require('../Donate-Charity-PNG-Image.png')} class="d-block mx-lg-auto img-fluid" alt="Charity" width="700" height="400" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Not all charities are built the same</h1>
            <p class="lead">Find one you can trust.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button onClick={() => {window.scrollTo({ top: 600, left: 0, behavior: 'smooth' })}} type="button" class="btn btn-lg px-4 me-md-2 red-bg banner-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
