import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import BurgerNav from "./BurgerNav";
import '../css/Home.css';
import "../css/Contact.css";
import { BsLinkedin, BsGithub, BsDownload } from "react-icons/bs";
import { MdOutlineWeb, MdOutlineMail } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";

function Contact() {
  return(
    <div id="outer-container" className='contact-bg'>
      <BurgerNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap">
        <Navbar />
        <div className='contact-banner'>
          Let's get in touch
          <div>Let's get in touch</div>
          <div>Let's get in touch</div>
          <div>Let's get in touch</div>
          <div>Let's get in touch</div>
        </div>
        <div className='row links mx-auto'>
          <div id='link-1' className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/jessica-iacovozzi/' rel="noreferrer" target='_blank' >
                <BsLinkedin className='icon' />
            </a>
          </div>
          <div id='link-2' className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
            <h4>GitHub</h4>
            <a href='https://github.com/jessica-iacovozzi/' rel="noreferrer" target='_blank'>
                <BsGithub className='icon' />
            </a>
          </div>
          <div id='link-3' className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
            <h4>Projects</h4>
            <a href='https://troopl.com/jessicaiacovozzi/' rel="noreferrer" target='_blank'>
                <MdOutlineWeb className='icon' />
            </a>
          </div>
          <div id='link-4' className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
            <h4>Resume</h4>
            <a href='Resume.pdf' download>
                <BsDownload className='icon' />
            </a>
          </div>
          <div id='link-5' className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
            <h4>Email Me</h4>
            <a href="mailto:iacovozzi.jessica@gmail.com">
                <MdOutlineMail className='icon' />
            </a>
          </div>
          <div id='link-6' className="col d-flex flex-wrap flex-column align-items-center align-content-center pt-4">
            <h4>Coffee?</h4>
            <a href='https://www.buymeacoffee.com/jiacovozzi' rel="noreferrer" target='_blank'>
                <BiCoffeeTogo className='icon' />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact;
