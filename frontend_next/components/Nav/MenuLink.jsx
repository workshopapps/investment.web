import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

const MenuLink = ({ link, url, icon, dropItems, margin }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const pathname = useRouter().pathname;

  const activeStyle = {
    color: "#1BD47B",
  };

  useEffect(() => {
    setIsActive(pathname === url);
  }, [pathname, url]);

  return (
    <li className="relative h-full" onMouseEnter={() => setShowDropDown(true)}>
      <NavLink
        data-text
        href={url}
        style={isActive ? activeStyle : {}}
        className={`flex items-center justify-between gap-[10px] mx-2 h-full hover:text-[#1BD47B] pr-[${margin}] ${url=="/help" && showDropDown ? "text-[#1BD47B]": "text-white"} transition duration-500`}
      >
        {link}
        {icon && (
          <span>
            {showDropDown ? (
              <BiChevronUp className="text-[#1BD47B] text-[16px]" />
            ) : (
              <BiChevronDown className="text-white text-[16px] hover:text-[#1BD47B]" />
            )}
          </span>
        )}
      </NavLink>
      {dropItems && showDropDown && (
        <ul
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
          className="w-[176px] rounded-[8px] bg-[#000718] py-[14px] px-[28px] flex gap-[20px] flex-col absolute z-10 bottom-[-240px] shadow-lg "
        >
          {dropItems.map((item, index) => {
            const { link, url } = item;
            return (
              <NavLink
                href={url}
                key={index}
                className={`text-white text-[16px] hover:text-[#1BD47B] transition duration-500`}
              >
                {link}
              </NavLink>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default MenuLink;
