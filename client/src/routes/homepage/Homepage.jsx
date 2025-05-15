import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation';

function Homepage() {
  const [typingStatus,setTypingStatus]=useState("Human1")
  return (
    <div className='homepage'>
    <img src='/orbital.png'  className='orbital'/>
    <div className='left'>
    <h1>lama AI</h1>
    <h2>Supercharge your creativity and productivity</h2>
    <h3>Experience the power of AI-driven conversations. Whether you need help with coding, writing, brainstorming ideas, or just casual chatting, AI Chat is here for you!</h3>
    <Link to='/dashboard'>Get Started</Link>
    </div>
    <div className='right'>
      <div className='imgContainer'>
      <div className='bgContainer'>
        <div className='bg'></div>
      </div>
      <img src='/bot.png' className='bot'/>
      <div className='chat'>
      <img src={typingStatus==="Human1"?"/human1.jpeg":typingStatus==="Human2"?"/human2.jpeg":"bot.png"}/>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Human:We produce food for Mice',
        2000, ()=>{setTypingStatus("Bot")},// wait 1s before replacing "Mice" with "Hamsters"
        ' Bot:We produce food for Hamsters',
        2000, ()=>{setTypingStatus("Human2")},
        ' Human2:We produce food for Guinea Pigs',
        2000, ()=>{setTypingStatus("Bot")},
        ' Bot:We produce food for Chinchillas',
        2000, ()=>{setTypingStatus("Human1")},
      ]}
      wrapper="span"
      cursor={true}
      omitDeletionAnimation={true}
      repeat={Infinity}
    />
      </div>


      </div>
    </div>
    <div className='terms'>
      <img src='/logo.png'/>
      <div className='links'>
        <Link to='/'>Terms and services</Link>
        <Link to='/'>Privacy Policy</Link>
      </div>
    </div>
    </div>
  )
}

export default Homepage