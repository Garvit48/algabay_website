import { React, useEffect } from 'react'
import "../stylesheets/InfoSection.css"

const InfoSection = ( props ) => {

  useEffect(() => {
    if (props.content.reversed) document.querySelector(".infoSectionContainer").style.flexDirection = "row-reverse"
  }, [])
  return (
    <div className='infoSectionContainer'>
        <img className='infoSectionImage' src={props.content.image} />
        <div className='infoSectionTextContainer'>
          <p className='infoSectionHeading'>{props.content.heading} <span className='gradientText'>{props.content.headingGradient}</span></p>
          <p className='infoSectionText'>{props.content.text}</p>
        </div>
    </div>
  )
}

export default InfoSection