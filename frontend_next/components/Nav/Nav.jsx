/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Logo from "../../assets/header/logo.svg";
import MenuLinks from "./MenuLinks";
import Menu from "../../assets/header/menu.svg";
import AuthContext from "../auth/AuthContext";
import UserAvatar from "./UserAvatar";
import { useRouter } from "next/router";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const Nav = ({ openMenu }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navStyle = {
    background: "#000718",
    color: "white",
  };
  const loginStyle = {
    padding: "12px 16px",
    border: "none",
    display: "inline-block"
  };
  const btnStyle = {
    background: `#1BD47B`,
    padding: "12px 16px",
    border: "none",
    borderRadius: "8px",
    display: "inline-block",
  };

  const navigate = useRouter();

  return (
    <nav
      style={navStyle}
      className="flex justify-center items-center h-[78px] px-[16px] lg:px-[100px] fixed top-0 left-0 right-0 z-[100]"
    >
      <div className="w-full flex items-center justify-between">
        <div
          onClick={() => navigate.push("/")}
          className="cursor-pointer flex items-center text-2xl"
        >
          <img src={Logo.src} alt="" />
          <p className="text-[#1BD47B] font-bold ml-2">Yieldvest</p>
        </div>
        <MenuLinks />
        {!isLoggedIn && (
          <div className=" justify-between items-center nav-btns hidden md:flex">
            <Link href="/login">
              <button
                type="button"
                style={loginStyle}
                className="rounded text-white hover:text-[#1BD47B] transition duration-500"
              >
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button
                type="button"
                style={btnStyle}
                className="rounded text-[#1F2226] font-normal hover:scale-90 transition duration-500"
              >
                Get Started
              </button>
            </Link>
          </div>
        )}
        <div
          className="ham-menu block md:hidden"
          onClick={() => openMenu(true)}
        >
          <img src={Menu.src} alt="" />
        </div>

        {isLoggedIn && <UserAvatar />}
      </div>
    </nav>
  );
};

export default Nav;
