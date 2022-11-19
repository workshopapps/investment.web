/* eslint-disable prettier/prettier */
import React from 'react'

const Hero = () => {
  return (
    <div className='h-96 flex justify-center items-center px-4 bg-black text-white'>
        <div className="hero-wrapper w-full max-w-screen-xl">
            <h1 className='text-xl md:text-5xl mb-24px md:mb-12 w-full max-w-3xl'>
                We Track, Analyse & Recommend the best stocks for you.
            </h1>
            <p className='max-w-3xl w-full text-base md:text-xl '>
                We provide well curated information to make smarted investment decisions based on top companies metrics through simple and accessible expert investment guidance. 
            </p>
        </div>
    </div>
  )
}

export default Hero