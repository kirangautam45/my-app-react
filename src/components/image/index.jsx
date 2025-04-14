import React from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '../button'

const Image = () => {
  return (
    <div>
      <a href='https://vite.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
      <h1>This is from image</h1>
      <Button />
    </div>
  )
}

export default Image
