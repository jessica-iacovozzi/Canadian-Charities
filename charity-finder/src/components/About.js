import React from 'react';
import Navbar from "./Navbar";
import BurgerNav from "./BurgerNav";
import Footer from "./Footer";
import '../css/Home.css';
import "../css/About.css";
import "../css/Flickity.css";
import { JackInTheBox } from "react-awesome-reveal";
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 1,
  draggable: '>1',
  freeScroll: true,
  wrapAround: true,
  autoPlay: 6000
}

function About() {
  return(
    <div id="outer-container">
      <BurgerNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap">
        <Navbar />
        <div className='about-slice'>
          <div className="about-banner">
            <JackInTheBox triggerOnce >
              <img className='hi-img' src={require('../media/hi.png')} alt="Hi, I'm Jess" />
              <img className='me-img' src={require('../media/mini-me.png')} alt='Me' />
            </JackInTheBox>
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
