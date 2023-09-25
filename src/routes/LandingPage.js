import { React, useEffect } from 'react'
import Navbar from '../components/Navbar'
import LandingPageBanner from '../components/LandingPageBanner'
import StockView from '../components/StockView'
import InfoSectionComponent from '../components/InfoSectionComponent'
import PricingSection from '../components/PricingSection'
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const stockViewObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.querySelector(".gradientText").classList.toggle("animatedUnderline", entry.isIntersecting)

    if (entry.isIntersecting) stockViewObserver.unobserve(entry.target)
  })
}, { threshold: 0.4 })

const infoSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.querySelector(".infoSectionImage").classList.toggle("fadeUpAnimation", entry.isIntersecting)
    entry.target.querySelector(".infoSectionHeading").classList.toggle("fadeLeftAnimation", entry.isIntersecting)
    entry.target.querySelector(".infoSectionText").classList.toggle("fadeLeftAnimation", entry.isIntersecting)
    if ( entry.isIntersecting ) infoSectionObserver.unobserve(entry.target)
  })
}, { threshold: 0.4 })

const LandingPage = () => {

  useEffect(() => {

    document.title = "Algabay: Invest with AI"
    let stockView = document.querySelector(".stockViewContainer")
    let infoContainer = document.querySelectorAll(".infoSectionContainer")
    stockViewObserver.observe(stockView)
    infoContainer.forEach(elem => infoSectionObserver.observe(elem))
  }, [])
  return (
    <div>
        <Navbar />
        <LandingPageBanner />
        <InfoSectionComponent />
        <StockView />
        <PricingSection />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default LandingPage