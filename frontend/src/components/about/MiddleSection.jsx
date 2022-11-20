import React from 'react';
import img1 from './../../assets/about/line.png';
import img2 from './../../assets/about/core.png';
import img3 from './../../assets/about/box.png';

export const Section = () => {
    return (
        <div id="services" data-testid="middle-section">
            <div className='bg-[#fafaff] flex flex-col md:flex-row gap-8 pt-9 justify-center bg-[url("/src/assets/about/bg-vec.png")] bg-no-repeat bg-right-bottom pb-24'>
                <div className="bg-white p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0">
                    <h3 className="font-bold text-xl mb-2 text-center md:text-left">Who We Are</h3>
                    <p className="text-[#66717E] text-center md:text-left">
                        MyStockPlug is a stock advisory platform offering guidance to prospective
                        investors, new or seasoned alike. We offer free and premium services with a
                        simple, straightforward, and user-intuitive interface, with up-to-date
                        valuations on growth potential, and market value of top companies or stocks
                        to invest in.
                    </p>
                </div>
                <div className="bg-white p-4 md:p-9  md:pt-14 md:pb-16 md:max-w-[390px] m-4 md:m-0">
                    <h3 className="font-bold text-xl mb-2 text-center md:text-left">What We Do</h3>
                    <p className="text-[#66717E] text-center md:text-left">
                        MyStockPlug guides individuals and businesses who need help knowing what
                        stocks to invest in to make better and well-informed decisions on what
                        stocks to purchase. We bring the best to you after analyzing each of these
                        companies based on various metrics.
                    </p>
                </div>
            </div>
            <div className='p-5 flex flex-col md:pl-[50px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px] md:bg-[url("/src/assets/about/bg-vec.png")] bg-no-repeat bg-left-bottom pb-24'>
                <h1 className="font-semibold text-4xl text-center">Why Choose Us</h1>
                <div className="flex flex-row md:flex-col justify-center mt-8">
                    <div className="flex flex-col gap-3 md:mb-5 md:flex-row text-[#0F7544] md:text-inherit font-semibold md:font-normal justify-center md:gap-[10rem]">
                        <p>Stock recommendations</p>
                        <p>Stock Categories</p>
                        <p>Company Profile</p>
                    </div>
                    <img className="hidden md:block m-auto" src={img1} alt="" />
                </div>
                <div className="flex flex-col items-center flex- mt-16 md:gap-16 md:flex-row">
                    <div className="relative md:w-[50%]">
                        <img className="rounded md:rounded-none " src={img2} alt="core " />
                        <img
                            className="absolute rounded md:rounded-none top-[-14px] left-[13px]"
                            src={img3}
                            alt="core "
                        />
                    </div>
                    <div className="md:w-[50%]">
                        <h1 className="text-[#455A64] font-semibold mb-2 text-xl md:text-4xl">
                            Our Core Values
                        </h1>
                        <div className="text-xs flex flex-col gap-3">
                            <p>
                                Having values as a team is essential to the team working as a single
                                unit. We are a group of diverse individuals, and working together
                                can be tough but we learn to treat each other with respect and
                                welcome every idea. Here are some of our core values that we think
                                companies should mirror;
                            </p>
                            <h3 className="text-[#0F7544] font-semibold text-sm">Adaptability</h3>
                            <p>
                                We adapt to situations quickly, and being able to adapt is an
                                important key to working as a team
                            </p>
                            <h3 className="text-[#0F7544] font-semibold text-sm">Fun/Passion </h3>
                            <p>Enjoying what you do means you pour your heart into it.</p>
                            <h3 className="text-[#0F7544] font-semibold text-sm"> Creativity</h3>
                            <p>Quick and creative thinking is exactly what every team needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
