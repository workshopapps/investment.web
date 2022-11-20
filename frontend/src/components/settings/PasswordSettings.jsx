/* eslint-disable prettier/prettier */
import React from 'react';

export default function PasswordSettings() {
    return (
        <div className="flex">
            <div className="flex flex-col w-full h-full pl-1 md:pl-10 pr-3 md:pr-[100px]  pt-[56px] pb-[100px]">
                <div className="flex flex-col w-full h-full mb-6 font-semibold text-base text-black">
                    <h1 className="text-4xl">Reset Password</h1>
                </div>
                <div className="flex flex-col w-full h-full">
                    <form>
                        <div className="flex flex-col w-full h-full mb-8">
                            <label
                                htmlFor="currentpassword"
                                className="text-base font-semibold text-[#000000]"
                            >
                                Current Password
                            </label>
                            <input
                                type="password"
                                name="currentpassword"
                                id="currentpassword"
                                placeholder="Enter your current password"
                                className="w-full h-10 px-4 mt-2 text-base text-black border border-[#0074FF] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                            />
                        </div>
                        <div className="flex flex-col w-full h-full mb-8">
                            <label
                                htmlFor="newpassword"
                                className="text-base font-semibold text-[#000000]"
                            >
                                New Password
                            </label>
                            <input
                                type="password"
                                name="newpassword"
                                id="newpassword"
                                placeholder="Enter your new password"
                                className="w-full h-10 px-4 mt-2 text-base text-black border border-[#0074FF] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                            />
                        </div>
                    </form>
                    <div className="flex flex-col ml-auto mt-[70px]">
                        <button className="bg-[#19C170] text-black  font-semibold text-base py-4 px-[54px] rounded-md">
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
