import React from 'react'
import './Programs.css'
import poooo from '../../assets/poooo.webp'
import poo from '../../assets/poo.png'
import pooo from '../../assets/pooo.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={poooo} alt=""/>
            <div className="caption">
             
             <p>Graduation degree </p>

            </div>
        </div>
        <div className='program'>
            <img src={poo} alt=""/>
            <div className="caption">
             
             <p>Masters degree </p>

            </div>
        </div>
        <div className='program'>
            <img src={pooo} alt=""/>
            <div className="caption">
             
             <p> Post Graduation </p>

            </div>
        </div>

    </div>
  )
}

export default Programs