import React, { useState } from 'react'
import HeroContentSide from './heroContentSide'
import HeroSlider from './heroSlider'
import Testimonials from './Testimonials'


function HeroSection() {
    return (
        <div className='HeroSection lg:pt-8 pt-4 bg-gray-100'>
            <div className='container'>
                <div className='flexingSection flex flex-wrap justify-between'>
                    <HeroContentSide />
                    <HeroSlider />
                </div>
            </div>
            <Testimonials />
        </div>
    )
}

export default HeroSection