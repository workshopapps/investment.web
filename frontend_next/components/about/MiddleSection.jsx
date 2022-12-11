/* eslint-disable @next/next/no-img-element */
import React from "react";
import img0 from "../../assets/about/vline.png";
import img1 from "../../assets/about/line.png";
import img2 from "../../assets/about/desk-frame1.png";
import img3 from "../../assets/about/tick-circle.png";
import img4 from "../../assets/about/mobile.svg";
import whoWeAreImg from "../../assets/about/whoWeAreImg.svg";
import whatWeDo from "../../assets/about/WhatWeDo.svg";
import WhyChooseUs from "../../assets/about/whyChooseUs.svg";

export const Section = () => {
  return (
    <div id="services" data-testid="middle-section">
      <div id="gray" className="bg-[#D9D9D9] p-5 md:p-10 w-full">
        <div
          id="white"
          className="w-full bg-[#FFFFFF] mx-auto flex-col gap-14 p-3 md:p-12"
        >
          <div className="w-full gap-2  md:p-6  md:flex justify-center items-center">
            <div className="md:w-1/2 md:flex-col">
              <h2 className="text-2xl text-[#455A64]  md:text-3xl text-center md:text-left md:py-[14px] block font-semibold">
                Who we are
              </h2>
              <img src={whoWeAreImg.src} className="w-[560px]" />
            </div>
            <div className="md:w-1/2">
              <div>
                <h3 className="text-[#455A64] font-normal py-2 text-lg md:text-2xl">
                  Mission
                </h3>
                <p className="text-sm md:text-base font-normal text-[#8A8D95]">
                  To enable investors, both newbies and seasoned alike, to make
                  well-informed stock investment decisions that will yield great
                  ROI without the stress that comes with investing.
                </p>
              </div>
              <div>
                <h3 className="text-[#455A64] font-normal text-lg py-2 md:text-2xl">
                  Vision
                </h3>
                <p className="text-sm md:text-base font-normal text-[#8A8D95]">
                  To be the go-to platform for prospective investors to know
                  what stocks to buy. We do this by providing them with
                  well-curated information that will help them make smarter
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full gap-2 md:p-6  md:flex justify-center items-center">
            <div className="md:w-1/2">
              <h3 className="text-[#455A64] font-normal text-lg py-2 md:text-2xl">
                What we do
              </h3>
              <p className="text-sm md:text-base font-normal text-[#8A8D95] md:w-[615px] leading-6">
                We saw that most stock investment analysis tools are not
                user-friendly and quite daunting. Therefore we decided to create
                an analysis tool with the customer in mind. Our desire to aid
                users in making smart investment decisions without all the
                complications associated with other analysis tools. So we
                created Yieldvest, an analysis tool with a difference. Yieldvest
                is straightforward and simple to use, and more importantly, you
                can get the useful information you need to make smart investment
                decisions at first glance.
              </p>
            </div>
            <div className="flex flex-col-reverse my-6 md:w-1/2 md:flex-col">
              <img src={whatWeDo.src} className="w-[424px] md:w-[560px]" />
            </div>
          </div>
          <h3 className="text-[#455A64] text-center font-normal ml-[0px] text-lg py-2 md:text-2xl">
              Why Choose Us
            </h3>
          <div
            id="WhyChooseUs"
            className="w-full md:w-[1200px] bg-blue-300 gap-2  md:p-6  md:flex justify-center items-center"
          >
            
            <div className="md:flex-col md:w-564px">
              <img src={WhyChooseUs.src} className="w-[424px] md:w-[564px]" />
            </div>
            <div>
              <div>
                <h3 className="text-[#455A64] font-normal text-sm py-2 md:text-xl">
                  Stock recommendations
                </h3>
                <p className="text-sm md:text-base font-normal text-[#8A8D95] md:w-[615px]">
                  Stock recommendations with listings of the top 12 stocks so
                  you know the best for you at first glance.
                </p>
              </div>
              <div>
                <h3 className="text-[#455A64] font-normal text-sm py-2 md:text-xl">
                  Stock Categories
                </h3>
                <p className="text-sm md:text-base font-normal text-[#8A8D95] md:w-[615px]">
                  Stock recommendations with listings of the top 12 stocks so
                  you know the best for you at first glance.
                </p>
              </div>
              <div>
                <h3 className="text-[#455A64] font-normal text-sm py-2 md:text-xl">
                  Company Profile
                </h3>
                <p className="text-sm md:text-base font-normal text-[#8A8D95] md:w-[615px]">
                  Company overview, charts, and key metrics are provided to help
                  validate your decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
