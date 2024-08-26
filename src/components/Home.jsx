import React from 'react'
import HeroSection from './pages/heroSection'
import Testimonials from './pages/Testimonials';
import SellarDeals from './pages/SellarDeals';
import ServicesOfferd from './pages/ServicesOfferd';

import 'swiper/css';
import 'swiper/css/pagination';
import SoldTyres from './pages/SoldTyres';


function Home() {
    return (
        <div className='home'>
            <HeroSection />
            <Testimonials />
            <SellarDeals />
            <ServicesOfferd />
            <SoldTyres />
        </div>
    )
}

export default Home