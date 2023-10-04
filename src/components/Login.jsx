import React from 'react'
import {SiGoogletagmanager} from 'react-icons/si'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiSolidLockAlt} from 'react-icons/bi'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <div className='items-center justify-center'>
          <SiGoogletagmanager size={40} className='text-center justify-center items-center'/>
        </div>
        <div className='shadow-lg rounded-lg my-6 py-5 text-center w-fit'>
            <p>Welcome</p>
            <form method='POST'>
              <div className='flex flex-row'>
                <input typeof='text' placeholder='Username' className='w-16 bg-blue-200 rounded-[0.150rem] text-black p-3 placeholder:text-gray-400'/> <br/>
                <div className='bg-gray-400'>
                  <BsFillPersonFill className='text-[#353638]'/>
                </div>
                
              </div>
              <div className='flex flex-row'>
                <input typeof='password' placeholder='Password' className='w-16 bg-blue-200 rounded-[0.150rem] text-black p-3 placeholder:text-gray-400'/> <br/>
                <BiSolidLockAlt className='text-[#353638]'/>
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