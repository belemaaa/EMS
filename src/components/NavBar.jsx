import React, {useState, useEffect} from 'react'
import {SiGoogletagmanager} from 'react-icons/si'
import {BsPersonCircle} from 'react-icons/bs'
import {RxDashboard} from 'react-icons/rx'
import {HiOutlineLogout} from 'react-icons/hi'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsPerson} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [personIcon, setPersonIcon] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
    }
    const togglePIcon = () => {
        setPersonIcon(!personIcon)
    }
  return (
    <div className='h-[100%]'>
        <div className='hidden lg:flex h-screen bg-[#353638] flex-col duration-500 text-gray-200'>
            <div className='flex flex-row py-5 border-b border-b-[#4f5962]'>
                <SiGoogletagmanager size={40} className='ml-7 mr-3'/>
                <p className='text-lg mt-2 mr-3 font-semibold'>EmployeeManager</p>
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

        <div className='flex flex-row lg:hidden bg-white text-center justify-between items-center pt-6'>
            <div onClick={toggleNav} className='text-lg ml-10 text-gray-600'>
                {nav ? <FaTimes /> : <FaBars />}
            </div>
            {nav && (
                <div
                    className={`${
                        nav ? 'translate-x-0' : '-translate-x-full'
                    } ${nav ? 'translate-y-12' : ''} fixed top-0 left-0 h-screen w-[65%] bg-[#353638] 
                    flex-col text-gray-200 shadow-inherit shadow-xl transition-transform duration-500 ease-in-out transform-gpu`}
                    >
                    <div className='flex flex-row py-5 border-b border-b-[#4f5962]'>
                        <SiGoogletagmanager size={40} className='ml-4 mr-3' />
                        <p className='text-lg mt-2 mr-3 font-semibold'>EmployeeManager</p>
                    </div>
                    <div className='flex flex-row py-5 border-b border-b-[#4f5962]'>
                        <BsPersonCircle size={35} className='ml-4 mr-3' />
                        <p className='text-lg mt-1 mr-3 hover:text-white'>Belema-Itams</p>
                    </div>
                    <div className='flex flex-row py-5 mt-24 hover:bg-slate-500 hover:rounded-lg duration-500 hover:py-3 hover:px-1'>
                        <RxDashboard size={26} className='ml-7 mr-3' />
                        <p className='mt-1 mr-3'>Dashboard</p>
                    </div>
                    <div className='flex flex-row py-5 hover:bg-slate-500 hover:rounded-lg duration-500 hover:py-3 hover:px-1'>
                        <HiOutlineLogout size={26} className='ml-7 mr-3' />
                        <p className='mt-1 mr-3'>Logout</p>
                    </div>
                </div>
            )}

            <div onClick={togglePIcon} className='text-xl mr-10 text-gray-600'>
                {personIcon ? <BsPerson/> : <BsPerson/>}
            </div>

            {personIcon && (
                <div>
                    <p>Account</p>
                </div>
            )}
        </div>
        
    </div>
    
  )
}

export default Navbar