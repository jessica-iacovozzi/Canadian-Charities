import React from 'react';
import '../App.css';

function Banner() {
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">Charity Finder</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead shadow">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <h1 class="fw-light">Not all charities are built the same</h1>
              <p class="lead">Find a charity you can trust!</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Banner;
