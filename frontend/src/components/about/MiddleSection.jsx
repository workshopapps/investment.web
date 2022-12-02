import React from 'react';
import img0 from './../../assets/about/vline.png';
import img1 from './../../assets/about/line.png';
import img2 from './../../assets/about/desk-frame1.png';
import img3 from './../../assets/about/tick-circle.png';
// import img3 from './../../assets/about/box.png';

export const Section = () => {
    return (
        <div id="services" data-testid="middle-section">
            <div className="bg-[#fafaff] flex flex-col md:flex-row gap-6 md:gap-20 pt-10 md:pt-20 justify-center pb-10 md:pb-20 font-Hauora">
                <div className="bg-white p-5 md:p-10 md:pt-14 md:pb-16 md:max-w-[390px] mx-6 md:mx-0">
                    <h3 className="font-bold text-xl mb-2 text-center md:text-left">What We Do</h3>
                    <p className="text-[#66717E] text-center md:text-left">
                        Yieldvest guides individuals and businesses who need help knowing what
                        stocks to invest in to make better and well-informed decisions on what
                        stocks to purchase. We bring the best to you after analyzing each of these
                        companies based on various metrics. Here`s how we help you make educated
                        decisions;
                    </p>
                </div>
                <div className="bg-white p-5 md:p-10 md:pt-14 md:pb-16 md:max-w-[390px] mx-6 md:mx-0">
                    <h3 className="font-bold text-xl mb-2 text-center md:text-left">Who We Are</h3>
                    <p className="text-[#66717E] text-center md:text-left">
                        Yieldvest is a stock advisory platform offering guidance to prospective
                        investors, new or seasoned alike with our free and premium services it is
                        simple, straightforward, and interface is very user-intuitive, with
                        up-to-date valuations on growth potential, and market value of top companies
                        or stocks to invest in.
                    </p>
                </div>
                <div className="bg-white p-5 md:p-10 md:pt-14 md:pb-16 md:max-w-[390px] mx-6 md:mx-0">
                    <h3 className="font-bold text-xl mb-2 text-center md:text-left">What We Do</h3>
                    <p className="text-[#66717E] text-center md:text-left">
                        Yieldvest guides individuals and businesses who need help knowing what
                        stocks to invest in to make better and well-informed decisions on what
                        stocks to purchase. We bring the best to you after analyzing each of these
                        companies based on various metrics. Here`s how we help you make educated
                        decisions;
                    </p>
                </div>
            </div>
            <div className="bg-[#fafaff] p-5 flex flex-col md:pl-[50px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] bg-left-bottom py-0 md:py-10">
                <h1 className="text-2xl md:text-4xl font-HauoraLight text-center pb-5">
                    Why Choose Us
                </h1>
                <div className="flex flex-row-reverse gap-8 md:gap-auto md:flex-col justify-center mt-8">
                    <div className="flex flex-col gap-3 md:mb-5 md:flex-row text-[#0F7544] md:text-inherit font-normal justify-center md:gap-[10rem]">
                        <p>Stock recommendations</p>
                        <p>Stock Categories</p>
                        <p>Company Profile</p>
                    </div>
                    <img className="hidden md:block mx-[25em]" src={img1} alt="h line" />
                    <img className="block md:hidden" src={img0} alt="v line" />
                </div>

                <div className="bg-[#fafaff] flex flex-col md:flex-row gap-0 md:gap-20 pt-9 m-auto md:m-[5em] justify-center font-HauoraLight">
                    <div className="relative flex flex-col md:flex-row gap-10 md:w-[60%]">
                        <img className="hidden md:block" src={img2} alt="core " />
                        <div className="flex flex-col py-10 md:py-20 gap-5">
                            <h1 className="text-[#455A64] text-center md:text-left md:font-semibold mb-0 md:mb-2 text-xl md:text-4xl">
                                Our Core Values
                            </h1>
                            <p className="text-sm md:text-lg">
                                Having values as a team is essential to the team working as a single
                                unit. We`re a group of diverse individuals, and working together can
                                be tough but we learn to treat each other with respect and welcome
                                every idea. Here are some of our core values that we think other
                                companies should mirror;
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[40%]">
                        <div className="text-sm flex flex-col gap-1 md:gap-4 pt-0 md:pt-[4em]">
                            <h3 className="flex flex-row gap-2 text-[#0F7544] font-semibold text-md md:text-xl">
                                <img className="w-4 h-4 m-0 md:mt-2" src={img3} alt="ticker" />
                                Adaptability
                            </h3>
                            <p className="opacity-50 text-sm md:text-lg pb-5">
                                We adapt to situations quickly, and being able to adapt is an
                                important key to working as a team
                            </p>
                            <h3 className="flex flex-row gap-2 text-[#0F7544] font-semibold text-md md:text-xl">
                                <img className="w-4 h-4 m-0 md:mt-2" src={img3} alt="ticker" />
                                Fun/Passion{' '}
                            </h3>
                            <p className="opacity-50 text-sm md:text-lg pb-5">
                                Enjoying what you do means you pour your heart into it.
                            </p>
                            <h3 className="flex flex-row gap-2 text-[#0F7544] font-semibold text-md md:text-xl">
                                <img className="w-4 h-4 m-0 md:mt-2" src={img3} alt="ticker" />
                                Creativity
                            </h3>
                            <p className="opacity-50 text-sm md:text-lg pb-10 md:pb-5">
                                Quick and creative thinking is exactly what every team needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
