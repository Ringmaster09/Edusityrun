import React from 'react'
import './Campus.css'
import campus1 from '../../assets/campus1.jpeg'
import campus2 from '../../assets/campus2.jpeg'
import campus3 from '../../assets/campus3.jpeg'
import campus4 from '../../assets/campus4.jpeg'
import arroy from '../../assets/arroy.webp'


const Campus = () => {
  return (
    <div className='campus'>
        <h1>Gallery</h1>
  <h2>Our Campus Photos</h2>
        <div className="gallery">
            <img src={campus1} alt=""/>
            <img src={campus2} alt=""/>
            <img src={campus3} alt=""/>
            <img src={campus4} alt=""/>
        </div>
        <button className='btn dark-btn'>See more here <img src={arroy} alt="" /></button>
    </div>
  )
}

export default Campus