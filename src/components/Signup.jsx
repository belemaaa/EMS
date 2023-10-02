import React from 'react'

const Signup = () => {
  return (
    <div>
        <p>EMS</p>
        <div>
            <p>Admin Signup</p>
            <form method='POST'>
                <input typeof='text' placeholder='first name'/>
                <input typeof='text' placeholder='last name'/>
                <input typeof='text' placeholder='Username'/>
                <input typeof='password' placeholder='Password'/>
                <input typeof='email' placeholder='email'/>
                <input typeof='text' placeholder='phone'/>

                <button typeof='submit'>Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Signup