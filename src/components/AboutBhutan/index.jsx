import React from 'react'
import Description from './Description'
import KeyFact from './KeyFact'
import Special from './Special'
import Culture from './culture'

const AboutBhutan = () => {
  return (
    <div className='about-container'>
      <h1 className='title'>🇧🇹 About Bhutan</h1>
      <Description />
      <KeyFact />
      <Special />
      <Culture />
    </div>
  )
}

export default AboutBhutan
