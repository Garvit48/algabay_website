import React from 'react'
import logo from "../assets/images/logo.png"
import "../stylesheets/Navbar.css"
const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <img src={logo} alt="Algabay Logo" className='navbarLogo'/>
        <ul className='navbarList'>
            <li><a className='underline'>Home</a></li>
            <li><a className='underline'>About Us</a></li>
            <li><button className='navbarButton'>Login / Signup</button></li>
        </ul>
    </div>
  )
}

export default Navbar