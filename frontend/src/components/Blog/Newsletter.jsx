import React from 'react';
import arrow from '../../assets/blog/arrow-right-black.svg';
import newsletter from '../../assets/blog/newsletter.png';
const Newsletter = () => {
    return (
        <div className=" bg-[#F5F5F5] flex justify-between py-10 lg:px-32 px-8 gap-16 flex-wrap mb-8 ">
            <div className="w-full  md:block hidden flex-1">
                <img src={newsletter} alt="newsletter image" />
            </div>
            <div className="flex flex-col lg:items-end items-center text-center gap-4 lg:gap-6 flex-1 w-80">
                <div className="font-semibold lg:text-4xl text-xl">Get Our Newsletter</div>
                <div className="text-sm lg:text-base">
                    Subscribe to our newsletter to stay updated on latest news & offers!
                </div>
                <input
                    type="text"
                    placeholder="Enter your email address"
                    className="bg-[#F5F5F5] rounded border-solid border p-3 lg:p-4 text-center w-full border-[#66717E]"
                />
                <button className="bg-[#1BD47B] rounded-lg flex justify-center font-semibold p-4 text-center w-full gap-2">
                    subscribe <img src={arrow} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
