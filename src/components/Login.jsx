import React from 'react'
import {SiGoogletagmanager} from 'react-icons/si'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiSolidLockAlt} from 'react-icons/bi'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <div className='items-center justify-center text-center'>
          <SiGoogletagmanager size={40} className='text-center justify-between'/>
        </div>
        <div className='shadow-lg rounded-lg my-6 text-center w-[600px] border'>
          <p className='my-6 text-xl font-semibold text-gray-600'>Welcome</p>
          <form method='POST'>
            <div className='flex flex-row mx-6 border'>
              <input typeof='text' placeholder='Username' className='w-[500px] bg-blue-50 rounded-[0.150rem] text-black p-3 placeholder:text-gray-400'/> <br/>
              <div className='bg-gray-300 w-14'>
                <BsFillPersonFill className='text-[#353638] mx-3 my-3' size={30}/>
              </div>
            </div>

            <div className='flex flex-row mx-6 border'>
              <input typeof='text' placeholder='Password' className='w-[500px] bg-blue-50 rounded-[0.150rem] text-black p-3 placeholder:text-gray-400'/> <br/>
              <div className='bg-gray-300 w-14'>
                <BiSolidLockAlt className='text-[#353638] mx-3 my-3' size={30}/>
              </div>
            </div>

            <div className='w-16 bg-blue-500 rounded-[1.150rem] hover:bg-blue-600'>
              <button typeof='submit' className='text-center text-white'>Log in</button>
            </div>
            
          </form>
        </div>
      </div>
        
    </div>
  )
}

export default Login