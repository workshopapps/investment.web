import React from 'react';

import UpIcon from '../../../assets/landingPage/icons/up.svg';
import DownIcon from '../../../assets/landingPage/icons/down.svg';
import RightArrow from '../../../assets/landingPage/icons/arrow-right.svg';

const FAQSection = () => {
    const faqData = [
        {
            index: 0,
            question: 'How do I do my stock analysis?',
            answer: 'With our stock analysis, its as easy as ABC. All you have to do is to check our details and you can get information as regards the particular stock you need'
        },
        {
            index: 1,
            question: 'Can I buy multiple Stocks?',
            answer: ''
        },
        {
            index: 2,
            question: 'I have no experience in stock, Is this for me?',
            answer: ''
        },
        {
            index: 3,
            question: 'How do you make your own money as an institution?',
            answer: ''
        }
    ];

    const [show, setShow] = React.useState(false);

    return (
        <React.Fragment>
            <div className="flex flex-col text-center justify-between py-20 lg:my-6 lg:mx-[100px] mx-[16px]">
                <span className="text-[#000718] text-3xl tracking-[0.25px] py-6 font-light font-HauoraLight">
                    Frequently Asked Question
                </span>

                <div className="text-left w-full">
                    {faqData.map((each) => {
                        return (
                            <>
                                <div className="flex flex-row justify-between my-4 shadow-md">
                                    <span className="text-[#000718] text-md md:text-2xl tracking-[0.25px] align-middle m-4 font-bold font-Hauora">
                                        How do I do my stock analysis?
                                    </span>
                                    {show ? (
                                        <span
                                            className="text-[#000718] md:text-2xl md:pt-4 pt-2 tracking-[0.25px] align-middle m-4 font-bold font-Hauora"
                                            onClick={() => setShow(false)}>
                                            <img src={UpIcon} alt="open" />
                                        </span>
                                    ) : (
                                        <span
                                            className="text-[#000718] md:text-2xl md:pt-4 pt-2 tracking-[0.25px] align-middle m-4 font-bold font-Hauora"
                                            onClick={() => setShow(true)}>
                                            <img src={DownIcon} alt="open" />
                                        </span>
                                    )}
                                </div>

                                {show ? (
                                    <span className="text-[#000718] text-md md:text-2xl tracking-[0.25px] align-middle m-4 font-bold font-Hauora">
                                        With our stock analysis, its as easy as ABC. All you have to do is to check our details and you can get information as regards the particular stock you need
                                    </span>
                                ) : null}
                            </>
                        );
                    })}
                </div>

                <button className="flex rounded-[8px] text-[16px] lg:mx-[45%] mt-10 mx-[25%] justify-center content-center font-semibold bg-[#1BD47B] p-4 font-Hauora">
                    View more <img src={RightArrow} alt="arrow" />
                </button>
            </div>
        </React.Fragment>
    );
};

export default FAQSection;
