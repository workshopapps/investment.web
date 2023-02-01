/* eslint-disable @next/next/no-img-element */
import React from "react";
import whoweareimg from "../../public/about/whoweareimg.svg";
import whatWeDo from "../../public/about/macbookpro.svg";
import WhyChooseUs from "../../public/about/whychooseus.svg";
import OurTeam from "./OurTeam";
import Image from "next/image";

export const Section = () => {
  return (
    <div id="services" data-testid="middle-section" className="w-full">
      <div
        id="gray"
        className="bg-[#FAFAFF] md:w-full flex justify-center items-center px-6 py-5 md:p-10  w-full"
      >
        <div
          id="white"
          className="w-full bg-[#FFFFFF] justify-center items-center mx-5 md:mx-[100px] flex-col gap-10 py-5 px-5 md:px-10 rounded-lg font-Hauora"
        >
          <div className="w-full gap-2 md:gap-10 md:flex justify-center items-center">
            <div className="md:w-1/2 md:flex-col">
              <h2 className="text-2xl text-[#455A64]  md:text-3xl text-center md:text-left md:py-[14px] block font-semibold">
                Who We Are
              </h2>
              {/* <img
                src={`/about/whoweAreImg.svg`}
                // src={whoWeAreImg.src}
                alt="Illustration"
                className="w-[560px] object-cover"
              /> */}
              <Image src={whoweareimg} alt="" />
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
          <div className="w-full gap-2 md:gap-10  md:px-4 my-20  md:flex justify-between items-center">
            <div className="md:w-1/2  my-6">
              <h2 className="text-2xl text-[#455A64]  md:text-3xl text-center md:text-left md:py-[14px] block font-semibold">
                What We Do
              </h2>
              <p className="text-sm md:text-base  font-normal text-[#8A8D95] leading-6">
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
            <div className="flex flex-col-reverse my-4 md:w-[534px] md:flex-col">
              <img
                src={whatWeDo.src}
                alt="Illustration"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* <div className="w-full gap-2 mt-10 md:mt-5 md:flex justify-center items-center"> */}
          <div
            id="WhyChooseUs"
            className="md:flex justify-center gap-[2%] w-full mt-8  md:py-10"
          >
            <div className="hidden md:block basis-[49%]">
              <img
                src={WhyChooseUs.src}
                alt="whyChooseUs-img"
                className="mt-5 md:w-[90%] "
              />
            </div>
            <div className="w-full basis-[49%]">
              <div className="w-full md:w-[250px] my-2">
                <h3 className="text-[#455A64] font-normal text-lg md:text-xl">
                  Stock recommendations
                </h3>
                <p className="text-sm md:text-sm font-normal mb-[2rem] text-[#8A8D95] md:w-[350px]">
                  Stock recommendations with listings of the top 12 stocks so
                  you know the best for you at first glance.
                </p>
              </div>
              <div className="w-full md:w-2/3 md:ml-[30%] my-2 md:mt-4">
                <h3 className="text-[#455A64] font-normal text-lg md:text-xl">
                  Stock Categories
                </h3>
                <p className="text-sm md:text-base font-normal mb-[2rem] text-[#8A8D95] md:w-[350px]">
                  Stock recommendations with listings of the top 12 stocks so
                  you know the best for you at first glance.
                </p>
              </div>
              <div className="w-full md:w-2/3 md:ml-[60%] md:mt-4">
                <h3 className="text-[#455A64] font-normal text-lg  md:text-xl">
                  Company Profile
                </h3>
                <p className="text-sm md:text-base font-normal text-[#8A8D95] mb-[2rem] md:w-[350px]">
                  Company overview, charts, and key metrics are provided to help
                  validate your decision.
                </p>
              </div>
              <div className="md:hidden">
                <img
                  src={WhyChooseUs.src}
                  alt="whyChooseUs-img"
                  className="mt-6 md:w-[564px]"
                />
              </div>
              <div className="md:hidden md:w-[564px]">
                <img
                  src={WhyChooseUs.src}
                  alt="Illustration"
                  className="mt-10 md:w-[564px]"
                />
              </div>
            </div>
          </div>
          {/* </div> */}
          <OurTeam />
        </div>
      </div>
    </div>
  );
};

export default Section;
