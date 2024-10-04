import React from 'react'
import Servis from '../pages/Servis'
import "./servises.css"

function Servises({image, card, sena, title}) {
  return (
    <div>
        <div className='food'>
        <div className='foods-image'>
        <img src={image} alt="" />
        <h1>{title}</h1>
        </div>
       <div className='food-contact'>
          <h3>{card}</h3>
        </div>
        <div className='prices-fuud'>
          <p>{sena}</p>
        </div>
    </div>
    </div>
  )
}

export default Servises