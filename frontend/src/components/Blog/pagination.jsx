import React from 'react';
import arrow from '../../assets/blog/right.svg';
const pagination = () => {
    return (
        <div className="flex items-center justify-center mb-10 lg:mb-16 gap-4">
            <div className="bg-[#1BD47B] py-0.5 rounded-md px-1">1</div>
            <div className="flex items-center">
                <span>Next</span> <img src={arrow} alt="" className="mt-1" />
            </div>
        </div>
    );
};

export default pagination;
