import React from 'react';
import Icon1 from '../../assets/subscriptionPage/images/icon1.svg';
import Icon2 from '../../assets/subscriptionPage/images/icon5.png';
import Icon3 from '../../assets/subscriptionPage/images/icon4.png';
import Icon4 from '../../assets/subscriptionPage/images/icon4.svg';
import Icon5 from '../../assets/subscriptionPage/images/icon5.svg';
import Icon6 from '../../assets/subscriptionPage/images/icon6.png';

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
                        <h1 className="mt-2 py-2">Company fundamentals</h1>
                        <p className="text-[#0A0B0D] py-2">
                            To help you forecast more accurately, we give you charts showing how the
                            company`s stock has performed over the last 5 years
                        </p>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon4} alt="icon2" />
                        </div>
                        <h1 className="mt-2 py-2">Analytics</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Our optimized analytics tool does fundamental and techical analysis and
                            saves you the stress of doing research
                        </p>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon5} alt="icon3" />
                        </div>
                        <h1 className="mt-2 py-2">Unlimited stock categories</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Access a wide variety of stock companies across different categories
                            like market cap industries, etc to suit for investment goals
                        </p>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon3} alt="icon3" />
                        </div>
                        <h1 className="mt-2 py-2"> Never miss an update</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Get Email Notifications when a new stock is added to the list of
                            recommended stocks.
                        </p>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon2} alt="icon4" />
                        </div>
                        <h1 className="mt-2 py-2">Save your favorite stocks</h1>
                        <p className="text-[#0A0B0D] py-2">
                            You add a stock to your a watchlist so you can look at it later.
                        </p>
                    </div>

                    <div>
                        <div className="h-10 w-10 rounded-full bg-[#525A65] flex justify-center items-center">
                            <img src={Icon6} alt="icon5" />
                        </div>
                        <h1 className="mt-2 py-2">Share a stock</h1>
                        <p className="text-[#0A0B0D] py-2">
                            Share your favourite stocks with friends and fellow investors. Bring
                            them in on the action too.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
