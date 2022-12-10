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
    <div className="absolute inset-0 flex justify-center items-center">
      <div
        className="z-[999999999] bg-white w-[183px] p-[20px] text-white rounded-[8px]"
        onClick={() => close(false)}
      >
        <div className="flex flex-col gap-[31px]">
          <WhatsappShareButton
            url={url}
            title={`Hey 👋
                    I found this interesting stock on Yieldvest, check it out!
                    Link: ${currentStock}`}
            className="w-full"
          >
            <div className="flex justify-start items-center gap-[12px]">
              <IoLogoWhatsapp className="text-[#40C351] text-[32px]" />
              <span className="text-black">Whatsapp</span>
            </div>
          </WhatsappShareButton>
          <TwitterShareButton
            url={url}
            className="w-full"
            title={`Hey 👋
                    I found this interesting stock on Yieldvest, check it out!
                     Link ${currentStock}`}
          >
            <div className="flex justify-start items-center gap-[12px]">
              <IoLogoTwitter className="text-[#03A9F4] text-[32px]" />
              <span className="text-black">Twitter</span>
            </div>
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            className="w-full"
            title={`Hey 👋
                    I found this interesting stock on Yieldvest, check it out!
                     Link ${currentStock}`}
          >
            <div className="flex justify-start items-center gap-[12px]">
              <IoLogoLinkedin className="text-[#0288D1] text-[32px]" />
              <span className="text-black">LinkedIn</span>
            </div>
          </LinkedinShareButton>
          <button
            className="flex justify-start items-center gap-[12px] w-full"
            onClick={() => {
              navigator.clipboard.writeText(currentStock);
              toast.success("Copied to clickboard");
            }}
          >
            <IoMdCopy className="text-black text-[32px]" />
            <span className="text-black">Copy Link</span>
          </button>
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
