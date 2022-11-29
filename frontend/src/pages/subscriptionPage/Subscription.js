/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import { freeMonthly, premiumMonthly, premiumMaxMonthly, freeYearly, premiumYearly, premiumMaxYearly } from './SubscriptionContent';
import { Link } from 'react-router-dom';


const Subscription = () => {

    // const itemBasicMonthly = {
    //     price:"price_1M84ELE0pPf6mXoCmP61VmyL",
    //     quantity:1
    // }

    // const itemPremiumMonthly ={
    //     price:"price_1M84FHE0pPf6mXoCaZEdZHgv",
    //     quantity:1
    // }

    // const itemPremiumMaxMonthly ={
    //     price:"price_1M84G9E0pPf6mXoC939Khuwk",
    //     quantity:1
    // }

    // const itemBasicYearly ={
    //     price:"price_1M84H0E0pPf6mXoC4hpx6xfA",
    //     quantity:1
    // }

    // const itemPremiumYearly ={
    //     price:"price_1M84HfE0pPf6mXoC84eKBtLB",
    //     quantity:1
    // }

    // const itemPremiumMaxYearly ={
    //     price:"price_1M84IIE0pPf6mXoCmgrhvn0L",
    //     quantity:1
    // }

    // const checkoutOptions = {

    //     lineItems: [itemPremiumMonthly],
    //     mode:"payment",
    //     successUrl:`${window.location.origin}/success`,
    //     cancelUrl:`${window.location.origin}/cancel`,


    // }


    
// const redirectToCheckout = async () => {
//     const stripe = await getStripe()
// const {error} = await stripe.redirectToCheckout(checkoutOptions)

// console.log("stripe checkout error",error)
// }



    // state to set change the type of subscription yearly or monthly

    const [subType, setSubType] = useState(1);

    // function to change the subscription type from false to true
    // which changes from monthly subscription to yearly Subscription

 

    const handleSubType = (theSub) => {

        if (theSub === 'monthly') {
            setSubType(1)
        console.log(subType)
        }
        
        if (theSub === 'yearly') {
            setSubType(2)
        console.log(subType)
        }
    }
   
    console.log(freeMonthly)

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
                        <button className= {subType === 1 ? `bg-[#333946] text-white font-bold py-2 px-4 rounded-l ` : `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l `}  onClick={() => handleSubType('monthly')}>
                            Monthly
                        </button>
                        <button className={subType === 2 ? `bg-[#333946] text-white font-bold py-2 px-4 rounded-r ` : `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`} onClick={() => handleSubType('yearly')}>
                            Annually
                            
                        </button>
                    </div>
                </div>
                {/* subscription type button ends here */}



                {/* subscription content details start here */}

            {subType === 1 ? <div className="w-full flex justify-center">
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center w-[80%]  ">
                        {/* first costing div start from here*/}

                        <div className=" bg-white rounded border-[1px] border-[rgba(141, 141, 141, 0.2)] w-[300px] h-[auto] BasicSubHolder mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">Free</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[#1BD47B]  text-[18px] md:text-[18px] lg:text-[24px]">&#8358;0.00</span>
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
                                    <p className="pl-3 ">Share Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Access to Only 12 stocks</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-52 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                
                                
                                 <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[#1BD47B] text-white font-bold py-2 px-4 rounded"
                                    type="button">
                                        <Link to={"/payment"} state={{state: freeMonthly, priceId:"price_1M84ELE0pPf6mXoCmP61VmyL"}}>
                                    <span className='text-[black] text-[0.8em]'>Current Plan</span>
                                    </Link>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    {/* <FaArrowRight className="w-3 mt-2 h-3  ml-1" /> */}
                                </button>
                            </div>
                        </div>
                        {/* first costing div ends here*/}

                        {/* second costing div start from here*/}

                        <div className=" bg-[#1BD47B] text-[white] rounded w-[300px] h-[auto] BasicSubHolder  mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[white] text-[24px] pl-6 pt-8 ">Premium</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[white] text-[18px] md:text-[18px] lg:text-[24px]">&#8358;5,000</span>
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
                                    <p className="pl-3 ">Share Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Unlimited access to all stocks</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Access to more filters</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Access to Small Caps stocks</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-40 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[white] text-[#1BD47B] font-bold py-2 px-4 rounded"
                                    type="button" >
                                          <Link to={"/payment"} state={{state: premiumMonthly, priceId:"price_1M84FHE0pPf6mXoCaZEdZHgv"}} className="flex">
                                    <span className='text-[#1F2226] text-[0.8em]'>Subscribe</span>
                                    </Link>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    <FaArrowRight className="w-3 mt-1 text-[#1F2226] h-3  ml-1" />
                                </button>
                            </div>
                        </div>
                        {/* second costing div ends here*/}

                        {/* Third costing div start from here*/}

                        <div className=" bg-white border-[1px] border-[rgba(141, 141, 141, 0.2)]  rounded w-[300px] h-[auto] BasicSubHolder mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">Premium Max</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[#1BD47B] text-[18px] md:text-[18px] lg:text-[24px] pl-5 md:pl-5 lg:pl-0">&#8358;20,000</span>
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
                                    type="button">
                                        <Link to={"/payment"} state={{state: premiumMaxMonthly, priceId:"price_1M84G9E0pPf6mXoC939Khuwk"}}>
                                    <span className='text-[black] text-[0.8em]'>Coming Soon</span>
                                    </Link>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    {/* <FaArrowRight className="w-3 mt-2 h-3  ml-1" /> */}
                                </button>
                            </div>
                        </div>
                        {/* Third costing div ends here*/}
                    </div>
                </div> : subType === 2 ? 
                
                <div className="w-full flex justify-center">
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center w-[80%]  ">
                        {/* first costing div start from here*/}

                        <div className=" bg-white rounded border-[1px] border-[rgba(141, 141, 141, 0.2)] w-[300px] h-[auto] BasicSubHolder mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">Free</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[#1BD47B]  text-[18px] md:text-[18px] lg:text-[24px]">&#8358;0.00</span>
                                <span className="text-[#0A0B0D] text-[16px]"></span>/year
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
                                    <p className="pl-3 ">Share Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="#1BD47B" />
                                    <p className="pl-3">Access to Only 12 stocks</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-52 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[#1BD47B] text-white font-bold py-2 px-4 rounded"
                                    type="button">
                                        <Link to={"/payment"} state={{state: freeYearly, priceId:"price_1M84H0E0pPf6mXoC4hpx6xfA"}}>
                                    <span className='text-[black] text-[0.8em]'>Current Plan</span>
                                    </Link>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    {/* <FaArrowRight className="w-3 mt-2 h-3  ml-1" /> */}
                                </button>
                            </div>
                        </div>
                        {/* first costing div ends here*/}

                        {/* second costing div start from here*/}

                        <div className=" bg-[#1BD47B] text-[white] rounded w-[300px] h-[auto] BasicSubHolder  mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[white] text-[24px] pl-6 pt-8 ">Premium</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[white]  text-[18px] md:text-[18px] lg:text-[24px]">&#8358;60,000</span>
                                <span className="text-[#0A0B0D] text-[16px]"></span>/year
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
                                    <p className="pl-3 ">Share Stocks</p>
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Unlimited access to all stocks</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Access to more filters</p>
                                </li>

                                <li className="flex items-center">
                                    <FaCheckCircle fill="white" />
                                    <p className="pl-3">Access to Small Caps stocks</p>
                                </li>
                            </ul>
                            <div className="mt-10 md:mt-10 lg:mt-40 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                                <button
                                    className="w-[250px] md:w-[250px] lg:w-[250px] flex justify-around md:justify-around lg:justify-center shadow bg-[white] text-[#1BD47B] font-bold py-2 px-4 rounded"
                                    type="button">
                                        <Link to={"/payment"} state={{state: premiumYearly, priceId:"price_1M84HfE0pPf6mXoC84eKBtLB"}} className="flex">
                                    <span className='text-[#1F2226] text-[0.8em]'>Subscribe</span>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    <FaArrowRight className="w-3 mt-1 text-[#1F2226] h-3  ml-1" />
                                   </Link>
                                </button>
                            </div>
                        </div>
                        {/* second costing div ends here*/}

                        {/* Third costing div start from here*/}

                        <div className=" bg-white border-[1px] border-[rgba(141, 141, 141, 0.2)]  rounded w-[300px] h-[auto] BasicSubHolder mb-5 md:mb-5 lg:mb-0">
                            <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">Premium Max</p>
                            <h1 className="costHolder pl-0 md:pl-0 lg:pl-6">
                                <span className="text-[#1BD47B]  text-[18px] md:text-[18px] lg:text-[24px] pl-5 md:pl-5 lg:pl-0">&#8358;240,000</span>
                                <span className="text-[#0A0B0D] text-[16px]"></span>/year
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
                                    type="button">
                                        <Link to={"/payment"} state={{state: premiumMaxYearly,priceId:"price_1M84IIE0pPf6mXoCmgrhvn0L"}}>
                                    <span className='text-[black] text-[0.8em]'>Coming Soon</span>
                                    </Link>
                                    {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                    {/* <FaArrowRight className="w-3 mt-2 h-3  ml-1" /> */}
                                </button>
                            </div>
                        </div>
                        {/* Third costing div ends here*/}
                    </div>
                </div>
                : ""

    }

{/* subscription content details start here */}



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
