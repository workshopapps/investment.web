/* eslint-disable prettier/prettier */

import React from 'react';
import profileimg from '../../assets/settings/profileimg.png';

export default function ProfileSection() {
    return (
        <div className="flex  mt-3 md:px-[200px] ">
            <div className="flex flex-col md:flex-col w-full h-full mx-2 md:pl-10 md:pr-[100px] pt-[56px] pb-[70px]">
              
                <div className='flex flex-col md:flex-row'>

                <div className="flex w-2/5 ml-[150px] md:m-0">
                    <img src={profileimg} alt="profileimg" className="w-[100px] h-[100px] md:w-[164px] md:h-[164px] mb-4" />
                   
                </div>
                
                <div className="flex flex-col md:ml-[60px] w-full h-full ">
                    <form>
                        <div className="flex flex-col w- h-full mb-8">
                            <label
                                htmlFor="name"
                                className="text-sm font-normal text-[#1F2226]"
                            >
                                Preferred Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                            />
                        </div>
                        <div className="flex flex-col w-full h-full mb-8">
                            <label
                                htmlFor="location"
                                className="text-sm font-normal text-[#1F2226]"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Johnbull@example.com"
                                className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                            />
                        </div>
                    </form>
                    <div className="flex flex-col ml-auto mt-2">
                        <button className=" text-[#19C170]  font-semibold text-base py-4 px-[54px] border-[1px] border-[#1BD47B] rounded-md">
                        Update Email
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
