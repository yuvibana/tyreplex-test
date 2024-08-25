import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { Link } from 'react-router-dom';

function HeroContentSide() {
    return (
        <div className='contentSide lg:w-[49%] w-[100%] lg:mt-0 mt-5 lg:order-1 order-2'>
            <div className='heading'>
                <span className='flex gap-2 w-fit items-center font-bold border border-green-600 px-[2px] rounded mb-2 heading' style={{ color: 'var(--green)' }}><MdOutlineVerifiedUser className=' text-xl font-bold' /> Verified</span>
                <h2 className='heading text-3xl capitalize descText'>Shree Hemkunt tyres and services</h2>
            </div>
            <div className='review flex gap-2 items-center lg:mt-4 mt-3'>
                <span className=' bg-green-600 text-white inline-block px-2 rounded h-[22px]'>4.9</span>
                <div className='flex gap-2'>
                    <FaStar className="text-xl text-yellow-500" />
                    <FaStar className="text-xl text-yellow-500" />
                    <FaStar className="text-xl text-yellow-500" />
                    <FaStar className="text-xl text-yellow-500" />
                    <FaStar className="text-xl text-yellow-500" />
                </div>
                <p className='flex reviewCount border-b border-gray-200'>22222 Reviews</p>
            </div>
            <div className='heading lg:mt-4 mt-3 p-2 text-2xl'>Address & Opening Hours</div>
            <div className='border border-gray-300 p-2'>
                <div className='flex gap-2 items-center'>
                    <IoLocation className='min-w-[40px] text-2xl text-gray-600' /> <p className='descText'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
                </div>
                <div className='flex gap-2 items-center lg:mt-3 mt-3'>
                    <IoMdTimer className='min-w-[40px] text-2xl text-gray-600' /> <p className='text-gray-500'>Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
                </div>
            </div>
            <Link to={''} className='py-1 px-5 inline-block lg:mt-5 mt-3 border border-red-600 text-red-600 heading hover:bg-red-600 hover:text-white rounded text-xl'>Get Directions </Link>
        </div>
    )
}

export default HeroContentSide