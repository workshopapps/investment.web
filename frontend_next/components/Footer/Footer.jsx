/* eslint-disable @next/next/no-img-element */
import React from "react";
import downloadImage from "../../assets/index/footer-download.svg";
import footerLogo from "../../assets/footer/footerLogo.png";
import reddit from "../../assets/footer/reddit.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import twitter from "../../assets/footer/twitter.svg";
import NavLinks from "./NavLinks";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const pathname = useRouter().pathname;

  const navItems = [
    {
      name: "Get To Know Us",
      navLinks: [
        { link: "About Yieldvest", to: "/about" },
        { link: "Pricing", to: "/subscription" },
        { link: "Contact Us", to: "/contact" },
      ],
    },
    {
      name: "Support",
      navLinks: [
        { link: "How it works", to: "/how-it-works" },
        { link: "Directory", to: "/directory" },
        { link: "Help", to: "/help" },
      ],
    },
    {
      name: "Legal",
      navLinks: [
        { link: "Terms of Use", to: "/terms" },
        { link: "Privacy Policy", to: "/policy" },
        { link: "Cookies Policy", to: "/cookies" },
      ],
    },
  ];

  const footerStyle = {
    background: "#000718",
    color: "white",
  };
  return (
    <footer
      style={footerStyle}
      className="lg:px-[100px] p-6 flex flex-col items-center justify-center w-full"
    >
      <div className="flex w-full flex-wrap justify-between items-start gap-8  pb-12 mb-8 md:mt-12">
        <div>
          <div className="w-60 flex items-center text-2xl pb-8 md:pb-0 mb-[35px] lg:mb-0">
            <img src={footerLogo.src} alt="" />

            <p className="font-bold ml-2 text-[#1BD47B]">Yieldvest</p>
          </div>
          <div
            className={`${
              pathname !== "/download"
                ? "hidden lg:flex pt-4 mb-[66px]"
                : "hidden"
            }`}
          >
            <Link href="/download">
              <img
                src={downloadImage.src}
                alt="download-image"
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <Link href="https://twitter.com/YieldVest">
              <img
                src={twitter.src}
                alt="twitter"
                className="hover:scale-[150%] transition duration-500"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/yieldvest/">
              <img
                src={linkedin.src}
                alt="linkedin"
                className="hover:scale-[150%] transition duration-500"
              />
            </Link>
            <Link href="https://www.reddit.com/user/Yieldvest">
              <img
                src={reddit.src}
                alt="reddit"
                className="hover:scale-[150%] transition duration-500"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-start flex-wrap gap-8 max-w-2xl w-full">
          {navItems.map((item, index) => {
            const { name, navLinks } = item;
            return (
              <div key={index} className="w-36">
                <p
                  className="mb-8"
                  style={{ fontWeight: 700, fontSize: "18px" }}
                >
                  {name}
                </p>
                <NavLinks navLinks={navLinks} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center border-t-[2px] w-full border-white pt-[18px]">
        {" "}
        {new Date().getFullYear()} Yieldvest{" "}
      </div>
    </footer>
  );
};

export default Footer;
