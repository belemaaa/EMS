import React from 'react'
import {SiGoogletagmanager} from 'react-icons/si'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <div>
          <SiGoogletagmanager />
        </div>
        <div>
            <p>Welcome</p>
            <form method='POST'>
                <input typeof='text' placeholder='Username'/>
                <input typeof='password' placeholder='Password'/>

                <button typeof='submit'>Log in</button>
            </form>
        </div>
      </div>
        
    </div>
  )
}

export default Login