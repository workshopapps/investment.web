/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import profileicon from "../../assets/settings/profileicon.svg";
import { IoIosArrowDown } from "react-icons/io";
import passwordicon from "../../assets/settings/passwordicon.svg";
import notificationicon from "../../assets/settings/notificationicon.svg";
import Link from "next/link";

const Menulinks = [
  {
    name: "Password",
    icon: passwordicon,
    link: "/settings/password",
  },
  {
    name: "Email Notifications",
    icon: notificationicon,
    link: "/settings/notifications",
  },
];

const SidebarMobile = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        className={
          dropdown
            ? "flex items-center bg-[#1BD47B] w-[250px] px-[30px] py-[12px]"
            : "flex items-center w-[250px] px-[30px] py-[12px]"
        }
        onClick={() => setDropdown(!dropdown)}
      >
        <img src={profileicon.src} alt="profileicon" className="w-5 h-5" />
        <Link href="/settings" className="font-normal text-base ml-4">
          My Account
        </Link>
        {/* <h1 className="font-normal text-base md:flex ml-4 border-green-400">My Account</h1> */}
        <IoIosArrowDown className="ml-5" />
      </div>
      {dropdown && (
        <ul className="absolute bottom-[-110px] bg-white shadow-md flex flex-col gap-[16px] w-[250px]">
          {Menulinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                className="px-[30px] py-[12px] hover:bg-[#1BD47B] inline-block w-full"
              >
                <div className="flex">
                  <img
                    src={link.icon.src}
                    alt="settingsicon"
                    className="w-5 h-5 "
                  />
                  <h1 className=" font-normal text-base md:flex ml-4 border-green-400">
                    {link.name}
                  </h1>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarMobile;
