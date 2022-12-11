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
      <div id="gray" className="bg-[#D9D9D9] p-10 w-full">
        <div id="white" className="w-full bg-[#FFFFFF] gap-14 p-12">
          <div className="w-full gap-4 p-5  md:flex justify-center items-center">
            <div className="w-1/2 md:flex-col">
              <h2 className="text-3xl font-semibold">Who we are</h2>
              <img src={whoWeAreImg.src} className="w-[560px]" />
            </div>
            <div className="w-1/2">
              <div>
                <h3>Mission</h3>
                <p>
                  To enable investors, both newbies and seasoned alike, to make
                  well-informed stock investment decisions that will yield great
                  ROI without the stress that comes with investing.
                </p>
              </div>
              <div>
                <h3>Vision</h3>
                <p>
                  To be the go-to platform for prospective investors to know
                  what stocks to buy. We do this by providing them with
                  well-curated information that will help them make smarter
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <div id="whatWeDo" className="md:w-full mx-auto md:flex">
            <div className="w-1/2">
              <h3 className="font-semibold text-3xl">What we do</h3>
              <p>
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
            <div className="w-1/2">
              <img src={whatWeDo.src} className="w-[424px]" />
            </div>
          </div>
          <div id="WhyChooseUs" className="md:flex">
            <div>
              <img src={WhyChooseUs.src} />
            </div>
            <div>
            <h3>Why Choose Us</h3>
              <div>
                <h3>Stock recommendations</h3>
                <p>Stock recommendations with listings of the top 12 stocks so you know the best for you at first glance.</p>
              </div>
              <div>
                <h3>Stock Categories</h3>
                <p>Stock recommendations with listings of the top 12 stocks so you know the best for you at first glance.</p>
              </div>
              <div>
                <h3>Company Profile</h3>
                <p>Company overview, charts, and key metrics are provided to help validate your decision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
