import React, { useState } from 'react'
import HeroContentSide from './heroContentSide'
import HeroSlider from './heroSlider'
import Testimonials from './Testimonials'


function HeroSection() {
    return (
        <div className='HeroSection bg-gray-100'>
            <div className='container sliderPagiBullets flexingSection flex flex-wrap justify-between items-center'>
                <HeroContentSide />
                <HeroSlider />
            </div>
        </div>
    )
}

export default HeroSection