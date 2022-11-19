import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dropdown from '../../assets/help/dropdown.svg';

function faq({ question, answer, link }) {
    const [isFaqToggle, setIsFaqToggle] = useState(false);
    return (
        <div className="w-full font-Hauora text-xs sm:text-sm lg:text-base text-[#0A0B0D]">
            <div
                onClick={() => setIsFaqToggle(!isFaqToggle)}
                className=" h-[42px] sm:h-12 lg:h-14 cursor-pointer flex border-b border-b-[#A3AAB2] justify-between items-center">
                <h3 className="font-semibold lg:text-base sm:text-sm text-xs ">{question}</h3>
                <div className="pr-3 h-full flex items-center">
                    <img
                        className={`w-[5.32px] sm:w-[6px] sm:h-auto md:w-[6.8px] h-[11.88px] lg:w-[7.1px] lg:h-[15.84px] transition-transform ${
                            isFaqToggle ? '-rotate-90' : ''
                        }`}
                        src={dropdown}
                        alt="dropdown button"
                    />
                </div>
            </div>

            <div
                className={`px-2 py-3 md:px-3 lg:px-4 lg:py-4 w-full h-fit  bg-[#F4F5F6]  ${
                    isFaqToggle ? 'block' : 'hidden'
                }`}>
                <p className="w-full h-full text-[#000C1A]">
                    {answer}{' '}
                    <a href="#" className=" underline text-[#0078D4]">
                        {link}
                    </a>
                </p>
            </div>
        </div>
    );
}

faq.propTypes = { answer: PropTypes.string, question: PropTypes.string, link: PropTypes.string };

export default faq;
