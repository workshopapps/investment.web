import React from 'react';

const WatchHead = () => {
    return (
        <div className="bg-white mb-[32px] rounded-[8px] p-[16px] border-[2px]">
            <div>
                <h2 className="text-[21px] md:text-[32px] font-[600] font-Hauora mb-[10px] md:mb-[20px]">
                    Watchlists
                </h2>
                <div className="watchlist-btns flex justify-start items-center mb-[20px] md:mb-[32px]">
                    <div className="bg-primary102 text-white p-[8px] font-[400] text-[18px] md:text-[20px] rounded-[8px]">
                        My Watchlists
                    </div>
                </div>
                <h5 className="text-[18px] md:text-[20px] font-[600] text-[#1F2226] mb-[16px]">
                    My Watchlists
                </h5>
                <div className="text-[16px] text-[#3D444C] font-[400]">
                    <p className="mb-[8px]">52 items</p>
                    <p>Updated 29/11/2022 at 5:00AM</p>
                </div>
            </div>
        </div>
    );
};

export default WatchHead;
