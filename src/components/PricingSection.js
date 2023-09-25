import React from 'react'
import "../stylesheets/PricingSection.css"

const PricingSection = () => {
  return (
    <div className='pricingSectionContainer'>
        <div className='pricingContainer'>
            <div className='pricingGrid'>
                <div className='pricingTier'>
                    <p className='pricingTierName'>Base</p>
                    <p className='pricingTierDesc'>Just the basics</p>
                    <button className='pricingTierButton'>Coming Soon....</button>
                    <ul className='pricingTierFeatureList'>
                        <li>To be revealed soon</li>

                    </ul>
                </div>
                <div className='pricingTier'>
                    <p className='pricingTierName'>Pro</p>
                    <p className='pricingTierDesc'>Everything you need for professional investing</p>
                    <button className='pricingTierButton'>Coming Soon....</button>
                    <ul className='pricingTierFeatureList'>
                        <li>To be revealed soon</li>

                    </ul>
                </div>
                <div className='pricingTier'>
                    <p className='pricingTierName'>Max</p>
                    <p className='pricingTierDesc'>The full suite for investing</p>
                    <button className='pricingTierButton'>Coming Soon....</button>
                    <ul className='pricingTierFeatureList'>
                        <li>To be revealed soon</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingSection