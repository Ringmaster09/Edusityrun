import React from 'react'
import './Hero.css'
import arroy from '../../assets/arroy.webp'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for better world</h1>
        <p>Edusity is a forward-thinking education company dedicated to delivering high-quality learning experiences. We offer diverse courses tailored to meet the needs of students and professionals alike. At Edusity, our goal is to empower individuals through accessible, engaging, and impactful education, helping them achieve personal and professional growth in a dynamic world.</p>
        <button className='btn'>Explore more <img src={arroy} alt="" style={{ width: '20px', height: '20px' }} /></button>
      </div>
        
    </div>
  )
}

export default Hero