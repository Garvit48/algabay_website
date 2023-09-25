import React from 'react'
import "../stylesheets/LandingPageBanner.css"
const LandingPageBanner = () => {

  return (
    <div className='landingPageBannerContainer'>
        <p className='landingPageBannerText'><span className='landingPageBannerTextWord one'>Invest</span> <span className='landingPageBannerTextWord two'>Smarter</span> <span className='landingPageBannerTextWord three underline gradientText'>with AI</span></p>
        <button className='landingPageBannerBtn'>Explore</button>
    </div>
  )
}

export default LandingPageBanner