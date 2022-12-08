import React from "react";
import Layout from "../components/Layout";
import { BiChevronRight } from "react-icons/bi";
import UpIcon from "../assets/landingPage/icons/up.svg";
import DownIcon from "../assets/landingPage/icons/down.svg";
import shareIcon from "../assets/company-profile/share.svg";
import rankIcon2 from "../assets/company-profile/ranked.svg";
import arrow2 from "../assets/company-profile/arrow-2.svg";
import arrowup from "../assets/company-profile/arrow-up.svg";
import arrowdown from "../assets/company-profile/arrow-down.svg";
import Link from "next/link";
import Head from "next/head";
const history = () => {
  return (
    <Layout>
      <Head>
        <title> Stock Fundamentals</title>
        <meta
          name="description"
          content="Get up to date recommendations on the best stocks to buy"
        />
      </Head>
      <div className="bg-[#F5F5F5] h-full">
        <Link href="/">
          <div className="flex mt-0 pt-5 text-[#525A65] text-sm md:text-md mx-[1em] md:mx-[100px]">
            Stock <span className="inline-flex mx-2 ">&gt; </span>Company
            Profile <span className="inline-flex mx-2 ">&gt; </span> Ranking
          </div>
        </Link>
        <div className="flex flex-col md:flex-col md:px-[100px] px-[1rem] gap-5 ">
          <div className="w-full flex flex-row justify-between">
            <div>
              <h3 className="text-2xl md:text-2xl text-[#5C5A5A] pt-10">
                Ranking
              </h3>
              <p className="text-xl md:text-1xl text-[#5C5A5A] pt-0">
                company name
              </p>
            </div>

            <div className="flex flex-row mt-auto gap-2 ">
              <Link
                href={`/company/history`}
                className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md bg-[#66E2A7]"
              >
                <span className="hidden md:block">View Ranking History </span>
                <img
                  className="m-auto w-[10em] md:w-auto h-10 md:h-auto bg-[none]"
                  src={rankIcon2.src}
                  alt="open"
                />
              </Link>
              <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md">
                <span className="hidden md:block">Share This Stock </span>
                <img
                  className="m-auto w-[10em] md:w-auto h-10 md:h-auto bg-none"
                  src={shareIcon.src}
                  alt="open"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] w-[90%] m-auto">
          <button className="md:px-6 px-3 py-2 rounded mx-4 bg-[#66E2A7]">
            market cap
          </button>
          <button className="md:px-6 px-3 py-2 rounded mx-4 bg-white">
            sector
          </button>
          <button className="md:px-6 px-3 py-2 rounded mx-4 bg-white">
            industry
          </button>
        </div>
        <div className="py-[3rem] ">
          <div className="w-[90%] m-auto">
            <p>
              Note: The ranking below is the position a stock closes on daily.
            </p>
            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <p>
                <img src={arrow2.src} alt="" />
              </p>
              <p>Ranked 4th</p>
            </div>

            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <img src={arrowdown.src} alt="" />
              <p>Ranked 4th</p>
            </div>
            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <img src={arrow2.src} alt="" />
              <p>Ranked 4th</p>
            </div>
            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <img src={arrowup.src} alt="" />
              <p>Ranked 4th</p>
            </div>
            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <img src={arrowup.src} alt="" />
              <p>Ranked 4th</p>
            </div>
            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <img src={arrow2.src} alt="" />
              <p>Ranked 4th</p>
            </div>
            <div className="flex justify-between p-2 bg-white my-[1rem] rounded">
              <p>DEc 12</p>
              <img src={arrowdown.src} alt="" />
              <p>Ranked 4th</p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p>prev</p>
            <p className="bg-[#66E2A7] inline p-3 rounded mx-1">1 of 5</p>
            <p>next</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default history;
