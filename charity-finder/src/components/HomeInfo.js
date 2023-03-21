import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../css/Home.css';
import '../css/HomeInfo.css'

const charityIntelligenceLink = 'https://www.charityintelligence.ca/'
const RatingsLink = 'https://www.charityintelligence.ca/giving-with-impact/understanding-our-ratings'
const ImpactLink = 'https://www.charityintelligence.ca/social-impact-ratings'

function HomeInfo() {
  return(
    <div>
      <div class="home-info custom-shape-divider-top-1679023573">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill-1"></path>
        </svg>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
          <h3>Thanks to <b><a href={charityIntelligenceLink} target='_blank' rel='noreferrer'>Charity Intelligence</a></b>,<br/> it's never been easier to donate with peace of mind.</h3>
        </AnimationOnScroll>
        <div className='d-flex align-items-center b-piechart'>
          <div className='d-flex align-items-center justify-content-evenly'>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <div className='bubbles'>
                <h5>Charity Intelligence Canada is a team of 30+ dedicated professionals who have been doing rigorous research and analysis on Canadian charities since 2006.</h5>
                <h5>Its mission is to provide Canadian donors with information that helps them make informed and intelligent giving decisions to have the greatest impact.</h5>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className='piechart'>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
            <h3>The Charity Rating Process</h3>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" style={{display: 'flex'}}>
            <img src={require('../media/cf-pie-chart.png')} alt='Pie chart'></img>
          </AnimationOnScroll>
        </div>
      </div>

      <div className="home-info">
        <div className='container home-info-text'>
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <h4>Social Impact Rating</h4>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <p>"The impact ratings display the social impact produced by the charity for each dollar donated as well as a measure of the quality of the data available to assess the charity's social impact. For a more detailed description of this metric, please see our <em><a href={ImpactLink} target='_blank' rel="noreferrer">Social Impact Ratings Methodology</a></em> page. We are still in the process of reviewing social impact for charities, thus you will not always see it in the analysis. Where it is available, it accounts for 20% of the star rating."<br/> (Charity Intelligence, <em><a href={RatingsLink} target='_blank' rel="noreferrer">Understanding our Ratings</a></em>)</p>
            </AnimationOnScroll>
          </div>
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <h4>Results Reporting</h4>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <p>"The results reporting grade is an evaluation of the charity's reporting levels. This evaluation takes into account the public reporting of the charity's activities, outputs, and outcomes, without assessing the strength or quality of these elements. This grade accounts for 35% of the star rating. A charity can have a score ranging from A+ to F."<br/> (Charity Intelligence, <em><a href={RatingsLink} target='_blank' rel="noreferrer">Understanding our Ratings</a></em>)</p>
            </AnimationOnScroll>
          </div>
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <h4>Cents to the Cause</h4>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <p>"We evaluate how many cents are available to go towards the charity's programs for each dollar donated. We have developed a "reasonable range" for overhead spending: 5% to 35%. If overhead costs are below 5%, we reason that the charity is either not spending enough on its fundraising and overhead costs, or it may not be disclosing these costs appropriately. Above 35%, there is concern that the charity may not be operating effectively. Above 50%, there is concern that the charity is overspending on fundraising and administrative costs. This ratio accounts for 15% of the star rating."<br/> (Charity Intelligence, <em><a href={RatingsLink} target='_blank' rel="noreferrer">Understanding our Ratings</a></em>)</p>
            </AnimationOnScroll>
          </div>
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <h4>Need for Funding</h4>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <p>"Another component of our evaluation is the charity's need for funding, comparing its funding reserves relative to the costs of its programming. Funding reserves include liquid assets of cash, cash equivalents, and investment securities, less interest-bearing liabilities. The need for funding metric is calculated based on the ratio of these two totals, excluding donor-endowed funds from the funding reserves. This ratio accounts for 15% of the star rating."<br/> (Charity Intelligence, <em><a href={RatingsLink} target='_blank' rel="noreferrer">Understanding our Ratings</a></em>)</p>
            </AnimationOnScroll>
          </div>
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <h4>Financial Transparency</h4>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
              <p>"We judge a charity's financial transparency based on how easily we can access its audited financial statements. A fully transparent score means that 2+ years of its statements are posted on its website. A charity's financial transparency accounts for 15% of the star rating."<br/> (Charity Intelligence, <em><a href={RatingsLink} target='_blank' rel="noreferrer">Understanding our Ratings</a></em>)</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeInfo;
