import React, {useState} from 'react'
import Navbar from './NavBar'
import {BsPerson} from 'react-icons/bs'

const Main = () => {
    const [personIcon, setPersonIcon] = useState(false)
    const togglePIcon = () => {
        setPersonIcon(!personIcon)
    }
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className='w-[100%]'>
            <Navbar/>
        </div>

        <div className='hidden lg:flex'>
            <div onClick={Navbar.togglePIcon} className='text-xl mr-10 mt-6 text-gray-600'>
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

export default Main