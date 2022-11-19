/* eslint-disable import/no-unresolved */
import React from 'react';
// import charles from '../../assets/Stock/images/Pexels Photo by Charles Parker.png';
import image1 from '../../assets/Stock/images/Rectangle 35.png';
import image2 from '../../assets/Stock/images/Rectangle 36.png';
import image3 from '../../assets/Stock/images/Rectangle 37.png';
import image4 from '../../assets/Stock/images/Rectangle 43.png';
import image5 from '../../assets/Stock/images/Rectangle 44.png';
import image6 from '../../assets/Stock/images/Rectangle 45.png';
import StockImage1 from '../../assets/Stock/images/Rectangle 38.png';
import StockImage2 from '../../assets/Stock/images/Rectangle 39.png';
import StockImage3 from '../../assets/Stock/images/Rectangle 40.png';
import TrendingStocks1 from '../../assets/Stock/images/Rectangle 4718.png';
import TrendingStocks2 from '../../assets/Stock/images/Rectangle 4718 (1).png';
import TrendingStocks3 from '../../assets/Stock/images/Rectangle 4718 (2).png';
import TrendingStocks4 from '../../assets/Stock/images/Rectangle 4718 (3).png';
import TrendingStocks5 from '../../assets/Stock/images/Rectangle 4718 (4).png';
import TrendingStocks6 from '../../assets/Stock/images/Rectangle 4718 (5).png';
import ManSpeaker from '../../assets/Stock/images/Group 1000006312.png';
import arrow from '../../assets/Stock/images/arrow-right.png';
import bell from '../../assets/Stock/images/Bell Angle 1.png';
const StockTips = () => {
    const featured = [
        {
            image: image1,
            description: 'Understanding market’s trend'
        },
        {
            image: image2,
            description: 'Avoid getting scammed'
        },
        {
            image: image3,
            description: 'How to invest like a PRO'
        },
        {
            image: image4,
            description: "The ABC's of investing"
        },
        {
            image: image5,
            description: 'Invest like Warren'
        },
        {
            image: image6,
            description: 'What is Stock'
        }
    ];
    const StockTips = [
        {
            image: StockImage1,
            description: 'Why should i invest?'
        },
        {
            image: StockImage2,
            description: 'Steps for buying your first stock'
        },
        {
            image: StockImage3,
            description: 'Be aware of the best stocks to buy.'
        }
    ];
    const TrendingStocks = [
        { image: TrendingStocks1 },
        { image: TrendingStocks2 },
        { image: TrendingStocks3 },
        { image: TrendingStocks4 },
        { image: TrendingStocks5 },
        { image: TrendingStocks6 }
    ];
    return (
        <div>
            <div
                style={{
                    // backgroundImage: `url(${charles})`
                    backgroundImage:
                        "url('../../assets/Stock/images/Pexels Photo by Charles Parker.png')"
                }}
                className="p-6 text-center h-full">
                <h2>MyStockPlug</h2>
                <h1>STOCK TIPS FOR ABSOLUTE BEGINNERS</h1>
            </div>
            <div className="p-3 flex flex-col gap-6">
                <h1 className="text-3xl">Featured</h1>
                <div className="grid grid-cols-6 gap-6 md:grid-cols-12   ">
                    {featured.map((feature) => {
                        return (
                            <div
                                key={feature.image}
                                className="col-span-3 md:col-span-4 grid gap-1 ">
                                <img src={feature.image} alt="" className="w-full " />
                                <div>Stock tips Update</div>
                                <a href="http://" className="font-bold text-xs">
                                    {feature.description}
                                </a>
                                <div className=" text-xs font-light">16/11/2022 - 2MINS READ</div>
                            </div>
                        );
                    })}
                </div>
                <button className="flex items-center gap-2 mx-auto bg-green-600 text-white p-4 px-6 rounded-lg">
                    Load More
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className="p-3 flex flex-col gap-6">
                <h1 className="text-3xl">Stock Tips Guide</h1>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6">
                    {StockTips.map((Stock) => {
                        return (
                            <div key={Stock.image} className="col-span-3 md:col-span-4 grid gap-1">
                                <img src={Stock.image} alt="" className="w-full " />
                                <div>Stock tips Update</div>
                                <a href="http://" className="font-bold text-xs">
                                    {Stock.description}
                                </a>
                                <div className=" text-xs font-light">16/11/2022 - 2MINS READ</div>
                            </div>
                        );
                    })}
                </div>
                <button className="flex items-center gap-2 mx-auto bg-green-600 text-white p-4  px-6 rounded-lg ">
                    Load More
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className="p-3 flex flex-col gap-6 ">
                <h1 className="text-3xl">Trending Stock Tips Article</h1>
                <div className="grid gap-3 md:grid-cols-6">
                    {TrendingStocks.map((Trend) => {
                        return (
                            <div
                                key={Trend.image}
                                className="col-span-3 flex gap-6 md:grid md:grid-cols-6 md:gap-8  h-full">
                                <img
                                    src={Trend.image}
                                    alt=""
                                    className="w-full rounded-lg md:h-full  "
                                />
                                <div className="flex flex-col md:col-span-3 gap-1 md:gap-0">
                                    <h3 className=" text-green-600">Ade Pete</h3>
                                    <h1>Trading Sally Holdings</h1>
                                    <p className="text-xs">
                                        Even with pressure on sales and earnings, stock, which is
                                        moderately shorted, Even with pressure on sales shorted...
                                    </p>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        Click To Read
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="flex items-center gap-2 mx-auto bg-green-600 text-white p-4 px-6 rounded-lg ">
                    Load More
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-6 gap-2">
                <img src={ManSpeaker} alt="" className="md:col-span-3 md:order-2" />
                <div className="p-8 -mt-32 items-center flex flex-col gap-6 md:col-span-3 md:my-auto">
                    <h1 className="text-2xl">Get The Best Stock Investment Advice Anywhere</h1>
                    <p className="font-bold text-sm whitespace-pre-wrap w-screen px-3 text-center">
                        On MyStockPlug, gain access to thousands of stocks and point precision
                        advice on the best stocks to buy
                    </p>
                    <button className="flex items-center gap-2 mx-auto bg-green-600 text-white p-4 px-6 rounded-lg">
                        Start Investing
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
            <div className="flex w-full items-center justify-center">
                <h1>Subscribe for latest Stock Tips Update</h1>
                <img src={bell} alt="" className=" float-right" />
            </div>
            <div className="flex p-2 gap-2 justify-between text-xs bg-gray-300 w-11/12 mx-auto rounded-lg">
                <p>Never miss out on anything about stock, by joining our Mailing List</p>
                <span className="flex justify-between">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <button className="flex items-center gap-2 bg-green-600 text-white  rounded-lg">
                        Start Investing
                        <img src={arrow} alt="" />
                    </button>
                </span>
            </div>
            <div>
                <h1>mock foooter</h1>
            </div>
        </div>
    );
};

export default StockTips;
