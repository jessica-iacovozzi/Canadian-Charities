import React from 'react';
import Footer from "./Footer";
import '../App.css';
import "../css/Contact.css";
import { BsLinkedin, BsGithub, BsDownload } from "react-icons/bs";
import { MdOutlineWeb, MdOutlineMail } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";
import { Slide } from "react-awesome-reveal";

function Contact() {
  return(
    <div className='main'>
      <video src={require('../white-lines-vid-10.mp4')} autoPlay loop muted />
      <div className='contact-banner'>
        <nav className='navbar navbar-expand contact-nav'>
          <div className="container py-2">
            <ul className='navbar-nav'>
              <li><a href='/'>Charity Finder</a></li>
            </ul>
            <ul className='navbar-nav ms-auto'>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
        <Slide>
        <h1>Let's get in touch!</h1>
        </Slide>
      </div>
      <div className='row links mx-auto'>
        <div className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
          <h4>LinkedIn</h4>
          <a href='https://www.linkedin.com/in/jessica-iacovozzi/' rel="noreferrer" target='_blank' >
              <BsLinkedin className='icon' />
          </a>
        </div>
        <div className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
          <h4>GitHub</h4>
          <a href='https://github.com/jessica-iacovozzi/' rel="noreferrer" target='_blank'>
              <BsGithub className='icon' />
          </a>
        </div>
        <div className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
          <h4>Projects</h4>
          <a href='https://troopl.com/jessicaiacovozzi/' rel="noreferrer" target='_blank'>
              <MdOutlineWeb className='icon' />
          </a>
        </div>
        <div className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
          <h4>Resume</h4>
          <a href='Resume.pdf' download>
              <BsDownload className='icon' />
          </a>
        </div>
        <div className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
          <h4>Email Me</h4>
          <a href="mailto:iacovozzi.jessica@gmail.com">
              <MdOutlineMail className='icon' />
          </a>
        </div>
        <div className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
          <h4>Coffee?</h4>
          <a href='https://www.buymeacoffee.com/jiacovozzi' rel="noreferrer" target='_blank'>
              <BiCoffeeTogo className='icon' />
          </a>
        </div>
      </div>
      <Footer className='contact-footer' />
    </div>
  )
}

export default Contact;
