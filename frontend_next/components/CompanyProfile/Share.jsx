/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMdCopy,
} from "react-icons/io";
import {
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "next-share";
import Tippy from '@tippyjs/react';
import Cancel from "../../assets/cancel.svg";
import 'tippy.js/dist/tippy.css';
import { toast } from "react-toastify";


const Share = ({ close, currentStock }) => {
  const url = "https://yieldvest.hng.tech";
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <div
        className="z-[999999999] relative"
        onClick={() => close(false)}
      >
        <div className="ml-[23em] md:ml-[30em] mb-1 align-right">
          <div
            onClick={() => close(false)}
            className="w-8 h-8 flex justify-center items-center bg-white border-[#545964] text-[#545964] border rounded-full cursor-pointer">
            &times;
          </div>
        </div>
        <div className="flex flex-col bg-white mx-auto w-[90%] md:w-[32em] p-4 md:p-10 md:pb-12 rounded-[8px] text-primaryGray font-HauoraBold gap-4">

          <div className="text-md md:text-lg w-full text-center">Share This Stock</div>

          <div className="flex flex-row justify-center gap-8">
            <WhatsappShareButton
              url={url}
              title={`Hey 👋
                        I found this interesting stock on Yieldvest, check it out!
                        Link: ${currentStock}`}
              className="w-full"
            >
              <div className="flex justify-start border border-[#A3AAB2] p-[1em] rounded-[50%] items-center">
                <IoLogoWhatsapp className="text-[#40C351] text-lg md:text-2xl" />
              </div>
            </WhatsappShareButton>
            <TwitterShareButton
              url={url}
              className="w-full"
              title={`Hey 👋
                        I found this interesting stock on Yieldvest, check it out!
                         Link ${currentStock}`}
            >
              <div className="flex justify-start border border-[#A3AAB2] p-[1em] rounded-[50%] items-center">
                <IoLogoTwitter className="text-[#03A9F4] text-lg md:text-2xl" />
              </div>
            </TwitterShareButton>
            <LinkedinShareButton
              url={url}
              className="w-full"
              title={`Hey 👋
                        I found this interesting stock on Yieldvest, check it out!
                         Link ${currentStock}`}
            >
              <div className="flex justify-start border border-[#A3AAB2] p-[1em] rounded-[50%] items-center">
                <IoLogoLinkedin className="text-[#0288D1] text-lg md:text-2xl" />
              </div>
            </LinkedinShareButton>
          </div>

          <div className="text-xs md:text-md mt-2 w-full text-center">Or copy link</div>

          <div className="flex flex-row align-middle border border-[#545964] p-2 rounded-lg justify-between text-primaryGray text-xs gap-2">
            <span className="py-2">
              {currentStock}
            </span>
            <button
              className="bg-primary102 text-primary104 rounded-lg px-4 py-2"
              onClick={() => {
                navigator.clipboard.writeText(currentStock);
                toast.success("Copied to clipboard");
              }}
            >
              Copy Link
            </button>
          </div>

        </div>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-60 z-[99999999]"
        onClick={() => close(false)}
      ></div>
    </div>
  );
};

export default Share;
