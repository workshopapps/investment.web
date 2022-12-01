import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Icon1 from '../../assets/subscriptionPage/images/icon1.svg';
import Icon2 from '../../assets/subscriptionPage/images/icon2.svg';
import Icon3 from '../../assets/subscriptionPage/images/icon3.svg';
import Icon4 from '../../assets/subscriptionPage/images/icon4.svg';
import Icon5 from '../../assets/subscriptionPage/images/icon5.svg';
import Icon6 from '../../assets/subscriptionPage/images/icon6.svg';

const FeatureSection = () => {
    return (
        <div className="w-full h-auto flex justify-center bottomHolder mt-16 py-20 bg-[#FBFBFB] font-Hauora">
            <div className="w-[80%]">
                <div className="w-[100%] md:w-[100%] lg:w-[60%]">
                    <h1 className="text-[#1BD47B] pb-6">Features</h1>
                    <h1 className="text-2xl md:text-5xl pb-6">
                        Analytics To Help You Invest Smarter
                    </h1>
                    <p className="text-[#0A0B0D] pb-6">
                        Subscribe to enjoy unlmited access to our analytics tool. With 24/7 customer
                        support and assistance, you can rest while we perform all stocks analysis
                        aand forecasting, and give you a probable prediction of the most successful
                        or unsuccessful stocks.
                    </p>
                </div>
                <br />
                <br />

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            {/* <FaWeixin fill="white" /> */}
                            <img src={Icon1} alt="icon1" />
                        </div>
                        <h1 className="mt-2 py-2">Compare Stocks</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Compare the prices of different stocks on our web and desktop apps. You
                            are able to track stocks in real time.
                        </p>
                        <div className="mt-2">
                            <p className="w-[250px] md:w-[250px] lg:w-[250px] flex cursor-pointer hover:opacity-50">
                                <span className="text-[#1BD47B]">Learn More</span>
                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight fill="#1BD47B" className="w-3 mt-2 h-3  ml-1" />
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon4} alt="icon2" />
                        </div>
                        <h1 className="mt-2 py-2">Analytics</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Our optimized analytics tool does fundamental and techical analysis and
                            saves you the stress of doing research.
                        </p>
                        <div className="mt-2">
                            <p className="w-[250px] md:w-[250px] lg:w-[250px] flex cursor-pointer hover:opacity-50">
                                <span className="text-[#1BD47B]">Learn More</span>
                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight fill="#1BD47B" className="w-3 mt-2 h-3  ml-1" />
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon5} alt="icon3" />
                        </div>
                        <h1 className="mt-2 py-2">Unlimited Stocks</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Access a wide variety of stock companies across different industries.
                            You have an a wealth of stocks to buy from.
                        </p>
                        <div className="mt-2">
                            <p className="w-[250px] md:w-[250px] lg:w-[250px] flex cursor-pointer hover:opacity-50">
                                <span className="text-[#1BD47B]">Learn More</span>
                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight fill="#1BD47B" className="w-3 mt-2 h-3  ml-1" />
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon3} alt="icon3" />
                        </div>
                        <h1 className="mt-2 py-2"> Stock Information</h1>
                        <p className="text-[#0A0B0D] py-2">
                            To help you forecast more accurately, we give you charts of how a stock
                            company has performed over the last 5 fiscal years.
                        </p>
                        <div className="mt-2">
                            <p className="w-[250px] md:w-[250px] lg:w-[250px] flex cursor-pointer hover:opacity-50">
                                <span className="text-[#1BD47B]">Learn More</span>
                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight fill="#1BD47B" className="w-3 mt-2 h-3  ml-1" />
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon2} alt="icon4" />
                        </div>
                        <h1 className="mt-2 py-2">Invest</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Compare the prices of different stocks on our web and desktop apps. You
                            are able to track stocks in real time.
                        </p>
                        <div className="mt-2">
                            <p className="w-[250px] md:w-[250px] lg:w-[250px] flex cursor-pointer hover:opacity-50">
                                <span className="text-[#1BD47B]">Learn More</span>
                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight fill="#1BD47B" className="w-5 mt-2 h-3  ml-1" />
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon6} alt="icon5" />
                        </div>
                        <h1 className="mt-2 py-2">Sell</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Compare the prices of different stocks on our web and desktop apps. You
                            are able to track stocks in real time.
                        </p>
                        <div className="mt-2">
                            <p className="w-[250px] md:w-[250px] lg:w-[250px] flex cursor-pointer hover:opacity-50">
                                <span className="text-[#1BD47B]">Learn More</span>
                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight fill="#1BD47B" className="w-3 mt-2 h-3  ml-1" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
