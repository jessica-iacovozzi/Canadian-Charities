import React from 'react';
import '../App.css';
import { scrollTo } from '../Home';
import { Fade, Roll, Rotate } from "react-awesome-reveal";

function Banner() {
  return(
    <div className='container'>
      <div className="container pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div id='world' className="col-10 col-sm-8 col-lg-6">
            <Roll triggerOnce delay={1700} duration={1000}>
              <img src={require('../Donate-Charity-PNG-Image.png')} className="d-block mx-lg-auto img-fluid" alt="Charity" width="700" height="400" loading="lazy"/>
            </Roll>
          </div>
          <div id='banner' className="col-12 col-lg-6">
            <Rotate triggerOnce delay={500}>
              <h1 className="display-3 fw-bold lh-1 mb-3">Not all charities are built the same</h1>
            </Rotate>
            <Fade triggerOnce delay={900} duration={1000}>
              <p className="slogan">Find one you can trust.</p>
            </Fade>
            <Fade triggerOnce delay={1300} duration={1000}>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button onClick={() => {scrollTo("filter-bar")}} type="button" class="btn btn-lg px-4 me-md-2 red-bg banner-btn">Get started</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
