import React from 'react';
import Navbar from "./Navbar";
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
    <div>
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
            <h4>All the information was scraped from and belongs to Charityintelligence.ca.</h4>
          </div>
          <div className='carousel-cell'>
            <h4>I created this website to help Canadians make better decisions when it comes to donating money to charities.</h4>
          </div>
          <div className='carousel-cell'>
            <h4>Unfortunately, not all charities have the same degree of impact.</h4>
          </div>
        </Flickity>
      <Footer/>
      </div>
    </div>
  )
}

export default About;
