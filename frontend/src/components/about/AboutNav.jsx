/* eslint-disable prettier/prettier */
import React from 'react';

const AboutNav = () => {
    return (
        <div className="flex justify-between bg-white p-5 md:pl-[50px] md:pr-[50px] text-xs md:text-sm lg:pl-[100px] lg:pr-[100px]">
            <div className="space-x-2">
                <span className="font-bold text-[#605E5E]">
                    <a href="#home">Home</a>
                </span>{' '}
                /
                <span className="font-bold text-[#605E5E]">
                    <a href="#home">About Us</a>
                </span>
            </div>
            <div className=" space-x-2 md:space-x-9">
                <a
                    className="hover:border-b-2 font-bold text-[#605E5E] hover:border-[#1BD47B] pb-1"
                    href="#services"
                >
                    Our Services
                </a>
                <a
                    className="hover:border-b-2 font-bold text-[#605E5E] hover:border-[#1BD47B] pb-1"
                    href="#team"
                >
                    Our Team
                </a>
            </div>
        </div>
    );
};

export default AboutNav;
