import React from 'react';
import profileimg from '../../assets/settings/profileimg.png';

export default function ProfileSection() {
    return (
        <div className="w-full min-h-[60vh] ">
            <div className="w-full h-full mt-16">
                <h1 className="text-4xl pl-12">Profile</h1>
            </div>

            <div className="w-full min-h-60 flex ">
                <div className="w-[20%] min-h-full flex flex-col justify-center items-center">
                    <div>
                        <img
                            src={profileimg}
                            alt="profileimg"
                            className="w-[100px] h-[100px] mb-4"
                        />
                    </div>
                    <h2 className=" text-base font-semibold cursor-pointer">Edit image</h2>
                </div>
                <div className="w-[80%] min-h-full mt-10">
                    <form>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="pb-1">
                                Preferred Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Tolani Badmus"
                                className="w-[600px] h-[56px] rounded border-solid border-2 border-[#A3AAB2] pl-2"
                            />
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className="pb-1">
                                {' '}
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="JohnBull@example.com"
                                className="w-[600px] h-[56px] rounded border-solid border-2 border-[#A3AAB2] pl-2"
                            />
                        </div>

                        <div className="flex justify-end mr-[12.5em] mt-4">
                            <button className="p-[16px] text-[14px] leading-4 tracking-wide bg-[#1BD47B] rounded-[8px]">
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div></div>
        </div>
        // <div className="flex">
        //     <div className="flex bg-red-300 w-full h-full mx-2 md:pl-10 md:pr-[100px] pt-[56px] pb-[100px]">
        //         <div className="flex flex-col w-full h-full mb-6 font-semibold text-base text-black">
        //             <h1 className="text-4xl">Profile</h1>
        //         </div>
        //         <div className="flex flex-col mb-[60px]">
        //             <img src={profileimg} alt="profileimg" className="w-[100px] h-[100px] mb-4" />
        //             <h2 className=" text-base font-semibold cursor-pointer">Edit image</h2>
        //         </div>
        //         {/* <hr /> */}
        //         <div className="flex flex-col w-full h-full mt-8">
        //             <form>
        //                 <div className="flex flex-col w-full h-full mb-8">
        //                     <label
        //                         htmlFor="name"
        //                         className="text-base font-semibold text-[#0074FF]"
        //                     >
        //                         Preferred Name
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="name"
        //                         id="name"
        //                         placeholder="Enter your name"
        //                         className="w-full h-10 px-4 mt-2 text-base text-black border border-[#0074FF] rounded-lg focus:outline-none focus:border-[#E84E4E]"
        //                     />
        //                 </div>
        //                 <div className="flex flex-col w-full h-full mb-8">
        //                     <label
        //                         htmlFor="location"
        //                         className="text-base font-semibold text-[#0074FF]"
        //                     >
        //                         Location
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="location"
        //                         id="location"
        //                         placeholder="Enter your location"
        //                         className="w-full h-10 px-4 mt-2 text-base text-black border border-[#0074FF] rounded-lg focus:outline-none focus:border-[#E84E4E]"
        //                     />
        //                 </div>
        //             </form>
        //             <div className="flex flex-col md:ml-auto mt-[70px]">
        //                 <button className="bg-[#19C170] text-black  font-semibold text-base py-4 px-[54px] rounded-md">
        //                     Save Profile
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
