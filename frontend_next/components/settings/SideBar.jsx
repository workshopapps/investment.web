/* eslint-disable @next/next/no-img-element */
import { React, useContext } from "react";
import profileicon from "../../assets/settings/profileicon.svg";
import logouticon from "../../assets/settings/logouticon.svg";
import passwordicon from "../../assets/settings/passwordicon.svg";
import notificationicon from "../../assets/settings/notificationicon.svg";
import AuthContext from "../../components/auth/AuthContext";
import SidebarMobile from "./SidebarMobile";
import { useRouter } from "next/router";
import NavLink from "../Nav/NavLink";
import Link from "next/link";

const links = [
  {
    name: "My Account",
    icon: profileicon.src,
    link: "/settings",
  },

  {
    name: "Password",
    icon: passwordicon.src,
    link: "/settings/password",
  },
  {
    name: "Email Notifications",
    icon: notificationicon.src,
    link: "/settings/notifications",
  },
];

export default function Index() {
  const { logout } = useContext(AuthContext);
  const navigate = useRouter();

  const MenuOption = ({ link }) => {
    const isActive = navigate.pathname === link.link;
    const activeColor = "#0F7544";

    return (
      <NavLink
        href={link.link}
        key={link.name}
        className={`flex flex-row items-center w-full h-full hover:text-[${activeColor}]`}
      >
        <img
          src={link.icon}
          alt="settingsicon"
          className="w-5 h-5 "
          style={{
            filter: isActive
              ? "invert(35%) sepia(44%) saturate(810%) hue-rotate(99deg) brightness(91%) contrast(91%)"
              : "",
          }}
        />
        <h1
          className=" font-normal text-base md:flex ml-4 border-green-400"
          style={{ color: isActive ? activeColor : "black" }}
        >
          {link.name}
        </h1>
      </NavLink>
    );
  };

  return (
    <div className="flex pl-[0px] md:px-[200px] py-2 h-full bg-[ #FFFFFF]  ">
      <div className="flex flex-col  w-full border-b-2 border-[##D9D9D9]">
        <div className="flex flex-col w-full pl-4  md:pl-0 pt-7 pb-3">
          <div className="flex flex-row items-center w-full mb-2">
            <span className="flex text-[#0A0B0D] font-normal text-xl md:text-3xl ml-4 mb-5">
              Settings
            </span>
            <div className="flex md:hidden w-auto  mt-[60px]">
              <SidebarMobile />
            </div>
            <Link
              href="/"
              className="flex md:hidden flex-row items-center  h-full  text-base font-semibold ml-auto pr-4"
            >
              <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
              <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
                Logout
              </h1>
            </Link>
          </div>
          <div className="flex w-full ">
            <div className="flex flex-row w-2/5 md:w-full">
              <div className="hidden md:flex h-full  w-3/5 font-semibold text-base text-black">
                {links.map((link, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <MenuOption link={link} key={link.name} />
                ))}
              </div>
              <div
                onClick={() => {
                  logout();
                  navigate.push("/");
                }}
                className="hidden md:flex  flex-row items-center  h-full  text-base font-semibold ml-[240px]"
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src={logouticon.src}
                  alt="settingsicon"
                  className="w-5 h-5"
                />
                <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
                  Logout
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
