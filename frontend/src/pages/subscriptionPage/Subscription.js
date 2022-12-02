/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import '../../assets/subscriptionPage/css/style.css';
import Spring from '../../assets/subscriptionPage/images/spring.png';
import { freeMonthly, premiumMonthly, freeYearly, premiumYearly } from './SubscriptionContent';
import PageLayout from '../layout';
import FeatureSection from '../../components/subscription/FeatureSection';
import SubscribeCard from '../../components/subscription/PlanCard';


const Subscription = () => {

    // state to set change the type of subscription yearly or monthly

    const [subType, setSubType] = useState(1);


    // handles chnaing from monthly subscription to yearly Subscription
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
        <PageLayout>
            <div className="w-full mt-10 md:mt-20 flex justify-center items-center text-center topContentHolder font-HauoraBold">
                <div className="lg:w-[55%] w-[90%] mx-0 md:mx-auto">
                    <h1 className="text-md md:text-4xl lg:text-5xl tracking-widest my-5 pr-2 ">
                        Get started with <span className="text-[#1BD47B] ">MyStockPlug</span> by
                        subscribing to one of our plans
                    </h1>
                </div>
                <div className="ml-2 md:ml-10">
                    <img src={Spring} alt="curly-spring" className="w-6 md:w-12 h-8 md:h-14 ml-6 md:ml-0 mt-0 md:mt-6 curlySpring" />
                </div>
            </div>

            {/* subscription type button starts from here */}
            <div className="w-full flex justify-center mt-10 mb-10 ">
                <div className="inline-flex bg-[#F6F5FF] p-2 text-sm rounded font-HauoraLight">
                    <button className={subType === 1 ? `bg-[#333946] text-white py-2 px-8 rounded-l ` : ` hover:bg-gray-400 text-gray-800 font-bold py-2 px-8  rounded-l `} onClick={() => handleSubType('monthly')}>
                        Monthly
                    </button>
                    <button className={subType === 2 ? `bg-[#333946] text-white py-2 px-8 rounded-r ` : `hover:bg-gray-400 text-gray-800 font-bold py-2 px-8  rounded-r`} onClick={() => handleSubType('yearly')}>
                        Annually

                    </button>
                </div>
            </div>
            {/* subscription type button ends here */}



            {/* subscription content details start here */}

            {subType === 1 ? <div className="w-full flex justify-center font-Hauora">
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-center mx-10 md:mx-[100px] lg:mx-[20em] p-0 md:px-[2em] w-full">

                    <SubscribeCard
                        name="Basic"
                        price="0.00"
                        type="month"
                        target="For Basic Users"
                        priceId="price_1M84ELE0pPf6mXoCmP61VmyL"
                        features={["Stock Information", "Share a stock", "Company Fundamentals", "Access to only 12 stock recommendation"]}
                        payload={freeMonthly}
                        mode="primary"
                        buttonText="Subscribe"
                    />


                    <SubscribeCard
                        name="Standard"
                        price="5,000"
                        type="month"
                        target="For Power Users"
                        priceId="price_1M84FHE0pPf6mXoCaZEdZHgv"
                        features={["Unlimited stock recommendation", "Share a stock", "Add to watchlist", "Email notifications", "Access to small cap stocks"]}
                        payload={premiumMonthly}
                        mode="primary"
                        buttonText="Subscribe"
                    />



                </div>
            </div> : subType === 2 ?

                <div className="w-full flex justify-center font-Hauora">
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center mx-0 md:mx-[100px] p-0 md:p-[2em] w-full">

                        <SubscribeCard
                            name="Basic"
                            price="0.00"
                            type="year"
                            target="For Basic Users"
                            priceId="price_1M84H0E0pPf6mXoC4hpx6xfA"
                            features={["Stock Information", "Share Stocks", "Access to Only 12 stocks"]}
                            payload={freeYearly}
                            mode="primary"
                            buttonText="Subscribe"
                        />


                        <SubscribeCard
                            name="Standard"
                            price="60,000"
                            type="year"
                            target="For Power Users"
                            priceId="price_1M84H0E0pPf6mXoC4hpx6xfA"
                            features={["Stock Information", "Share Stocks", "Unlimited access to all stocks", "Access to more filters", "Access to Small Caps stocks"]}
                            payload={premiumYearly}
                            mode="secondary"
                            buttonText="Subscribe"
                        />


                    </div>
                </div>
                : ""

            }

            {/* subscription content details start here */}


            <FeatureSection />

        </PageLayout>
    );
};

export default Subscription;
