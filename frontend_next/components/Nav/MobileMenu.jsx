/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useContext } from "react";
import MenuLink from "./MenuLink";
import Close from "./../../assets/header/close.svg";
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { ImPriceTags } from 'react-icons/im';
import { RiLoginCircleFill } from 'react-icons/ri';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import AuthContext from './../../components/auth/AuthContext';

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ toggleMenu, openMobileMenu }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navLinks = [
    {
        link: 'Home',
        url: '/',
        linkicon: <AiFillHome />
    },
    {
        link: 'About Us',
        url: '/about',
        linkicon: <BsFillInfoCircleFill />
    },
    {
        link: 'Pricing',
        url: '/subscription',
        linkicon: <ImPriceTags />
    },
    {
        link: 'Help',
        disabled: true,
        url: '#',
        icon: true,
        linkicon: <IoMdHelpCircle />,
        dropItems: [
          {
              link: 'How it Works',
              url: '/how-it-works'
          },
          {
              link: 'Cookies',
              url: '/cookies'
          },
          {
              link: 'Contact Us',
              url: '/contact'
          },
          {
              link: 'Terms of Use',
              url: '/terms'
          },
          {
              link: 'Privacy Policy',
              url: '/policy'
          }
        ]
      }
    ];
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-white/30 z-[9999999999999]">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"
        onClick={() => toggleMenu(false)}
      ></div>
      <div className="absolute right-0 bg-white top-0 bottom-0 w-[200px]">
        <div className="py-6 px-6">
          <div className="flex items-center justify-end">
            <div
              className=" flex justify-end items-end mb-10"
              onClick={() => toggleMenu(false)}
            >
              <img src={Close.src} alt="" className="w-7 h-7" />
            </div>
          </div>
          <ul className="uppercase flex-col gap-4 w-full flex justify-center items-left mb-10 font-[600] text-black">
            {navLinks.map((item, index) => {
              const { link, url, icon, dropItems, disabled, linkicon } = item;
              return <MenuLink link={link} url={url} key={index} disabled={disabled} icon={icon} dropItems={dropItems} linkicon={linkicon} openMobileMenu={openMobileMenu} />;
            })}
            {
              isLoggedIn ? <MenuLink link={'Profile'} url={'/settings'} openMobileMenu={openMobileMenu} linkicon={ <FaUserCircle/> } /> : <MenuLink link={'Login'} url={'/login'} linkicon={ <RiLoginCircleFill/> } openMobileMenu={openMobileMenu}/>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
