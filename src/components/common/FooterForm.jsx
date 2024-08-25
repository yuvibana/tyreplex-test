import React from 'react'

function FooterForm() {
    return (
        <div className='formDiv flex flex-wrap justify-between'>
            <div className='leftSide lg:w-[49%] w-[100%] lg:mb-0 mb-4'>
                <h5 className='text-4xl mb-4'>Have a question about Tyres?</h5>
                <p className='text-xl descText'>If you have any questions or need further information, please don't hesitate to get in touch with us. We're here to help and provide you with the answers you need.</p>
            </div>
            <div className='formSide flex flex-wrap justify-between lg:w-[49%] w-[100%]'>
                <div className='inputBox mb-2 lg:w-[49%] w-[100%]'><input className='w-full text-black placeholder:text-black py-2 px-3 rounded bg-white border border-orange-300' type='text' placeholder='Your Name*' /></div>
                <div className='inputBox mb-2 lg:w-[49%] w-[100%]'><input className='w-full text-black placeholder:text-black py-2 px-3 rounded bg-white border border-orange-300' type='Email' placeholder='Your Email*' /></div>
                <div className='inputBox mb-2 lg:w-[49%] w-[100%]'><input className='w-full text-black placeholder:text-black py-2 px-3 rounded bg-white border border-orange-300' type='text' placeholder='Your Phone*' /></div>
                <div className='inputBox mb-2 lg:w-[49%] w-[100%]'><input className='w-full text-black placeholder:text-black py-2 px-3 rounded bg-white border border-orange-300' type='text' placeholder='Your Message*' /></div>
                <button className='py-2 w-[49%] px-5 inline-block border border-red-600 text-white heading bg-red-600 hover:bg-red-700 hover:text-white rounded text-xl'>Submit Now</button>
            </div>
        </div>
    )
}

export default FooterForm