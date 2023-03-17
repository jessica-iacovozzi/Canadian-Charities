import React from 'react';
import Navbar from "./Navbar";
import BurgerNav from "./BurgerNav";
import Footer from "./Footer";
import '../css/Home.css';
import "../css/About.css";
import "../css/Flickity.css";
import { Slide } from "react-awesome-reveal"
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 1,
  draggable: '>1',
  freeScroll: true,
  wrapAround: true
}

function About() {
  return(
    <div id="outer-container">
      <BurgerNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap" className='content'>
        <Navbar />
        <div className='about-slice'>
          <div className="about-banner">
            <div className='banner-text'>
              <h4 id='hello-1'>Hello, my name is</h4>
              <div id='hello-2' class="content">
                <h2>Jessica</h2>
                <h2>Jessica</h2>
              </div>
              <h3 id='hello-3'>And I'm a web developer</h3>
            </div>
            <Slide triggerOnce delay={1000}>
              <img id='me' className='me-img' src={require('../media/me-frame-tape.png')} alt='Me' />
            </Slide>
          </div>
        </div>
        <div>
          <Flickity className={'carousel'} options={flickityOptions} >
            <div className='carousel-cell'>
              <h4>Charity Intelligence researches Canadian charities and posts free reports based on financial transparency, results, demonstrated impact, need for funding and % of dollars left available for programs.</h4>
            </div>
            <div className='carousel-cell'>
              <h4>Unfortunately, not all charities have the same degree of impact. That's why I created this website.</h4>
            </div>
            <div className='carousel-cell'>
              <h4>With the help of charityintelligence.ca, I was able to facilitate the process of finding trustworthy Canadian charities.</h4>
            </div>
          </Flickity>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default About;
