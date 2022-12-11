import React from 'react';
import { FiTrash, FiSearch } from 'react-icons/fi';

const WatchHead = () => {
    return (
        <div className="mb-[32px] py-[16px]">
            <div className="flex justify-start md:justify-between flex-col md:flex-row items-start md:items-center">
                <div className="watchlist-btns pb-4 md:pb-0 flex justify-center items-center">
                    <div className="text-[#1F2226] flex items-center font-semibold text-[18px] md:text-2xl rounded-[8px]">
                        My Watchlist
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <input type="search" placeholder="Search" className="border border-[#A3AAB2] rounded p-3 w-full" />
                    {/* <img src={Search} alt="search" /> */}
                    <FiSearch className="text-[#66717E] text-2xl absolute top-3 right-3" />
                </div>
            </div>
            <div className="flex justify-between mt-12 px-4">
                <button className="text-[#139757] font-semibold text-lg">Select All</button>
                <button disabled={true} className="flex text-lg items-center font-medium disabled:opacity-50"><FiTrash className="text-xl text-[#A1A4B6] mr-3" />Delete</button>
            </div>
            <div className="h-[2px] bg-[#66717E] mt-3"></div>
        </div>
    );
};

export default WatchHead;
