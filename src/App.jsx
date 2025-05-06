import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/hero'
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title'; 
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useState } from 'react';



const App = () => {
  const
[playState,setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>

        
  


        <Campus/>
        <Testimonials/>
        
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App 