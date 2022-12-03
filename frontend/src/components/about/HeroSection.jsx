/* eslint-disable prettier/prettier */
import React from 'react';

const HeroSection = () => {
    return (
        <div
            data-testid="hero-section"
            className='flex font-HauoraBold bg-[url("/src/assets/about/hero-image.png")] bg-no-repeat bg-cover pl-4 md:pl-0 justify-center text-center items-center h-[200px] md:h-[360px] drop-shadow-2xl :shadow-gray-500'>
            <div className="flex flex-col mt-2 md:mt-10 text-white gap-[6px]">
                <h1 className="text-4xl lg:text-6xl font-bold">About Us</h1>
                <p className="text-lg md:text-3xl mt-5 font-Hauora">The Spark that ignites your dreams</p>
            </div>
        </div>
    );
};

export default HeroSection;
