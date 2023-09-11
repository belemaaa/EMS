import React, {useState, useEffect} from 'react'
import {SiGoogletagmanager} from 'react-icons/si'
import {BsPersonCircle} from 'react-icons/bs'
import {RxDashboard} from 'react-icons/rx'
import {HiOutlineLogout} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(true)
    }
  return (
    <div className='h-[100%]'>
        <div className='hidden lg:flex h-screen bg-[#353638] flex-col w-[20%] text-gray-100'>
            <div className='flex flex-row py-5 border-b border-b-[#4f5962]'>
                <SiGoogletagmanager size={40} className='ml-7 mr-3'/>
                <p className='text-xl mt-1 mr-3'>EmployeeManager</p>
            </div>

            <div className='flex flex-row py-5 border-b border-b-[#4f5962]'>
                <BsPersonCircle size={40} className='ml-7 mr-3'/>
                <p className='text-lg mt-1 mr-3 hover:text-white'>Belema-Itams</p>
            </div>

            <div className='flex flex-row py-5 mt-32 hover:bg-slate-500 hover:rounded-lg duration-500 hover:py-3 hover:px-1'>
                <RxDashboard size={26} className='ml-7 mr-3'/>
                <p className='mt-1 mr-3'>Dashboard</p>
            </div>

            <div className='flex flex-row py-5 hover:bg-slate-500 hover:rounded-lg duration-500 hover:py-3 hover:px-1'>
                <HiOutlineLogout size={26} className='ml-7 mr-3'/>
                <p className='mt-1 mr-3'>Logout</p>
            </div>
        </div>

        <div className='md:hidden' onClick={toggleNav}>
            {nav ? null : <FaBars/>}
        </div>
    </div>
    
  )
}

export default Navbar