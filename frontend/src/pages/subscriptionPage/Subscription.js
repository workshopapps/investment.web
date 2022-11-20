import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import {
    FaArrowRight,
    FaCheckCircle,
    FaChartBar,
    FaCoins,
    FaReceipt,
    FaMoneyBillWave,
    FaSellsy,
    FaWeixin
} from 'react-icons/fa';
import '../../assets/subscriptionPage/css/style.css';
import Spring from '../../assets/subscriptionPage/images/spring.png';
const Subscription = () => {
    return (
        <div>
            <nav>
                <Nav />
            </nav>
            {/* subscription started from here */}
            <section>
                {/* top content start from here */}
                <div className="w-full flex justify-center items-center topContentHolder">
                    <div className="w-[75%] md:w-[75%] lg:w-[35%]">
                        <h1 className="text-[20px] md:text-[20px] lg:text-[25px] tracking-widest mt-5 mb-5 ">
                            Get started with <span className="text-[#1BD47B] ">MyStockPlug</span> by
                            subscribing to one of our plans
                        </h1>
                    </div>
                    <div>
                        <img src={Spring} alt="curly-spring" className="w-8 h-8 curlySpring" />
                    </div>
                </div>

                {/* subscription type button starts from here */}
                <div className="w-full flex justify-center mt-10 mb-10">
                    <div className="inline-flex">
                        <button className="bg-[#333946] text-white font-bold py-2 px-4 rounded-l">
                            Monthly
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            Annually
                        </button>
                    </div>
                </div>
                {/* subscription type button ends here */}

                {/* top content ends here */}

                <div className="w-full flex justify-center">
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center w-[80%]  ">
                        {/* first costing div start from here*/}

                        <div className=" bg-white rounded w-[300px] h-[auto] BasicSubHolder mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">Basic</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[#1BD47B] text-[24px]">&#8358;5,000</span>
                                <span className="text-[#0A0B0D] text-[16px]"></span>/month
                            </h1>
                            <p className="pt-3 pl-6 pb-3 basicTextHolder">For Basic Users</p>
                            <div className="w-full flex justify-center mb-3">
                                <hr className=" w-[0px] md:w-[0px] lg:w-[250px] sm:border-[white] md:border-[white] lg:border-[#0A0B0D]" />
                            </div>

                            <ul className="w-full theListing list-inside pl-6">
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Stock Information</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />{' '}
                                    <p className="pl-3 ">Compare Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">All Predictions</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-52 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[#1BD47B] text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                >
                                    <span>Subscribe</span>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    <FaArrowRight className="w-3 mt-2 h-3  ml-1" />
                                </button>
                            </div>
                        </div>
                        {/* first costing div ends here*/}

                        {/* second costing div start from here*/}

                        <div className=" bg-[#1BD47B] text-[white] rounded w-[300px] h-[auto] BasicSubHolder  mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[white] text-[24px] pl-6 pt-8 ">Popular</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[white] text-[24px]">&#8358;10,000</span>
                                <span className="text-[#0A0B0D] text-[16px]"></span>/month
                            </h1>
                            <p className="pt-3 pl-6 pb-3 basicTextHolder">For Power Users</p>
                            <div className="w-full flex justify-center mb-3">
                                <hr className=" w-[0px] md:w-[0px] lg:w-[250px] sm:border-[white] md:border-[white] lg:border-[white]" />
                            </div>

                            <ul className="w-full theListing list-inside pl-6">
                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Stock Information</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />{' '}
                                    <p className="pl-3 ">Compare Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">All Predictions</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Price Alert</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Auto Stock Calculator</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-40 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[white] text-[#1BD47B] font-bold py-2 px-4 rounded"
                                    type="button"
                                >
                                    <span>Subscribe</span>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    <FaArrowRight className="w-3 mt-2 h-3  ml-1" />
                                </button>
                            </div>
                        </div>
                        {/* second costing div ends here*/}

                        {/* Third costing div start from here*/}

                        <div className=" bg-white rounded w-[300px] h-[auto] BasicSubHolder mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">Pro</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[#1BD47B] text-[24px]">&#8358;20,000</span>
                                <span className="text-[#0A0B0D] text-[16px]"></span>/month
                            </h1>
                            <p className="pt-3 pl-6 pb-3 basicTextHolder">For Advanced Users</p>
                            <div className="w-full flex justify-center mb-3">
                                <hr className=" w-[0px] md:w-[0px] lg:w-[250px] sm:border-[white] md:border-[white] lg:border-[#0A0B0D]" />
                            </div>

                            <ul className="w-full theListing list-inside pl-6">
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Stock Information</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />{' '}
                                    <p className="pl-3 ">Compare Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">All Predictions</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Price Alert</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Auto Stock Calculator</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Analytics</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-[8.4em] mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[#1BD47B] text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                >
                                    <span>Subscribe</span>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    <FaArrowRight className="w-3 mt-2 h-3  ml-1" />
                                </button>
                            </div>
                        </div>
                        {/* Third costing div ends here*/}
                    </div>
                </div>

                {/* bottom start from here */}
                <div className="w-full h-auto flex justify-center bottomHolder mt-16 mb-8">
                    <div className="w-[75%]">
                        <div className="w-[100%] md:w-[100%] lg:w-[60%]">
                            <h1 className="text-[#1BD47B] pb-6">Features</h1>
                            <h1 className="text-[2em] font-bold pb-6">
                                Analytics To Help You Invest Smarter
                            </h1>
                            <p className="text-[0.8em] text-[#0A0B0D] pb-6">
                                Subscribe to enjoy unlmited access to our analytics tool. With 24/7
                                customer support and assistance, you can rest while we perform all
                                stocks analysis aand forecasting, and give you a probable prediction
                                of the most successful or unsuccessful stocks.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                            <div>
                                <div className="h-8 w-8 rounded-full bg-[#525A65] flex justify-center items-center">
                                    <FaWeixin fill="white" />
                                </div>
                                <h1 className="pt-3 pb-2">Compare Stocks</h1>
                                <p className="text-[#0A0B0D] text-[0.8em]">
                                    Compare the prices of different stocks on our web and desktop
                                    apps. You are able to track stocks in real time.
                                </p>
                                <div className="">
                                    <p className="w-[250px] md:w-[250px] lg:w-[250px] flex">
                                        <span className="text-[#1BD47B]">Learn More</span>
                                        {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                        <FaArrowRight
                                            fill="#1BD47B"
                                            className="w-3 mt-2 h-3  ml-1"
                                        />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="h-8 w-8 rounded-full bg-[#525A65] flex justify-center items-center">
                                    <FaChartBar fill="white" />
                                </div>
                                <h1 className="pt-3 pb-2">Analytics</h1>
                                <p className="text-[#0A0B0D] text-[0.8em]">
                                    Our optimized analytics tool does fundamental and techical
                                    analysis and saves you the stress of doing research.
                                </p>
                                <div className="">
                                    <p className="w-[250px] md:w-[250px] lg:w-[250px] flex">
                                        <span className="text-[#1BD47B]">Learn More</span>
                                        {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                        <FaArrowRight
                                            fill="#1BD47B"
                                            className="w-3 mt-2 h-3  ml-1"
                                        />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="h-8 w-8 rounded-full bg-[#525A65] flex justify-center items-center">
                                    <FaCoins fill="white" />
                                </div>
                                <h1 className="pt-3 pb-2">Unlimited Stocks</h1>
                                <p className="text-[#0A0B0D] text-[0.8em]">
                                    Access a wide variety of stock companies across different
                                    industries. You have an a wealth of stocks to buy from.
                                </p>
                                <div className="">
                                    <p className="w-[250px] md:w-[250px] lg:w-[250px] flex">
                                        <span className="text-[#1BD47B]">Learn More</span>
                                        {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                        <FaArrowRight
                                            fill="#1BD47B"
                                            className="w-3 mt-2 h-3  ml-1"
                                        />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="h-8 w-8 rounded-full bg-[#525A65] flex justify-center items-center">
                                    <FaReceipt fill="white" />
                                </div>
                                <h1 className="pt-3 pb-2"> Stock Information</h1>
                                <p className="text-[#0A0B0D] text-[0.8em]">
                                    To help you forecast more accurately, we give you charts of how
                                    a stock company has performed over the last 5 fiscal years.
                                </p>
                                <div className="">
                                    <p className="w-[250px] md:w-[250px] lg:w-[250px] flex">
                                        <span className="text-[#1BD47B]">Learn More</span>
                                        {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                        <FaArrowRight
                                            fill="#1BD47B"
                                            className="w-3 mt-2 h-3  ml-1"
                                        />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="h-8 w-8 rounded-full bg-[#525A65] flex justify-center items-center">
                                    <FaMoneyBillWave fill="white" />
                                </div>
                                <h1 className="pt-3 pb-2">Invest</h1>
                                <p className="text-[#0A0B0D] text-[0.8em]">
                                    Compare the prices of different stocks on our web and desktop
                                    apps. You are able to track stocks in real time.
                                </p>
                                <div className="">
                                    <p className="w-[250px] md:w-[250px] lg:w-[250px] flex">
                                        <span className="text-[#1BD47B]">Learn More</span>
                                        {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                        <FaArrowRight
                                            fill="#1BD47B"
                                            className="w-3 mt-2 h-3  ml-1"
                                        />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="h-8 w-8 rounded-full bg-[#525A65] flex justify-center items-center">
                                    <FaSellsy fill="white" />
                                </div>
                                <h1 className="pt-3 pb-2">Sell</h1>
                                <p className="text-[#0A0B0D] text-[0.8em]">
                                    Compare the prices of different stocks on our web and desktop
                                    apps. You are able to track stocks in real time.
                                </p>
                                <div className="">
                                    <p className="w-[250px] md:w-[250px] lg:w-[250px] flex">
                                        <span className="text-[#1BD47B]">Learn More</span>
                                        {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                        <FaArrowRight
                                            fill="#1BD47B"
                                            className="w-3 mt-2 h-3  ml-1"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom start from here */}
            </section>
            {/* subscription ends here */}

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Subscription;
