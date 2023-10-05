import React, {useState} from 'react'
import Navbar from './NavBar'
import {BsPerson} from 'react-icons/bs'
import {IoMdAddCircle} from 'react-icons/io'

const Main = () => {
    const [personIcon, setPersonIcon] = useState(false)
    const togglePIcon = () => {
        setPersonIcon(!personIcon)
    }
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className='w-[22%]'>
            <Navbar/>
        </div>

        <div className='w-[100%]'>
            <div className='hidden md:hidden lg:flex justify-end items-center'>
                <div onClick={Navbar.togglePIcon} className='text-xl mr-10 my-6 text-gray-600'>
                    {personIcon ? <BsPerson/> : <BsPerson/>}
                </div>

                {personIcon && (
                    <div>
                        <p>Account</p>
                    </div>
                )}

            </div>

            <div className='bg-gray-100 h-fit'>
                <div className='flex flex-row py-5 mx-8 justify-between border-t-[#4f5962] border-b-[#4f5962]'>
                    <p className='border-r text-lg md:text-2xl border-r-[#97999b] pr-1 md:pr-6'>Employees</p>
                    <p className='text-gray-500 text-sm md:text-base'>previews</p>

                    <div className='flex flex-row bg-[#2c8442] py-1 md:py-2 px-1 md:px-3 rounded-lg text-white'>
                        <IoMdAddCircle className='md:mr-2 text-lg md:text-2xl mt-0.5 md:mt-0'/>
                        <p className='text-sm md:text-base'>Add employee</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Main