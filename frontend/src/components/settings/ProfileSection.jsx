/* eslint-disable prettier/prettier */

import React from 'react';
import profileimg from '../../assets/settings/profileimg.png';

export default function ProfileSection() {
    return (
        <div className="flex">
            <div className="flex flex-col w-full h-full pl-10 pr-[100px] pt-[56px] pb-[100px]">
                <div className="flex flex-col w-full h-full mb-6 font-semibold text-base text-black">
                    <h1 className="text-4xl">Profile</h1>
                </div>
                <div className="flex  flex-col mb-[60px]">
                    <img src={profileimg} alt="profileimg" className="w-[100px] h-[100px] mb-4" />
                    <h2 className=" text-base font-semibold cursor-pointer">Edit image</h2>
                </div>
                <hr />
                <div className="flex flex-col w-full h-full mt-8">
                    <form>
                        <div className="flex flex-col w-full h-full mb-8">
                            <label
                                htmlFor="name"
                                className="text-base font-semibold text-[#0074FF]"
                            >
                                Preferred Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full h-10 px-4 mt-2 text-base text-black border border-[#0074FF] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                            />
                        </div>
                        <div className="flex flex-col w-full h-full mb-8">
                            <label
                                htmlFor="location"
                                className="text-base font-semibold text-[#0074FF]"
                            >
                                 Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Enter your location"
                                className="w-full h-10 px-4 mt-2 text-base text-black border border-[#0074FF] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                            />
                        </div>
                    </form>
                    <div className="flex flex-col ml-auto mt-[70px]">
                        <button className="bg-[#19C170] text-black  font-semibold text-base py-4 px-[54px] rounded-md">
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
