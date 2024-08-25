import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import User from '../../assets/images/common/boy.png'



function Testimonials() {
    const TestimonialsData = [
        {
            name: 'Md Nasir',
            imgUrl: User,
            message: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional'
        },
        {
            name: 'Rohit Bhati',
            imgUrl: User,
            message: 'Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend'
        },
        {
            name: 'Rohit Bhati',
            imgUrl: User,
            message: 'Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience'
        },
        {
            name: 'Pardeep Kumar',
            imgUrl: User,
            message: 'Best shoppe in Indirapuram. Good customer service. After sale service amazing. Overall nice experience'
        },
    ]
    return (
        <div className='Testimonials bg-gray-50 pt-10 lg:pb-14 pb-8 relative lg:mt-0 mt-5'>
            <div className='container relative'>
                <div className='lg:block hidden reviewGoogle absolute left-5 heading text-2xl text-red-500'>22222 <br /> Google Review</div>
                <div className='lg:hidden block heading text-2xl text-red-500 text-center mb-5'>22222 <br/> Google Review</div>
            </div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                modules={[Pagination]}
                loop={true}
                className="mySwiper container lg:w-1/2 w-full text-center"
            >
                {TestimonialsData.map((slide, index) => (
                    <SwiperSlide key={index} className='cursor-grab'>
                        <img src={slide.imgUrl} loading='lazy' className=' rounded-[100px] m-auto block bg-red-200 p-5' alt="slide img" />
                        <span className='heading name text-3xl mt-5 block'>{slide.name}</span>
                        <p className='py-5 text-xl heading'>{slide.message}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials