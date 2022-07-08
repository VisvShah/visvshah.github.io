import React from 'react'
import './about.scss'
import ImageOfVisv from '../../assets/ImageOfVisv.png'

export default function About() {
  return (
    <div className='about' id = 'about'>
        <div className="left">
            <div className="imageHolder">
                <img className = 'imageOfMe' src = {ImageOfVisv} alt = 'Me (Visv Shah)'></img>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi, I'm</h2>
                <h1>Visv Shah</h1>
                <p>An innovater who loves to create</p>
                
            </div>
        </div>
        
    </div>
  )
}
