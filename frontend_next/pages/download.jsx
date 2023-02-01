/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout";
import lead from "../public/about/macbookpro.svg";
import download from "../assets/download/Vector.svg";
import download2 from "../assets/download/Vector (1).svg";
import bg from "../assets/download/bg.svg";

const Download = () => {
  return (
    <Layout>
      <div className="w-full md:flex justify-center items-center flex-col bg-[#F5F5F5]">
        <div className="md:flex px-[16px] w-full justify-center items-center bg-[#FFFFFF]">
          <div className="max-w-[1243px] w-full">
            <div className="md:flex items-center justify-around gap-[30px] py-[40px] md:py-[120px]">
              <div className="text-center md:w-1/2 md:text-left">
                <div className="flex justify-center gap-[5px] items-center text-[24px] mb-[16px] font-[600] md:block md:text-[50px]">
                  {/* <h1 >Yieldvest</h1>
                                    <h1 className="text-[#1F2226]">Desktop App</h1> */}
                  <h2>
                    Download the{" "}
                    <span className="text-[#1BD47B]">Yieldvest</span> Desktop
                    App
                  </h2>
                </div>

                <p className="text-[16px] text-[#545964] font-[400] mb-[16px]">
                  The fast, smart, and user-friendly Desktop Application with
                  powerful new features and an intuitive design to get latest
                  updates about stocks
                </p>
                <p className="text-[16px] text-[#545964] font-[400] ">
                  -Never loose charts
                </p>
                <p className="text-[16px] text-[#545964] font-[400] ">
                  -Zero popup ads
                </p>
                <p className="text-[16px] text-[#545964] font-[400] mb-[20px]">
                  -Faster navigation
                </p>
                <div className="hidden md:flex justify-start items-center gap-[8px]">
                  <a
                    href="#"
                    className="p-[8px] gap-[10px] flex rounded bg-black text-white items-center"
                  >
                    <img src={download2.src} alt="Windows" /> Windows download
                  </a>
                  <a
                    href="#"
                    className="p-[8px] gap-[10px] flex rounded bg-black text-white items-center"
                  >
                    <img src={download.src} alt="Mac" /> Mac Pc download
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center justify-center md:justify-end relative  p-4 h-auto">
                  <img
                    src={lead.src}
                    alt="Illustration"
                    className="mb-[16px] w-[334px] md:w-[90%] relative z-10"
                  />
                  <img
                    src={bg.src}
                    alt="Illustration"
                    className="absolute md:block right-0 w-[70%] bottom-0 z-1 top-0 hidden"
                  />
                </div>
                <div className="flex flex-col text-[8px] md:hidden justify-center items-center gap-[8px]">
                  <a
                    href="#"
                    className="gap-[10px] flex p-[8px] justify-center items-center rounded bg-black text-white"
                  >
                    <img src={download.src} alt="Windows" /> Windows download
                  </a>
                  <br />
                  <a
                    href="#"
                    className="gap-[10px] flex p-[8px] justify-center items-center rounded bg-black text-white"
                  >
                    <img src={download.src} alt="Mac" /> Mac Pc download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Download;
