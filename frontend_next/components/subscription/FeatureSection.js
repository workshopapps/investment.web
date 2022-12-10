/* eslint-disable @next/next/no-img-element */
import React from "react";
import Icon1 from "../../assets/subscriptionPage/images/icon1.svg";
import Icon2 from "../../assets/subscriptionPage/images/icon7.svg";
import Icon3 from "../../assets/subscriptionPage/images/icon9.svg";
import Icon4 from "../../assets/subscriptionPage/images/icon4.svg";
import Icon5 from "../../assets/subscriptionPage/images/icon5.svg";
import Icon6 from "../../assets/subscriptionPage/images/icon6.svg";

const FeatureSection = () => {
  return (
    <div className="w-full h-auto flex justify-center bottomHolder mt-16 py-20 bg-[#FBFBFB] font-Hauora">
      <div className="w-[80%]">
        <div className="w-[100%] md:w-[100%] lg:w-[60%]">
          <h1 className="text-[#1BD47B] pb-6">Features</h1>
          <h1 className="text-2xl md:text-5xl pb-6">
            Analytics To Help You Invest Smarter
          </h1>
          <p className="text-[#0A0B0D] pb-6">
            Subscribe to enjoy unlimited access to our stock analysis, with 24/7 customer support and assistance. You can rest while we perform fundamental analysis for all stocks, to give you the valuation of the most recommended stocks.
          </p>
        </div>
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20">
          <div>
            <div className="h-10 w-10 rounded-full bg-primaryGray flex justify-center items-center">
              {/* <FaWeixin fill="white" /> */}
              <img src={Icon1.src} alt="icon1" />
            </div>
            <h1 className="mt-2 py-2">Company stock fundamentals</h1>
            <p className="text-[#0A0B0D] py-2">
              To help you forecast more accurately, we give you charts showing how the company’s stock has performed over the last 5 years.
            </p>
          </div>

          <div>
            <div className="h-10 w-10 rounded-full bg-primaryGray flex justify-center items-center">
              <img src={Icon4.src} alt="icon2" />
            </div>
            <h1 className="mt-2 py-2">Analytics</h1>
            <p className="text-[#0A0B0D] py-2">
              Our optimised analytics tool does fundamental analysis and saves you the stress of doing research and going through tons of financial statements.
            </p>
          </div>

          <div>
            <div className="h-10 w-10 rounded-full bg-primaryGray flex justify-center items-center">
              <img src={Icon5.src} alt="icon3" />
            </div>
            <h1 className="mt-2 py-2">Unlimited stock categories</h1>
            <p className="text-[#0A0B0D] py-2">
              Access a wide variety of stocks for companies based on different categories like market cap, industries, sectors, and more, to suit your investment goals.
            </p>
          </div>

          <div>
            <div className="h-10 w-10 rounded-full bg-primaryGray flex justify-center items-center">
              <img src={Icon6.src} alt="icon3" />
            </div>
            <h1 className="mt-2 py-2"> Never miss an update</h1>
            <p className="text-[#0A0B0D] py-2">
              Get Email Notifications when a new stock is added to the list of
              recommended stocks.
            </p>
          </div>

          <div>
            <div className="h-10 w-10 rounded-full bg-primaryGray flex justify-center items-center">
              <img src={Icon3.src} alt="icon4" />
            </div>
            <h1 className="mt-2 py-2">View ranking history</h1>
            <p className="text-[#0A0B0D] py-2">
              Our tool shows you how well a stock has performed on our platform by giving you the ranking history of all companies that have made it to the top of the list.
            </p>
          </div>

          <div>
            <div className="h-10 w-10 rounded-full bg-primaryGray flex justify-center items-center">
              <img src={Icon2.src} alt="icon5" />
            </div>
            <h1 className="mt-2 py-2">Save your favourite stocks</h1>
            <p className="text-[#0A0B0D] py-2">
              You can add a stock to your watchlist so you can look at it later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
