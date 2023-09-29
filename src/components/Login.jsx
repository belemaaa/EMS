import React from 'react'

const Login = () => {
  return (
    <div>
        <p>EMS</p>
        <div>
            <p>Welcome</p>
            <form method='POST'>
                <input typeof='text' />
                <input typeof='password' />

                <button typeof='submit'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login