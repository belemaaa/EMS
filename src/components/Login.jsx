import React from 'react'
import {SiGoogletagmanager} from 'react-icons/si'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiSolidLockAlt} from 'react-icons/bi'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='mb-6'>
        <SiGoogletagmanager size={60}/>
      </div>
      <div className='shadow-lg rounded-lg my-6 text-center w-[370px] md:w-[550px] border'>
        <p className='my-6 text-xl font-semibold text-gray-600'>Welcome</p>
        <form method='POST'>
          <div className='flex flex-row mx-6 border'>
            <input typeof='text' placeholder='Username' className='w-[500px] rounded-[0.150rem] text-black px-3 py-0 placeholder:text-gray-400'/> <br/>
            <div className='bg-gray-300 w-14'>
              <BsFillPersonFill className='text-[#353638] mx-4 my-3' size={25}/>
            </div>
          </div>

          <div className='flex flex-row mx-6 border mt-4'>
            <input typeof='text' placeholder='Password' className='w-[500px] rounded-[0.150rem] text-black p-3 placeholder:text-gray-400'/> <br/>
            <div className='bg-gray-300 w-14'>
              <BiSolidLockAlt className='text-[#353638] mx-4 my-3' size={25}/>
            </div>
          </div>

          <div className='md:w-[500px] bg-blue-500 hover:bg-blue-600 m-6 duration-500'>
            <button typeof='submit' className='text-center text-white py-2 text-lg'>Log in</button>
          </div>
          
        </form>
      </div>

        
    </div>
  )
}

export default Login