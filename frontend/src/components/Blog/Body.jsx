import React from 'react';
import Card from './Card';
import img10 from '../../assets/blog/Rectangle 8 (8).png';
import img11 from '../../assets/blog/Rectangle 8 (9).png';
import img12 from '../../assets/blog/Rectangle 8 (10).png';
import facebook from '../../assets/blog/greenlinkedin.svg';
import linkedin from '../../assets/blog/greenfacebook.svg';
import twitter from '../../assets/blog/greentwitter.svg';
import xtwitter from '../../assets/blog/mdi_twitter.svg';
import xfacebook from '../../assets/blog/ri_facebook-fill.svg';
import xlinkedin from '../../assets/blog/uim_linkedin-alt.svg';
import pic1 from '../../assets/blog/pic1.png';
import pic2 from '../../assets/blog/pic2.png';
import pic3 from '../../assets/blog/pic3.png';
import profile from '../../assets/blog/Ellipse 462 (1).png';
const Body = () => {
    const CardData = [
        {
            img: img10,
            name: 'Guy Hawkins',
            date: '07 November 2022',
            title: 'Moving multiple drawing objects quickly and accurately',
            description:
                'Sometimes you’ll need to move multiple drawing objects at the same time, for example after a stock split.'
        },
        {
            img: img11,
            name: 'Howard Reisman',
            date: '06 November 2022',
            title: 'How to Research a Stock in Stock Rover Part I – Deep Dive',
            description:
                'This is the first of a three part series designed to show you how to effectively use Stock Rover to research a stock. We will be using Microsoft'
        },
        {
            img: img12,
            name: 'Jayanthi Gopalakrishnan',
            date: '05 November 2022',
            title: 'Shopify Stock Is Getting Some Love',
            description:
                'TradingView’s team is always hard at work to offer you the best trading prospects, and we’ve now made OTC trading available '
        }
    ];
    return (
        <div className="mt-6 ">
            <div className="lg:flex gap-8 items-center">
                <div className="flex lg:flex-col lg:items-center text-center gap-4 lg:gap-6 p-6 bg-[#F5F5F5] w-72 sm:w-96 mx-auto lg:w-1/4  ">
                    <img src={profile} alt="" className=" object-contain" />
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <div className="text-xl font-bold">Mish Schneider</div>
                        <div className="text-xs mb-1">Author</div>
                        <div className=" justify-between hidden lg:flex lg:gap-4">
                            <img src={linkedin} alt="" />
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                        <div className=" justify-between flex lg:hidden mb-2 w-3/4">
                            <img src={xfacebook} alt="" />
                            <img src={xtwitter} alt="" />
                            <img src={xlinkedin} alt="" />
                        </div>
                        <div className="text-secondary text-xs">View all articles</div>
                    </div>
                </div>

                <div className="mt-6 lg:w-3/4">
                    <span>
                        <p className="mb-4">
                            The retail sector soared after the CPI report last week, as represented
                            above by Granny Retail, the lead shopper of Mish&#39;s Modern Family,
                            SPDR S&P Retail ETF (XRT). The latest Consumer Price Index (CPI) reading
                            came in at 7.7% versus 7.9% showing 0.20% less than expected, and
                            markets celebrated.{' '}
                        </p>
                        <p className="mb-4">
                            After rebounding off support levels at the 50-day moving average, Granny
                            XRT gapped higher. XRT has continued to rise and may see further
                            resistance at the 200-day moving average. Several retailers, beginning
                            with Walmart (WMT), report earnings this week, and retail sales figures
                            will be revealed on Wednesday.{' '}
                        </p>
                    </span>
                    <span>
                        <span>
                            <span className=" font-semibold">
                                Related: <br />{' '}
                                <span className="font-normal text-red">
                                    New Features Added to Stock Rover V8
                                </span>
                            </span>
                            <p className="mt-4">
                                This data will be pivotal for Granny Retail&#39;s price trajectory.
                                Granny Retail XRT currently displays market leadership with our
                                Triple Play indicator, and our Real Motion indicator demonstrates
                                strong momentum trend strength. The current XRT rally can always
                                retrace, so paying attention to our proprietary indicators will
                                signal if Granny might reverse course.
                            </p>
                        </span>
                    </span>
                </div>
            </div>

            <div className=" mt-6 lg:mt-10">
                <div className="text-2xl font-bold">
                    What is expected to happen this week to retail and beyond in 2023?
                </div>
                <p className="mt-4">
                    Unfortunately, there isn&#39;t a simple answer. If you think inflation is fully
                    addressed or peaking because CPI came in 0.20% less, you could be in for an
                    inflation shock. The October print rose the same as in September, shown above.
                    The positive market reaction doesn&#39;t mean we are in a new bull market.
                    Walmart will report before the opening on Tuesday. Key points to watch for
                    include guidance on inventory levels and transportation costs headwinds, as well
                    as updates on pricing and Walmart+ subscriber growth.
                </p>
                <div className="mt-4">
                    Households are feeling the pinch from inflation, and this trend will likely
                    continue into 2023. The retail sector is in for a challenging quarter and year
                    ahead, as global inflation, loss of purchasing power, and weak consumer
                    sentiment continue to weigh on retail.
                </div>
                <div className=" flex flex-wrap lg:flex-nowrap gap-8 w-full mt-6">
                    <div className="">
                        <img src={pic1} alt="" />
                    </div>
                    <div className="">
                        <img src={pic2} alt="" />
                    </div>
                    <div className="">
                        {' '}
                        <img src={pic3} alt="" />
                    </div>
                </div>
                <p className="mt-4">
                    We will keep a close eye on Granny Retail as an early indication of the holiday
                    season and the economy&#39;s overall health. As a trader, it is critical to
                    safeguard your profits. Mish&#39;s risk management trading service can help you
                    navigate unpredictable markets and minimize trading losses. Rob Quinn, our Chief
                    Strategy Consultant, can provide pricing and software compatibility for our
                    trading indicators and offer a complimentary one-on-one trading consult.
                </p>
            </div>
            <div className="thirdtext">
                <div className="text-2xl mt-12 font-bold mb-4">ETF Summary</div>

                <ul className=" list-disc ml-4">
                    <li> S&P 500 (SPY): 393 support and 398 resistance.</li>
                    <li>Russell 2000 (IWM): 182 support and 187 resistance.</li>
                    <li>Dow (DIA): 333 support and 339 resistance.</li>
                    <li>Nasdaq (QQQ): 283 support and 289 resistance.</li>
                    <li>KRE (Regional Banks): 62 support and 67 resistance.</li>
                    <li>SMH (Semiconductors): 215 support and 224 resistance.</li>
                    <li>IYT (Transportation): 225 support and 233 resistance.</li>
                    <li>IBB (Biotechnology): 132 support and 136 resistance.</li>
                    <li>XRT (Retail): 62 support and 67 resistance.</li>
                </ul>
            </div>
            <div className=" mt-12 font-semibold text-3xl text-center mb-6">Related Articles</div>
            <div className="flex flex-wrap justify-between mb-8 lg:mb-12 gap-10 ">
                {CardData.map((items, index) => {
                    return <Card item={items} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Body;
