import React from 'react'
import Microsoft from "../assets/images/microsoft.png"
import Meity from "../assets/images/meity.png"
import Startup from "../assets/images/google.png"
import "../stylesheets/Achievements.css"
const Achievements = () => {
  return (
    <div className='achievementsSectionContainer'>
      <p className='achievementsText'>Awarded <span className='gradientText animatedUnderline'>Recognition</span></p>
        <div className='achievementsContainer'>
          <img src={ Microsoft } id="microsoftImg" alt='Microsoft for Startups' />
          <img src={ Meity } id="meityImg" alt='Meity' />
          <img src={ Startup } id="startupImg" alt='Global Student Entrepreneur Awards' />
        </div>
    </div>
  )
}

export default Achievements