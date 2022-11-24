import React from 'react';

import DownIcon from '../../assets/landingPage/icons/down.svg';
// import UpIcon from '../../assets/landingPage/icons/up.svg';
import shareIcon from '../../assets/company-profile/share.svg';

const VisualDataCard = () => {
    return (
        <div className="h-[40em] flex flex-col text-[#5C5A5A] border rounded-lg px-6 py-4 font-HauoraLight">
            <div className="flex flex-row justify-between">
                <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10">
                    2022{' '}
                    <img
                        className="p-2 ml-3 md:m-auto h-6 md:h-auto border bg-[#E8FBF2] rounded-full"
                        src={DownIcon}
                        alt="open"
                    />
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

            <div className="h-60 my-10 border">
                <p>Chart.js</p>
            </div>

            <div className="mt-5 md:my-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <h2 className="opacity-50 pl-4">Key Metric</h2>
                <h2 className="opacity-50 pl-0 md:pl-20">USD (2022)</h2>
                <h2 className="opacity-50 pl-4">% Change</h2>
            </div>

            <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="checkbox" />
                    <p className="pl-5">Revenue</p>
                </span>
                <p className="text-left pr-10">56.2B</p>
                <p>9.99</p>
            </div>

            <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="checkbox" />
                    <p className="pl-5">Operating expenses</p>
                </span>
                <p className="text-left pr-10">56.2B</p>
                <p>9.99</p>
            </div>

            <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="checkbox" />
                    <p className="pl-5">Net Income</p>
                </span>
                <p className="text-left pr-10">56.2B</p>
                <p>9.99</p>
            </div>

            <div className="my-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <span className="flex flex-row md:w-1/4">
                    <input type="checkbox" />
                    <p className="pl-5">Net profit Margin</p>
                </span>
                <p className="text-left pr-10">56.2B</p>
                <p>9.99</p>
            </div>
        </div>
    );
};

export default VisualDataCard;
