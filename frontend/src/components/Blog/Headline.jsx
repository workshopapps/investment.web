import React from 'react';
import rect from '../../assets/blog/arrow-right-black.svg';
const Headline = () => {
    return (
        <div className="headline text-white bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center mx-0 my-12 lg:p-40 py-20 px-10  text-center gap-6">
            <div className="font-bold lg:text-6xl text-2xl ">
                U.S. Inflation to Remain a Pain in Granny Retail&#39;s Side
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-6 text-sm sm:text-base ">
                The retail sector soared after the CPI report last week, as represented above by
                Granny Retail, the lead shopper of Mish&#39;s Modern Family, SPDR S&P Retail ETF
                (XRT).{' '}
                <div className=" flex gap-2">
                    <span>Cameron Williamson</span>
                    <img src="./assets/blog/Ellipse 1 (1).svg" alt="" />
                    <span>11 November 2022</span>
                </div>
            </div>
            <div>
                <button className="bg-[#1BD47B] rounded-lg flex justify-center font-semibold text-center w-full  text-black p-2 sm:p-4 gap-2 text-sm sm:text-sm">
                    Read article
                    <img src={rect} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Headline;
