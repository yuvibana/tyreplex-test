import React from 'react'
import FooterForm from './FooterForm'
import Logo from '../../assets/images/common/logo.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";



function AppFooter() {
  return (
    <>
      <footer className='AppFooter lg:py-8 py-5 text-black'>
        <div className='container'>
          <FooterForm />
          <div className='footerFlex lg:mt-5 mt-3 lg:pt-5 pt-3 border-t border-red-300'>
            <ul className='flex flex-wrap'>
              <li className='lg:w-[20%] w-[100%] lg:mb-0 mb-3 lg:pb-0 pb-3 lg:border-b-0 border-b lg:border-r border-r-0 border-red-300'>
                <Link to='/' className=' w-fit'>
                  <img src={Logo} />
                </Link>
                <div className='socIcons flex gap-3 mt-5'>
                  <Link to='/' className=' bg-red-200 hover:bg-red-100 p-3 rounded-lg'> <FaFacebook className='text-3xl text-red-600' />  </Link>
                  <Link to='/' className=' bg-red-200 hover:bg-red-100 p-3 rounded-lg'> <FaInstagram className='text-3xl text-red-600' /> </Link>
                  <Link to='/' className=' bg-red-200 hover:bg-red-100 p-3 rounded-lg'> <FaXTwitter className='text-3xl text-red-600' /> </Link>
                </div>
              </li>
              <li className='lg:w-[22%] w-[49%] lg:mb-0 mb-3 pl-5 lg:pb-0 pb-3 lg:border-b-0 border-b border-r border-red-300'>
                <span className='heading block text-2xl mb-3'>Quick Links</span>
                <Link to='/' className='block w-fit hover:underline'>Home</Link>
                <Link to='/' className='block w-fit hover:underline'>About Us</Link>
                <Link to='/' className='block w-fit hover:underline'>Contact Us</Link>
                <Link to='/' className='block w-fit hover:underline'>Career</Link>
              </li>
              <li className='lg:w-[22%] w-[49%] lg:mb-0 mb-3 pl-5 lg:pb-0 pb-3 lg:border-b-0 border-b lg:border-r border-r-0 border-red-300'>
                <span className='heading block text-2xl mb-3'>Usefull Links</span>
                <Link to='/' className='block w-fit hover:underline'>Terms of use</Link>
                <Link to='/' className='block w-fit hover:underline'>Privacy Policy</Link>
                <Link to='/' className='block w-fit hover:underline'>Shipping & Return Policy</Link>
                <Link to='/' className='block w-fit hover:underline'>Are you a Tyre Dealer?</Link>
              </li>
              <li className='lg:w-[36%] w-[100%] pl-5 lg:pb-0 pb-3 border-red-300'>
                <span className='heading block text-2xl mb-3'>Meet Us</span>
                <p className='border-b border-red-300 inline-block pb-1 mb-3'>C-67, 8th Floor, Gurgaon, Haryana 200022(H.R)</p>
                <span className='heading block text-2xl mb-1'>Contact Us</span>
                <Link to='/' className='block w-fit hover:underline'>Phone : +91-0123456789</Link>
                <Link to='/' className='block w-fit hover:underline'>Email : example@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <p className='text-center p-2 bg-red-200'>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
    </>
  )
}

export default AppFooter