import React from 'react';
import Navbar from "./Navbar";
import BurgerNav from "./BurgerNav";
import Footer from "./Footer";
import '../css/Home.css';
import "../css/About.css";
import "../css/Flickity.css";
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 1,
  draggable: '>1',
  freeScroll: true,
  wrapAround: true
}

function About() {
  return(
    <div id="outer-container" className='about-bg'>
      <BurgerNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap" className='content'>
        <Navbar />
        <div className="about-banner">
          <div className='banner-text'>
            <h4 id='hello-1'>Hello, my name is</h4>
            <div id='hello-2' class="content">
              <h2>Jessica</h2>
              <h2>Jessica</h2>
            </div>
            <h3 id='hello-3'>And I'm a web developer</h3>
          </div>
          <img id='me' className='me-img' src={require('../media/me.png')} alt='Me' />
        </div>
        <div>
          <Flickity className={'carousel'} options={flickityOptions} >
            <div className='carousel-cell'>
              <h4>This React app communicates with my API, which gives access to the charities' information taken from charityintelligence.ca.</h4>
            </div>
            <div className='carousel-cell'>
              <h4>Charity Intelligence Canada did all the research and ratings of the charities.</h4>
            </div>
            <div className='carousel-cell'>
              <h4>With their help, I was able to facilitate the process of finding trustworthy Canadian charities.</h4>
            </div>
          </Flickity>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default About;
