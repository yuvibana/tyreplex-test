import * as React from "react";
import Localimages from '../localImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MdZoomOutMap } from "react-icons/md";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function HeroSlider() {
    const [open, setOpen] = React.useState(false);
    const SellarSlides = [
        { id: 1, imgUrl: Localimages.slideImg1 },
        { id: 2, imgUrl: Localimages.slideImg2 },
        { id: 3, imgUrl: Localimages.slideImg3 },
        { id: 4, imgUrl: Localimages.slideImg4 },
    ];
    return (
        <div className='HeroSliderDiv lg:w-[49%] relative w-[100%] lg:order-2 order-1'>
            <button className="absolute top-[50%] left-[50%] z-10 bg-red-600 p-2" style={{ transform: 'translate(-50%, -50%)' }} title="View Large Image" onClick={() => setOpen(true)}>
                <MdZoomOutMap className="text-3xl text-white" />
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}

                slides={[
                    { src: Localimages.slideImg1 },
                    { src: Localimages.slideImg2 },
                    { src: Localimages.slideImg3 },
                    { src: Localimages.slideImg4 },
                ]}
            />
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                modules={[Pagination]}

                className="mySwiper"
            >
                {SellarSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img className='cursor-grab' loading="lazy" src={slide.imgUrl} alt="slide img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSlider