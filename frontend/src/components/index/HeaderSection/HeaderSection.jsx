import React from 'react';
import Frame1 from '../../../Assets/index/landing-frame1.png';

const HeaderSection = () => {
    return (
        <React.Fragment>
            <div className="flex lg:flex-row flex-col-reverse mx-auto align-right justify-between w-full p-10 py-20">
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
            <hr />
        </React.Fragment>
    );
};

export default HeaderSection;
