import Link from "next/link";
import React from "react";

const AboutNav = () => {
  return (
    <div
      data-testid="about-nav"
      className="flex justify-between bg-white p-5 md:pl-[50px] md:pr-[50px] text-xs md:text-sm lg:pl-[100px] lg:pr-[100px] md:hidden"
    >
      <div className="space-x-2">
        <span className="font-bold text-[#605E5E]">
          <Link href="/">Home</Link>
        </span>{" "}
        /
        <span className="font-bold text-[#605E5E]">
          <Link href="#home">About Us</Link>
        </span>
      </div>
      <div className=" space-x-2 md:space-x-9">
        <Link
          className="hover:border-b-2 font-bold text-[#605E5E] hover:border-[#1BD47B] pb-1"
          smooth
          href="#services"
        >
          Our Services
        </Link>
        <Link
          className="hover:border-b-2 font-bold text-[#605E5E] hover:border-[#1BD47B] pb-1 hidden"
          smooth
          href="#team"
        >
          Our Team
        </Link>
      </div>
    </div>
  );
};

export default AboutNav;
