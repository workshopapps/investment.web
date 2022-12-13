/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "../../assets/subscriptionPage/css/style.module.css";
import Spring from "../../assets/subscriptionPage/images/spring.png";
import Layout from "../../components/Layout";
import FeatureSection from "../../components/subscription/FeatureSection";
import SubscribeCard from "../../components/subscription/PlanCard";
import Head from "next/head";
import AuthContext from "../../components/auth/AuthContext";
import { subscriptionData } from "../../store/subscriptionData/subData";

const Subscription = () => {
  // state to set change the type of subscription yearly or monthly
  const [subType, setSubType] = useState(1);
  const { isLoggedIn, subscription } = React.useContext(AuthContext);

  // handles chnaing from monthly subscription to yearly Subscription
  const handleSubType = (theSub) => {
    if (theSub === "monthly") {
      setSubType(1);
    }

    if (theSub === "yearly") {
      setSubType(2);
    }
  };

  const hasActiveSubscription = () => {
    console.log(isLoggedIn);
    console.log(subscription);
    return isLoggedIn && subscription && subscription.isActive;
  };

  return (
    <Layout>
      <Head>
        <title>Yieldvest - Subscription</title>
      </Head>

      <div className="w-full mt-10 md:mt-20 flex justify-center items-center text-center topContentHolder font-Hauora">
        <div className="lg:w-[60%] w-[80%] mx-0 md:mx-auto">
          <h1 className="text-xl md:text-4xl lg:text-5xl  my-5 pr-2 ">
            Get started with <span className="text-[#1BD47B] ">Yieldvest</span>{" "}
            by subscribing to one of our plans
          </h1>
        </div>
        <div className="hidden ml-2 md:ml-10">
          <img
            src={Spring.src}
            alt="curly-spring"
            className="w-6 md:w-12 h-8 md:h-14 ml-6 md:ml-0 mt-0 md:mt-6 curlySpring"
          />
        </div>
      </div>

      {/* subscription type button starts from here */}
      <div className="w-full flex justify-center mt-10 mb-10 ">
        <div className="inline-flex bg-[#F6F5FF] p-2 text-sm rounded font-HauoraLight">
          <button
            className={
              subType === 1
                ? `bg-[#333946] text-white py-2 px-8 rounded-l `
                : ` hover:bg-gray-400 text-gray-800 transition duration-500 font-bold py-2 px-8  rounded-l `
            }
            onClick={() => handleSubType("monthly")}
          >
            Monthly
          </button>
          <button
            className={
              subType === 2
                ? `bg-[#333946] text-white py-2 px-8 rounded-r `
                : `hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 transition duration-500 rounded-r`
            }
            onClick={() => handleSubType("yearly")}
          >
            Annually
          </button>
        </div>
      </div>
      {/* subscription type button ends here */}

      {/* subscription content details start here */}
      {subType === 1 ? (
        <div className="w-full flex justify-center font-Hauora">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center mx-10 md:mx-[80px] lg:mx-[5em] p-0 md:px-[2em] w-full gap-10 transition duration-500">
            <SubscribeCard
              name="Basic"
              price=""
              discount="0.00"
              type="month"
              target={subscriptionData["Basic"]["target"]}
              features={subscriptionData["Basic"]["features"]}
              buttonText={isLoggedIn ? "Continue" : "Get Started"}
              content="For Basic Users new to investing. Get access to our basic features and invest with more precision"
              destination={isLoggedIn ? "/" : "/signup"}
            />

            <SubscribeCard
              name="Pro"
              price="50"
              discount="25"
              type="month"
              target={subscriptionData["Pro"]["target"]}
              features={subscriptionData["Pro"]["features"]}
              buttonText="Subscribe"
              content="For Pro Users new . Get access to our Pro features and invest with more precision"
              destination={hasActiveSubscription() ? "/settings" : "/payment"}
            />

            <SubscribeCard
              name="Premium"
              price="100"
              discount="50"
              type="month"
              target={subscriptionData["Premium"]["target"]}
              features={subscriptionData["Premium"]["features"]}
              buttonText="Subscribe"
              content="For Premium Users new . Get access to our Premium features and invest with more precision"
              destination={hasActiveSubscription() ? "/settings" : "/payment"}
            />
          </div>
        </div>
      ) : subType === 2 ? (
        <div className="w-full flex justify-center font-Hauora">
          <div className="grid grid-cols-1 md:grid-cols-auto lg:grid-cols-3 place-items-center mx-10 md:mx-[80px] lg:mx-[5em] p-0 md:px-[2em] w-full gap-10">
            <SubscribeCard
              name="Basic"
              price=""
              discount="0.00"
              type="year"
              target={subscriptionData["Basic"]["target"]}
              features={subscriptionData["Basic"]['features']}
              buttonText={hasActiveSubscription() ? "Continue" : "Get Started"}
              content="For Basic Users new to investing. Get access to our basic features and invest with more precision"
              destination={hasActiveSubscription() ? "/" : "/signup"}
            />

            <SubscribeCard
              name="Pro"
              price="600"
              discount="300"
              type="year"
              target={subscriptionData["Pro"]["target"]}
              features={subscriptionData["Pro"]['features']}
              buttonText="Subscribe"
              content="For Pro Users new . Get access to our Pro features and invest with more precision"
              destination={hasActiveSubscription() ? "/settings" : "/payment"}
            />

            <SubscribeCard
              name="Premium"
              price="1200"
              discount="600"
              type="year"
              target={subscriptionData["Premium"]["target"]}
              features={subscriptionData["Premium"]['features']}
              buttonText="Subscribe"
              content="For Premium Users new . Get access to our Premium features and invest with more precision"
              destination={hasActiveSubscription() ? "/settings" : "/payment"}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <FeatureSection />
    </Layout>
  );
};

export default Subscription;
