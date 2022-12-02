/* eslint-disable prettier/prettier */
import React from 'react';
import img1 from './../../assets/about/mission.png';
import img2 from './../../assets/about/vision.png';

const Goals = () => {
    return (
        <div
            data-testid="goals"
            className='bg-white flex flex-col md:flex-row gap-10 md:gap-20 pt-0 md:pt-9 justify-center font-Hauora'>
            <div className="p-5 md:p-9 md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 rounded-lg">
                <h3 className="font-Hauora font-normal md:font-semibold md:text-5xl mb-2 text-center md:text-left text-[#455A64] mx-10 md:mx-0 text-xl">
                    Company with a difference. Innovation.
                </h3>
                <p className="text-[#66717E] text-xs md:text-sm text-center md:text-left">
                    At MystockPlug we use proprietary tech mixed with finacne give you listings of
                    top 10 stocks so you know the best for you at first glance. A company makes it
                    to our list after it passes through our analysis and we`ve ensured it is the
                    best choice for you.
                </p>
            </div>

            <div className="md:bg-white  md:pt-14 md:pb-16 md:max-w-[390px] bg-[#F4F5F6] rounded-lg mx-[4em] md:mx-0" >
                <img src={img1} alt="" className='w-full rounded-t-lg' />
                <h3 className="text-2xl font-semibold my-4 text-center md:text-left">Mission</h3>
                <p className="text-[#66717E] text-xs md:text-sm text-center pb-10 md:pb-0 md:text-left">
                    To enable investors, both newbies and seasoned alike, to make well-informed
                    stock investment decisions that will yield great ROI without the stress that
                    comes with investing.
                </p>
            </div>
            <div className="md:bg-white md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 bg-[#F4F5F6] rounded-lg mx-[4em] md:mx-0">
                <img src={img2} alt="" className="w-full rounded-t-lg" />
                <h3 className="text-2xl font-semibold my-4 text-center md:text-left">Vision</h3>
                <p className="text-[#66717E] text-xs md:text-sm text-center pb-10 md:pb-0 md:text-left">
                    To be the go-to platform for prospective investors to know what stocks to buy.
                    We do this by providing them with well-curated information that will help them
                    make smarter decisions.
                </p>
            </div>
        </div>
    );
};

export default Goals;
