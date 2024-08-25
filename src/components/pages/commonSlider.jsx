import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Pagination } from 'swiper/modules';


function CommonSlider({ slidesData, slidesPerView = 4, spaceBetween = 20 }) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      pagination={{
        clickable: true,
      }}
      slidesPerView={slidesPerView}
      modules={[Pagination]}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: slidesPerView,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.imgUrl} alt="slide img" />
        </SwiperSlide>
      ))}
      {/* <CommonSlider slidesData={SellarSlides} slidesPerView={sellerPerView} /> */}
    </Swiper>
  )
}

export default CommonSlider;