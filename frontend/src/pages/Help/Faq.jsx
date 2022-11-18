import React, { useState } from 'react';
import dropdown from './dropdown.svg';

function faq({ question, answer }) {
    const [isFaqToggle, setIsFaqToggle] = useState(false);
    return (
        <div className="w-full text-xs lg:text-base text-[#0A0B0D]">
            <div
                onClick={() => setIsFaqToggle(!isFaqToggle)}
                className="py-3 lg:py-[18px] cursor-pointer flex border-b border-b-[#A3AAB2] justify-between items-center">
                <h3 className="font-semibold lg:text-base text-xs ">{question}</h3>
                <div className="pr-3">
                    <img
                        className={`transition-transform ${isFaqToggle ? '-rotate-90' : ''}`}
                        src={dropdown}
                        alt="dropdown button"
                    />
                </div>
            </div>

            <div
                className={`px-2 py-3 lg:py-4 w-full h-fit  bg-[#F4F5F6]  ${
                    isFaqToggle ? 'block' : 'hidden'
                }`}>
                <p className="w-full h-full text-[#000C1A]">{answer}</p>
            </div>
        </div>
    );
}

export default faq;
