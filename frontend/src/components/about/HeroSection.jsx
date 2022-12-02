/* eslint-disable prettier/prettier */
import React from 'react';

const HeroSection = () => {
    return (
        
          <div
          data-testid="hero-section"
          className='flex bg-[url("/src/assets/images/hero.png")] relative bg-no-repeat bg-cover  items-center pl-5 md:pl-[50px] lg:pl-[100px] h-[160px] md:h-[360px]'>
          <div className="flex flex-col text-white gap-[6px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">About Us</h1>
              <p className="text-xs md:text-2xl font-[500] text-center">The Spark that ignites your dreams</p>
          </div>
      </div>

    );
};

export default HeroSection;
