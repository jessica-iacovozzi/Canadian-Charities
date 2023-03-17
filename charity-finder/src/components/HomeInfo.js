import React from 'react';
import '../css/Home.css';
import '../css/HomeInfo.css'

function HomeInfo() {
  return(
    <div id="home-info" class="custom-shape-divider-top-1679023573">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill-1"></path>
      </svg>
      <div className='container home-info-text'>
        <div className='info-1'>
          <p>Canadians deserve to be</p>
          <p>informed in order to</p>
          <p>donate intelligently.</p>
        </div>
        <div className='info-2'>
          <p>Certain charities aren't financally</p>
          <p>transparent. Some spend their</p>
          <p>donations in questionable ways.</p>
        </div>
        <div className='info-3'>
          <p>Thanks to <a href='https://www.charityintelligence.ca/' rel="noreferrer" target='_blank'>charity intelligence</a>,</p>
          <p>it's never been easier</p>
          <p>to give with peace of mind.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeInfo;
