import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex bg-[url("/src/assets/about/hero.png")] bg-no-repeat bg-cover  items-center pl-5 md:pl-[50px] lg:pl-[100px] h-[160px] md:h-[360px]'>
            <div className="flex flex-col text-white gap-[6px]">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">About Us</h1>
                <p className="text-xs md:text-2xl font-[500]">The Spark that ignites your dreams</p>
            </div>
        </div>
    );
};

export default HeroSection;
