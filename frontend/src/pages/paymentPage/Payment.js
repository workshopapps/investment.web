import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { faqDatas } from './FaqContent';
// import ArrowIcons from './assets/icons/arrow-right.png';
// import Shield from './assets/icons/shield-tick.png';
// import Stripe from './assets/icons/stripe.png';
import '../../assets/paymentpage/css/style.css';
import Shield from '../../assets/paymentpage/icons/shield-tick.png';

import Nav from '../../components/Nav/Nav';
import { FaPlus, FaStripe, FaMinus, FaArrowRight } from 'react-icons/fa';

const Payment = () => {
    // const [isActive, setIsActive] = useState(false);

    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <div>
            <nav>
                <Nav />
            </nav>

            <section className="h-auto flex flex-wrap bg-white mainHolder">
                {/* left side start from here */}
                <div className="w-full md:w-full lg:w-1/2 theLeftSide mt-16">
                    <div className="upperLeftSide">
                        <p className="text-[#1BD47B] pl-6">Payment</p>
                        <h1 className="text-[30px] lg:text-[40px] font-semibold text-vnet-blue mb-2 completePayment pl-6">
                            Complete Payment
                        </h1>
                    </div>

                    <ul className="theFaqHolder pl-6 pr-6">
                        {faqDatas?.map((faqs, index) => {
                            return (
                                <li
                                    key={faqs.id}
                                    className="bg-white my-2 shadow-lg"
                                    onClick={() => toggle(index)}
                                >
                                    <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                                        <span className="font-bold text-[16px]">{faqs.title}</span>
                                        <span>{clicked === index ? <FaMinus /> : <FaPlus />}</span>
                                    </h2>
                                    {clicked === index ? (
                                        <div className=" overflow-hidden">
                                            <p className="p-3 font-normal text-gray-900">
                                                {faqs.content}
                                            </p>
                                        </div>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* left side ends here */}

                {/* right side start from here */}
                <div className=" w-full lg:w-1/2 flex flex-col justify-center theRightSide items-center md:w-1 sm:w-1 mt-16">
                    <div className="w-[95%] relative p-5 border-[#1BD47B] border-solid border-2 rounded-md flex justify-around items-center">
                        <div className="ml-4">
                            <input
                                type="radio"
                                className="h-5 w-5 checked:bg-[red] absolute top-[24px] left-[24px]"
                            />
                        </div>

                        <div className="flex ml-[-15em] md:ml-[-15em] lg:ml-[-25em] w-2/3 flex-col flex-wrap">
                            <h3 className="text-[#0A0B0D] font-bold">Basic</h3>
                            <p className="text-[#525A65] text-[0.8em]">
                                For Basic Users new to investing. Get access to our basic features
                                and invest with more precision.
                            </p>
                        </div>

                        <div className="ml-3 absolute left-[20em] md:left-[20em] lg:left-[30em] top-[20px]">
                            <span>&#8358;5,000</span>
                            <span>/month</span>
                        </div>
                    </div>

                    {/* form starts from here */}

                    <div className="w-[95%] border-[#1BD47B] border-solid border-2 rounded-md flex mt-8 ">
                        <form className="flex">
                            <div className="flex flex-wrap justify-center">
                                <div className="">
                                    <div className="">
                                        <label className="block pt-4 text-[#0A0B0D] text-xs font-bold mb-2">
                                            Card Number
                                        </label>
                                        <input
                                            className="w-[440px] md:w-[450px] lg:w-[550px] bg-white text-[#525A65] border-2 border-[#8D8D8D] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="123-456-9856-773"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-around">
                                    <div className="">
                                        <label className="block tracking-wide text-[#0A0B0D] text-xs font-bold mb-2">
                                            Expiration Date
                                        </label>
                                        <input
                                            className="appearance-none block w-[210px] md:w-[210px] lg:w-[250px] bg-white text-[#525A65] border-2 border-[#8D8D8D] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            type="text"
                                            placeholder="MM/YY"
                                        />
                                    </div>

                                    <div className="">
                                        <label className="block uppercase tracking-wide text-[#0A0B0D] text-xs font-bold mb-2">
                                            cvv
                                        </label>
                                        <input
                                            className="appearance-none block w-[210px] md:w-[210px] lg:w-[250px] bg-white text-[#525A65] border-2 border-[#8D8D8D] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="CVV"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* form ends  here */}

                    {/* submit button started from here */}
                    <div className="mt-8">
                        <button
                            className="w-[450px] md:w-[450px] lg:w-[605px] flex justify-center shadow bg-[#1BD47B] text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            <span>Pay</span>
                            {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                            <FaArrowRight className="w-3 mt-2 h-3  ml-1" />
                        </button>
                    </div>

                    {/* submit button ends here */}

                    <div className="flex w-full justify-center items-center mt-3 mb-3">
                        <p className="text-[0.7em] font-semiboldxl">Secured by </p>
                        {/* <img className="w-[35px] h-[20px]" alt="stripe-logo" src={Stripe} /> */}
                        <FaStripe className="w-8 h-[20px] pl-2" />
                        <img className="w-3 h-3 ml-1" alt="stripe-logo" src={Shield} />
                    </div>
                </div>
            </section>

            <footer className="footerHolder">
                <Footer />
            </footer>
        </div>
    );
};

export default Payment;
