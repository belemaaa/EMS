import React from 'react'

const Login = () => {
  return (
    <div>
        <p>EMS</p>
        <div>
            <p>Welcome</p>
            <form method='POST'>
                <input typeof='text' placeholder='Username'/>
                <input typeof='password' placeholder='Password'/>

                <button typeof='submit'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login