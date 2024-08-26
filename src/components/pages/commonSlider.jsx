import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Pagination } from 'swiper/modules';


function CommonSlider({ slidesData = [], slidesPerView = [5], slideCardBg = 'transparent', buttonText = '' }) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      // slidesPerView={5}
      modules={[Pagination]}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
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
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className={`cursor-grab p-5`} style={{ background: `${slideCardBg}` }}>
          <img src={slide.imgUrl} className='brand-img' alt="slide img" />
          <div className='heading text-xl text-gray-500 mt-5'>{slide.name}</div>
          {buttonText !== '' ?
            <button
              className='py-1 px-3 m-auto mt-4 w-fit inline-block border border-red-600 text-white heading bg-red-600 hover:bg-red-700 hover:text-white rounded'
            >{buttonText}</button> : ''}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CommonSlider;