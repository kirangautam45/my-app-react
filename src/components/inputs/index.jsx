import React from 'react'

const Abc = () => {
  return (
    <div>
      <h1>Welcome to Input</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type='text' placeholder='Enter your user Name' />
        <input type='email' placeholder='Enter your Email' />
        <input type='password' placeholder='Enter your Password' />
      </div>
    </div>
  )
}

export default Abc
