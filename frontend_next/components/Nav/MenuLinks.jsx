import React, { useContext } from "react";
import MenuLink from "./MenuLink";
import AuthContext from "../auth/AuthContext";

const MenuLinks = () => {
  const navLinks = [
    {
      link: "Home",
      url: "/",
      margin: "15px"
    },
    {
      link: "About",
      url: "/about",
      margin: "15px"
    },
    {
      link: "Pricing",
      url: "/subscription",
      margin: "15px"
    },
    {
      link: `Help `,
      url: "/help",
      margin: "0px",
      icon: true,
      dropItems: [
        {
          link: "How it Works",
          url: "/how-it-works",
        },
        {
          link: "Cookies",
          url: "/cookies",
        },
        {
          link: "Contact Us",
          url: "/contact",
        },
        {
          link: "Terms of Use",
          url: "/terms",
        },
        {
          link: "Privacy Policy",
          url: "/policy",
        },
      ],
    },
  ];
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <ul className={`w-full hidden md:flex h-full gap-[30px] justify-between items center ${isLoggedIn ? `max-w-[480px]`: `max-w-[410px]`}`}>
      {navLinks.map((item, index) => {
        const { link, url, icon, dropItems, margin } = item;
        return (
          <MenuLink
            link={link}
            url={url}
            key={index}
            icon={icon}
            dropItems={dropItems}
            margin={margin}
          />
        );
      })}
      {isLoggedIn && <MenuLink link={"Watchlist"} url={"/watchlist"} />}
    </ul>
  );
};

export default MenuLinks;
