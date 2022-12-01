/* eslint-disable prettier/prettier */
import React from 'react';
import img1 from './../../assets/images/intro.png';
import img2 from './../../assets/images/intro1.png';
import img3 from './../../assets/images/intro2.png';
import { BsArrowRightShort } from 'react-icons/bs';

const HeroSection = () => {
    return (
        <>
            <div
                data-testid="hero-section"
                className='flex bg-[url("/src/assets/images/hero.png")] relative bg-no-repeat bg-cover  items-center pl-5 md:pl-[50px] lg:pl-[100px] h-[160px] md:h-[360px]'>
                <div className="flex flex-col text-white gap-[6px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">How It Works</h1>
                    <p className="text-xs md:text-2xl font-[500] text-center">Investing in 3 Easy Steps!</p>
                </div>
            </div>
            <div
                data-testid="goals"
                className='bg-[#fafaff] flex flex-col md:flex-row gap-8 pt-9 justify-center bg-[url("/src/assets/about/bg-vec.png")] bg-no-repeat bg-right-bottom pb-24'>
                <div className=" p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 relative rounded-lg">
                    <p className=" text-6xl font-bold text-[#455A64] text-center top-3 z-0">1</p>
                    <img src={img1} alt="" className="w-full z-20 rounded-[6px] mb-10" />
                    <h3 className="font-bold  mb-2 text-center  text-[#455A64] text-xl">
                        Sign up for your free account
                    </h3>
                    <p className="text-[#66717E] text-center ">
                        Sign up for your free account Open a premium account for full functionality.
                        Learn more
                    </p>
                </div>
                <div className=" p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 relative rounded-lg">
                    <p className=" text-6xl font-bold text-[#455A64] text-center top-3 z-0">2</p>
                    <img src={img2} alt="" className="w-full rounded-[6px] mb-10" />
                    <h3 className="font-bold text-xl mb-2 text-center ">Set up your account</h3>
                    <p className="text-[#66717E] text-center ">
                        Create your profile and answer our short quiz on your risk appetite.
                    </p>
                </div>
                <div className=" p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 relative rounded-lg">
                    <p className=" text-6xl font-bold text-[#455A64] text-center top-3 z-0">3</p>
                    <img src={img3} alt="" className="w-full rounded-[6px] mb-10" />
                    <h3 className="font-bold text-xl mb-2 text-center ">
                        Get your custom-made recommendations
                    </h3>
                    <p className="text-[#66717E] text-center ">
                        From the short quiz, we understand your interests and curate stock options
                        that are tailored to you.
                    </p>
                </div>
            </div>
            <button className='flex m-auto p-4 mb-6 bg-[#1BD47B] rounded-md items-center text-xl'>Get Started <BsArrowRightShort /> </button>
        </>
    );
};

export default HeroSection;
