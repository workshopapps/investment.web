/* eslint-disable prettier/prettier */

import React, { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import UserAvatar from '../Nav/UserAvatar';
import authHooks from '../../auth/AuthHooks';

export default function ProfileSection() {
    const { user } = useContext(AuthContext);
    const apiService = authHooks.useApiService();

    const updateEmail = (evt) => {};

    return (
        <div className="flex  mt-3 md:px-[200px] flex-start">
            <div className="flex flex-col md:flex-col w-full h-full mx-2 md:pl-10 md:pr-[100px] pt-[56px] pb-[70px]">
                <div
                    className="flex flex-col md:flex-row"
                    style={{
                        alignItems: 'start'
                    }}>
                    <div className="flex w-2/5 ml-[180px] md:m-0">
                        <UserAvatar width="100px" height="100px" fontSize="30px" />
                    </div>

                    <div className="flex flex-col md:ml-[60px] w-full h-full ">
                        <form>
                            <div className="flex flex-col w- h-full mb-8">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-normal text-[#1F2226]"
                                    style={{
                                        color: 'gray'
                                    }}>
                                    Preferred Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    disabled
                                    placeholder="Enter your name"
                                    value={user.name}
                                    className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                                    style={{
                                        color: 'gray'
                                    }}
                                />
                            </div>
                            <div className="flex flex-col w-full h-full mb-8">
                                <label
                                    htmlFor="location"
                                    className="text-sm font-normal text-[#1F2226]">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    defaultValue={user.email}
                                    placeholder="you@example.com"
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
