/* eslint-disable prettier/prettier */
import React from 'react';
import QACard from './QACard/QACard';

import RightArrow from '../../../assets/landingPage/icons/arrow-right.svg';

const FAQSection = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col text-center justify-between py-20 lg:my-6 lg:mx-[100px] mx-[16px]">
                <span className="text-[#000718] text-3xl tracking-[0.25px] py-6 font-light font-HauoraLight">
                    Frequently Asked Question
                </span>

                <div className="text-left w-full">
                    <QACard
                        question="How do I do my stock analysis?"
                        answer="With our stock analysis, its as easy as ABC. All you have to do is to check
                        our details and you can get information as regards the particular stock you
                        need"
                    />

                    <QACard
                        question="Can I buy multiple Stocks?"
                        answer="With our stock analysis, its as easy as ABC. All you have to do is to check
                        our details and you can get information as regards the particular stock you
                        need"
                    />

                    <QACard
                        question="I have no experience in stock, Is this for me?"
                        answer="With our stock analysis, its as easy as ABC. All you have to do is to check
                        our details and you can get information as regards the particular stock you
                        need"
                    />

                    <QACard
                        question="How do you make your own money as an institution?"
                        answer="With our stock analysis, its as easy as ABC. All you have to do is to check
                        our details and you can get information as regards the particular stock you
                        need"
                    />
                </div>

                <button className="flex rounded-[8px] text-[16px] lg:mx-[40%] mt-10 mx-[28%] justify-center content-center font-semibold bg-[#1BD47B] p-4 font-Hauora">
                    View more <img src={RightArrow} alt="arrow" />
                </button>
            </div>
        </React.Fragment>
    );
};

export default FAQSection;
