import React from 'react';
import { Link } from 'react-router-dom';
import { missionImg, teamImg, testimonialsImg, timeImg, valuesImg } from '../assets/icons';

const About = () => {
  return (
    <section id="about" className="pb-10 font-cinzel bg-background flex flex-col items-center text-white relative">
      <hr className="w-[90vw]" />
      <h1 className="md:text-2xl text-center font-bold text-xl mt-20 mb-10">Erfahren Sie mehr über Uns</h1>
      <div className='rounded-xl flex gap-16 flex-wrap items-center justify-center'>
        <Link to="/unsere-geschichte" className='about-card'>
          <img src={timeImg} alt="History" width={120}/>
          <p>Unsere Geschichte</p>  
        </Link>
        <Link to="/unser-team" className='about-card'>    
          <img src={teamImg} alt="Team" width={120}/>
          <p>Unser Team</p>  
        </Link>
        <Link to="/unsere-mission" className='about-card'>   
          <img src={missionImg} alt="Mission" width={120}/>
          <p>Unsere Mission</p>  
        </Link>
        <Link to="/unsere-werte" className='about-card'>
          <img src={valuesImg} alt="Values" width={120}/>
          <p>Unsere Werte</p>  
        </Link>
        <Link to="/Kundenbewertungen" className='about-card'> 
          <img src={testimonialsImg} alt="Testimonials" width={120}/>
          <p>Kundenbewertungen</p>  
        </Link>
      </div>
    </section>
  );
}

export default About;