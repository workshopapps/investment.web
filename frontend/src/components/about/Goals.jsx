/* eslint-disable prettier/prettier */
import React from 'react';
import img1 from './../../assets/about/mission.png';
import img2 from './../../assets/about/vision.png';

const Goals = () => {
    return (
        <div
            data-testid="goals"
            className='bg-[#fafaff] flex flex-col md:flex-row gap-8 pt-9 justify-center bg-[url("/src/assets/about/bg-vec.png")] bg-no-repeat bg-right-bottom pb-24'>
            <div className="md:bg-white p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 bg-[#F4F5F6] rounded-lg">
                <h3 className="font-bold md:text-3xl mb-2 text-center md:text-left text-[#455A64] text-xl">
                    Company with a difference. Innovation.
                </h3>
                <p className="text-[#66717E] text-center md:text-left">
                    At MystockPlug we use proprietary tech mixed with finacne give you listings of
                    top 10 stocks so you know the best for you at first glance. A company makes it
                    to our list after it passes through our analysis and we’ve ensured it is the
                    best choice for you.
                </p>
            </div>
            <div className="md:bg-white p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 bg-[#F4F5F6] rounded-lg" >
                <img src={img1} alt=""  className='w-full'/>
                <h3 className="font-bold text-xl mb-2 text-center md:text-left">Mission</h3>
                <p className="text-[#66717E] text-center md:text-left">
                    To enable investors, both newbies and seasoned alike, to make well-informed
                    stock investment decisions that will yield great ROI without the stress that
                    comes with investing.
                </p>
            </div>
            <div className="md:bg-white p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0 bg-[#F4F5F6] rounded-lg">
            <img src={img2} alt="" className='w-full'/>
                <h3 className="font-bold text-xl mb-2 text-center md:text-left">Vision</h3>
                <p className="text-[#66717E] text-center md:text-left">
                    To be the go-to platform for prospective investors to know what stocks to buy.
                    We do this by providing them with well-curated information that will help them
                    make smarter decisions.
                </p>
            </div>
        </div>
    );
};

export default Goals;
