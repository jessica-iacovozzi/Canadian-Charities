import React from 'react';
import '../css/Home.css';
import '../css/Banner.css';
import { scrollTo } from './Home';
import { Fade, Rotate } from "react-awesome-reveal";

function Banner() {
  return(
    <div id='banner-img' >
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center py-5 mb-5">
          <div id='world' className="col-10 col-sm-8 col-lg-6">
            <Fade triggerOnce delay={500}>
              <img src={require('../media/heart-hands-2.png')} className="d-block mx-lg-auto img-fluid" alt="Charity" width="400px" height="400px" />
            </Fade>
          </div>
          <div id='banner' className="col-12 col-lg-6">
            <Rotate triggerOnce delay={500}>
              <h1 className="display-2 lh-1 mt-5">Not all charities are built the same</h1>
            </Rotate>
            <div className='slo-arr'>
              <Fade triggerOnce delay={1000}>
                <p className="slogan">Find one you can trust.</p>
              </Fade>
              <Fade triggerOnce delay={1000} duration={1500}>
                <div onClick={() => {scrollTo("filter-bar")}} className='arrows'>
                  <span class="m_scroll_arrows unu"></span>
                  <span class="m_scroll_arrows doi"></span>
                  <span class="m_scroll_arrows trei"></span>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
