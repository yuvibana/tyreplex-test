import { lazy } from 'react';
const HeroSection = lazy(() => import('./pages/heroSection'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const SellarDeals = lazy(() => import('./pages/SellarDeals'))
const ServicesOfferd = lazy(() => import('./pages/ServicesOfferd'))
const SoldTyres = lazy(() => import('./pages/SoldTyres'))

import 'swiper/css';
import 'swiper/css/pagination';


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