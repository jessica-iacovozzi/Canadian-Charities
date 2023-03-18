import React from 'react';
import '../css/Home.css';
import '../css/Banner.css';
import { scrollTo } from './Home';

function Banner() {
  return(
    <div id='banner-img' >
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center pb-5">
          <div id='world' className="col-10 col-sm-8 col-xl-5">
              <img id='home-logo' src={require('../media/heart-hands-2.png')} className="d-block mx-lg-auto img-fluid" alt="Charity" width="400px" height="400px" />
          </div>
          <div id='banner' className="col-12 col-xl-7">
              <h1 id='home-title' className="display-2 lh-1 mt-5">Not all charities are built the same</h1>
            <div className='slo-arr'>
                <p className="slogan">Find one you can trust.</p>
                <div onClick={() => {scrollTo("home-info", "end")}} className='arrows'>
                  <span className="m_scroll_arrows one"></span>
                  <span className="m_scroll_arrows two"></span>
                  <span className="m_scroll_arrows three"></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
