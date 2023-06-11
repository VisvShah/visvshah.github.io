import React, {useEffect} from 'react'
import './about.scss'
import ImageOfVisv from '../../assets/ImageOfVisv.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                <h2>Hey! I'm</h2>
                <h1>Visv Shah</h1>
            </div>
        </div>
        
    </div>
  )
}
