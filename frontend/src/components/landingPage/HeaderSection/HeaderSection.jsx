import React from 'react';

import Frame1 from '../../../assets/landingPage/landing-frame1.png';
import Partner1 from '../../../assets/landingPage/partners/Binance.png';
import Partner2 from '../../../assets/landingPage/partners/Google.png';
import Partner3 from '../../../assets/landingPage/partners/BridgerPay.png';
import Partner4 from '../../../assets/landingPage/partners/StockX.png';

const HeaderSection = () => {
    return (
        <React.Fragment>
            <div className="flex lg:flex-row flex-col-reverse align-right justify-between py-20 lg:mx-[100px] mx-[16px]">
                <div className="flex flex-col gap-4">
                    <span className="text-[#8A8D95] tracking-[0.25px] md:mt-0 mt-10 font-semibold font-HauoraLight">
                        Let&apos;s unlock your financial future
                    </span>

                    <span className="text-[#000718] lg:text-7xl text-2xl tracking-[0.25px] font-bold font-HauoraBold">
                        The best stock <br className="lg:block hidden" /> analysis on the planet!
                    </span>

                    <span className="text-[#545964] lg:text-lg text-sm tracking-[0.25px] font-semibold my-4 font-Hauora">
                        Providing well curated information to make smarter investment{' '}
                        <br className="lg:block hidden" /> decision based on top companies metrics.
                        Through simple and <br className="lg:block hidden" /> accessible expert
                        investment guidance.
                    </span>

                    <button className="rounded-[8px] text-[16px] lg:w-1/5 w-full font-semibold bg-[#1BD47B] p-4 font-Hauora">
                        Get Started
                    </button>
                </div>

                <div>
                    <img className="min-h-full" src={Frame1} alt="frame1" />
                </div>
            </div>

            <div className="flex flex-col text-center justify-center w-full bg-[#000718] h-auto">
                <span className="text-[#1BD47B] text-2xl font-HauoraLight py-6">Our Partners</span>

                <div className="flex md:flex-row flex-col justify-between lg:mx-[100px] mx-[16px] pb-6">
                    <img className="md:mx-0 md:py-0 mx-[30%] py-4" src={Partner1} alt="partner1" />
                    <img className="md:mx-0 md:py-0 mx-[30%] py-4" src={Partner2} alt="partner2" />
                    <img className="md:mx-0 md:py-0 mx-[30%] py-4" src={Partner4} alt="partner3" />
                    <img className="md:mx-0 md:py-0 mx-[30%] py-4" src={Partner3} alt="partner4" />
                    <img className="md:mx-0 md:py-0 mx-[30%] py-4" src={Partner4} alt="partner5" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeaderSection;
