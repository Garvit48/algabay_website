import React from 'react'
import Chart1 from "../assets/images/chart1.jpg"
import Chart2 from "../assets/images/chart2.jpg"
import InfoSection from './InfoSection'

const data = [
    {
        heading: "Live Market",
        headingGradient: "Information",
        text: "Stay ahead of the financial curve with our live market insights, driven by sophisticated sentiment analysis. Our cutting-edge technology provides real-time updates on market dynamics, empowering you to make swift and informed investment decisions.",
        image: Chart1,
        reversed: false
    },
    {
        heading: "LLM Based",
        headingGradient: "Predictions",
        text: "Unlock the power of deep learning technologies for precise predictions and comprehensive portfolio analysis. Our AI, built on deep learning, provides accurate forecasts and a comprehensive view of your portfolio, ensuring you optimize your investments effectively.",
        image: Chart2,
        reversed: true
    }
]

const InfoSectionComponent = () => {
  return (
    <div>
        {data.map(entry => <InfoSection content={entry} />)}
    </div>
  )
}

export default InfoSectionComponent