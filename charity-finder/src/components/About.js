import React from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/About.css";
import "../css/Flickity.css";
import { JackInTheBox } from "react-awesome-reveal";
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 1,
  draggable: '>1',
  freeScroll: true,
  wrapAround: true,
  autoPlay: 4000
}

function About() {
  return(
    <div>
    <Navbar />
    <div className='about-slice'>
      <div className="container about-banner">
        <JackInTheBox triggerOnce >
        {/* <h1>Hello there, I'm Jess!</h1> */}
          <img className='hi-img' src={require('../hi.png')} alt="Hi, I'm Jess" />
          <img className='me-img' src={require('../mini-me.png')} alt='Me' />
        </JackInTheBox>
      </div>
    </div>
    <div className='bottom'>
      <Flickity className={'carousel'} options={flickityOptions} >
          <div className='carousel-cell'>
            <h3>I created this website to help Canadians make better decisions when it comes to donating money to charities.</h3>
          </div>
          <div className='carousel-cell'>
            <h3>Unfortunately, not all charities have the same degree of impact.</h3>
          </div>
          <div className='carousel-cell'>
            <h3>All the information was scraped and belongs to Charityintelligence.ca.</h3>
          </div>
        </Flickity>
      <Footer />
    </div>
      </div>
  )
}

export default About;
