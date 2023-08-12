import React from 'react';
import './App.css';
import {FaChrome} from "react-icons/fa";
import { FaFirefox } from 'react-icons/fa'
import illustration from './images/illustration-hero.svg';

 function Intro() {
  return (
    <div className='intro-section'>
        <div className='intro-text-container'>
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className='intro-btn-container'>
                <button className='btn-chrome'>Get it on Chrome 
                <FaChrome className='chrome-icon'/>
                </button>
                <button className='btn-firefox'>Get it on Firefox
                 <FaFirefox className='firefox-icon'/>
                </button>
            </div>
        </div>
        <div className='intro-img-container'>
         <img src={illustration} alt='Bookmark Introduction image'/>
        </div>
    </div>
  )
}

export default Intro