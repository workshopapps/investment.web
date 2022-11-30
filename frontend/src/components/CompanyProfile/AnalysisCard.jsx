import React from 'react';
// import DownIcon from '../../assets/landingPage/icons/down.svg';
import shareIcon from '../../assets/company-profile/share.svg';
// import greenArrow from '../../assets/company-profile/green-arrow.svg';
// import redArrow from '../../assets/company-profile/red-arrow.svg';
import DummyChart from '../../assets/company-profile/chart.svg';
import { FaChevronDown, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const VisualDataCard = () => {
    return (
        <div className="h-auto flex flex-col text-[#5C5A5A] border rounded-lg px-6 py-4 font-HauoraLight">
            <div className="flex flex-row justify-between">
                <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10">
                    2022{' '}
                    {/* <img
                        className="p-2 ml-3 md:m-auto h-6 md:h-auto border bg-[#E8FBF2] rounded-full"
                        src={DownIcon}
                        alt="open"
                    /> */}
                    <div className="p-2 ml-3 md:m-auto md:h-auto border bg-[#E8FBF2] rounded-full">
                        <FaChevronDown color="#1BD47B" fontSize="0.6em" />
                    </div>
                </button>

                <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md">
                    Share This Stock{' '}
                    <img
                        className="ml-3 md:m-auto h-4 md:h-auto bg-none"
                        src={shareIcon}
                        alt="open"
                    />
                </button>
            </div>

            <img className="h-100 my-10" src={DummyChart} alt="line-chart" />

            {/* <div className="mt-5 md:my-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <h2 className="opacity-50 pl-4">Key Metric</h2>
                <h2 className="opacity-50 pl-0 md:pl-20">USD (2022)</h2>
                <h2 className="opacity-50 pl-4">% Change</h2>
            </div>

            <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input
                        type="radio"
                        checked
                        style={{ accentColor: 'green' }}
                        className="h-5 w-5"
                    />
                    <p className="pl-5">Revenue</p>
                </span>
                <p className="text-left pr-10">56.2B</p>
                <p className="flex flex-row gap-2">
                    <img src={greenArrow} alt="win" className="w-[20px] md:w-auto" />
                    9.99%
                </p>
            </div>

            <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="radio" style={{ accentColor: 'green' }} className="h-5 w-5" />
                    <p className="pl-5">Operating expenses</p>
                </span>
                <p className="text-left pr-10">56.2B</p>
                <p className="flex flex-row gap-2">
                    <img src={greenArrow} alt="win" className="w-[20px] md:w-auto" />
                    9.99%
                </p>
            </div>

            <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="radio" style={{ accentColor: 'green' }} className="h-5 w-5" />
                    <p className="pl-5">Gross Profit</p>
                </span>
                <p className="text-left pr-10">-2.69B</p>
                <p className="flex flex-row gap-2">
                    <img src={redArrow} alt="loss" className="w-[20px] md:w-auto" />
                    6.99%
                </p>
            </div>

            <div className="my-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="radio" style={{ accentColor: 'green' }} className="h-5 w-5" />
                    <p className="pl-5">Net profit Margin</p>
                </span>
                <p className="text-left pr-10">-3.49B</p>
                <p className="flex flex-row gap-2">
                    <img src={redArrow} alt="loss" className="w-[20px] md:w-auto" />
                    9.99%
                </p>
            </div> */}

            <div className="w-full ">
                <div className="w-full flex justify-between mt-12 mb-10">
                    <h1 className="text-[#5C5A5A] text-[1.4em] font-bold">Key Metric</h1>
                    <h1 className="text-[#5C5A5A] text-[1.4em] font-bold">USD (2022)</h1>
                    <h1 className="text-[#5C5A5A] text-[1.4em] font-bold">% Change</h1>
                </div>

                <div className="w-full flex justify-between mb-6">
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            style={{ accentColor: 'green' }}
                            checked
                            className="h-5 w-5"
                        />
                        <h1 className="text-[0.9em] md:text-[0.9em] lg:text-[1.1em] text-[black] font-bold">
                            Revenue
                        </h1>
                    </div>

                    <h1 className="ml-[-0.5em] text-[black] font-bold">56.2B</h1>

                    <div className="flex gap-3 items-center">
                        <FaArrowUp color="#1BD47B" />
                        <h1 className="text-[black] font-bold"> 9.99%</h1>
                    </div>
                </div>

                <div className="w-full flex justify-between mb-6">
                    <div className="flex gap-3 items-center">
                        <input type="radio" style={{ accentColor: 'green' }} className="h-5 w-5" />
                        <h1 className="text-[0.9em] md:text-[0.9em] lg:text-[1.1em] text-[black] font-bold">
                            Operating Expenses
                        </h1>
                    </div>

                    <h1 className="ml-[-6em] text-[black] font-bold">56.2B</h1>

                    <div className="flex gap-3 items-center ">
                        <FaArrowUp color="#1BD47B" />
                        <h1 className="text-[black] font-bold"> 9.99%</h1>
                    </div>
                </div>

                <div className="w-full flex justify-between mb-6">
                    <div className="flex gap-3 items-center">
                        <input type="radio" style={{ accentColor: 'green' }} className="h-5 w-5" />
                        <h1 className="text-[0.9em] md:text-[0.9em] lg:text-[1.1em] text-[black] font-bold">
                            Gross Profit
                        </h1>
                    </div>

                    <h1 className="ml-[-2em] text-[black] font-bold">-2.69B</h1>

                    <div className="flex gap-3 items-center">
                        <FaArrowDown color="#E84E4E" />
                        <h1 className="text-[black] font-bold"> 6.99%</h1>
                    </div>
                </div>

                <div className="w-full flex justify-between mb-6">
                    <div className="flex gap-3 items-center">
                        <input type="radio" style={{ accentColor: 'green' }} className="h-5 w-5" />
                        <h1 className="text-[0.9em] md:text-[0.9em] lg:text-[1.1em] text-[black] font-bold">
                            Net Profit Margin
                        </h1>
                    </div>

                    <h1 className="ml-[-4.7em] text-[black] font-bold">-3.49B</h1>

                    <div className="flex gap-3 items-center">
                        <FaArrowDown color="#E84E4E" />
                        <h1 className="text-[black] font-bold"> 9.99%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualDataCard;
