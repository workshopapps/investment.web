import React from 'react';
import rect from '../../assets/blog/Rectangle 4 (3).png';
const Header = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-4 lg:gap-6 px-14 pt-8 lg:pt-14">
                <div className="font-bold lg:text-6xl text-2xl text-center">
                    U.S. Inflation to Remain a Pain in Granny Retail&#39;s Side
                </div>
                <div className="flex gap-2 text-xs lg:text-sm">Read it in 7 minutes</div>
                <div className="flex flex-col items-center justify-center text-center gap-6 text-sm sm:text-base">
                    The retail sector soared after the CPI report last week, as represented above by
                    Granny Retail, the lead shopper of Mish&#39;s Modern Family, SPDR S&P Retail ETF
                    (XRT).
                </div>
            </div>
            <img src={rect} alt="" className="h-96 lg:w-full lg:h-1/2 object-cover mt-4" />
        </div>
    );
};

export default Header;
