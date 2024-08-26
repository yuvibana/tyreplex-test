import React, { useState } from 'react'
import Logo from '../../assets/images/common/logo.png'
import { Link } from 'react-router-dom'
import { FaUserClock } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

function AppHeader() {
  const [active, setActive] = useState('')

  return (
    <header className='appHeader py-2 relative  border-b border-gray-200'>
      <nav className='headerFlex container flex justify-between items-center'>
        <Link to='/' className='logo'>
          <img src={Logo} />
        </Link>
        <ul className={`navMenu lg:flex block gap-5 ${active}`}>
          <div className='mbHeader lg:hidden flex p-2 justify-between border-b border-gray-200'>
            <Link to='/' className='logo'>
              <img src={Logo} />
            </Link>
            <span
              className='closeIcons'
              onClick={() => setActive('')}
            ><IoCloseSharp className='text-5xl' /></span>
          </div>
          <li className='items_inner drpHeader lg:p-0 p-2 relative border-b lg:border-transparent border-gray-200'>
            <Link className='links robotoMedium text-[16px] linksHead' to='#'>Car Tyres</Link>
            <ul className='MenuItems drp_MenuItems absolute border border-gray-200 bg-white min-w-[200px]'>
              <li className='items_inner'>
                <p className='title robotoMedium p-2 border-b border-gray-200 text-gray-500 bg-gray-50 text-[15px]'>Popular Car Tyre Brands</p>
              </li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>MRF Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>CEAT Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Goodyear Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Bridgestone Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>All car Tyres</Link></li>
            </ul>
          </li>
          <li className='items_inner drpHeader lg:p-0 p-2 relative border-b lg:border-transparent border-gray-200'>
            <Link className='links robotoMedium text-[16px] linksHead' to='#'>Bike Tyres</Link>
            <ul className='MenuItems drp_MenuItems absolute border border-gray-200 bg-white min-w-[200px]'>
              <li className='items_inner'>
                <p className='title robotoMedium p-2 border-b border-gray-200 text-gray-500 bg-gray-50 text-[15px]'>Popular Car Tyre Brands</p>
              </li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>MRF Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>CEAT Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Goodyear Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Bridgestone Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>All car Tyres</Link></li>
            </ul>
          </li>
          <li className='items_inner drpHeader lg:p-0 p-2 relative border-b lg:border-transparent border-gray-200'>
            <Link className='links robotoMedium text-[16px] linksHead' to='#'>Tyre Pressure</Link>
            <ul className='MenuItems drp_MenuItems absolute border border-gray-200 bg-white min-w-[200px]'>
              <li className='items_inner'>
                <p className='title robotoMedium p-2 border-b border-gray-200 text-gray-500 bg-gray-50 text-[15px]'>Popular Car Tyre Brands</p>
              </li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>MRF Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>CEAT Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Goodyear Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Bridgestone Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>All car Tyres</Link></li>
            </ul>
          </li>
          <li className='items_inner drpHeader lg:p-0 p-2 relative border-b lg:border-transparent border-gray-200'>
            <Link className='links robotoMedium text-[16px] linksHead' to='#'>Commercial Tyres</Link>
            <ul className='MenuItems drp_MenuItems absolute border border-gray-200 bg-white min-w-[200px]'>
              <li className='items_inner'>
                <p className='title robotoMedium p-2 border-b border-gray-200 text-gray-500 bg-gray-50 text-[15px]'>Popular Car Tyre Brands</p>
              </li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>MRF Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>CEAT Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Goodyear Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Bridgestone Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>All car Tyres</Link></li>
            </ul>
          </li>
          <li className='items_inner drpHeader lg:p-0 p-2 relative border-b lg:border-transparent border-gray-200'>
            <Link className='links robotoMedium text-[16px] linksHead' to='#'>Accessories</Link>
            <ul className='MenuItems drp_MenuItems absolute border border-gray-200 bg-white min-w-[200px]'>
              <li className='items_inner'>
                <p className='title robotoMedium p-2 border-b border-gray-200 text-gray-500 bg-gray-50 text-[15px]'>Popular Car Tyre Brands</p>
              </li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>MRF Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>CEAT Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Goodyear Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>Bridgestone Tyres</Link></li>
              <li className='items_inner p-2 border-b border-gray-200 hover:pl-3 transition-all hover:bg-gray-50'><Link className='links' to='#'>All car Tyres</Link></li>
            </ul>
          </li>
        </ul>
        <div className='headerRightSide flex items-center gap-8'>
          <p className='flex gap-3 cursor-pointer'> <FaUserClock className='text-3xl ' /> <span className='text-xl'>Login</span> </p>
          <div
            className='humIcon lg:hidden block'
            onClick={() => setActive('active')}
          > <RiMenu3Fill className='text-3xl' /> </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader