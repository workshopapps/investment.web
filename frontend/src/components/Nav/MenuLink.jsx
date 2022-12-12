/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import React, { useState } from 'react';

const MenuLink = ({ link, url, icon, dropItems, disabled, linkicon, openMobileMenu }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const activeStyle = {
        color: '#1BD47B'
    };

    const activeMenuLink = (
        <li className="relative h-full" onMouseEnter={() => setShowDropDown(true)}>
            <NavLink
                to={url}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={openMobileMenu === true ? "flex items-center gap-[10px] h-full tracking-wider capitalize px-2 py-1 rounded-md hover:bg-green-100 transition ease-in-out delay-100" : "flex items-center gap-[10px] h-full tracking-wider hover:text-green-300 transition ease-in-out delay-100"}>
                {openMobileMenu === true && linkicon && <i className="mr-2">{linkicon}</i>}
                {link}
                {icon && (
                    <span>
                        {showDropDown ? (
                            <BiChevronUp className="text-black md:text-white text-[16px]" />
                        ) : (
                            <BiChevronDown className="text-black md:text-white text-[16px]" />
                        )}
                    </span>
                )}
            </NavLink>
            {dropItems && showDropDown && (
                <ul
                    onMouseEnter={() => setShowDropDown(true)}
                    onMouseLeave={() => setShowDropDown(false)}
                    className="w-[176px] md:rounded-[8px] md:bg-[#000718] mt-[20px] md:mt-0 md:py-[14px] md:px-[28px] flex gap-[20px] flex-col md:absolute z-10 bottom-[-240px] md:shadow-lg ">
                    {dropItems.map((item, index) => {
                        const { link, url } = item;
                        return (
                            <NavLink
                                to={url}
                                key={index}
                                className="text-black md:text-white text-[14px] md:text-[16px] ml-2">
                                {link}
                            </NavLink>
                        );
                    })}
                </ul>
            )}
        </li>
    );
    const disabledMenuLink = (
        <li className="relative h-full">
            <div
                onClick={() => setShowDropDown((prev) => !prev)}
                className={openMobileMenu ? "flex items-center justify-between gap-[10px] h-full capitalize cursor-pointer px-2 py-1 rounded-md hover:bg-green-100 transition ease-in-out delay-100" : "flex items-center justify-between gap-[10px] h-full" }>
                <div className='flex flex-row gap-3 items-center'>
                    {openMobileMenu && linkicon && <i className="mr-2">{linkicon}</i>}
                    {link}
                </div>
                {icon && (
                    <span>
                        {showDropDown ? (
                            <BiChevronUp className="text-black md:text-white text-[16px]" />
                        ) : (
                            <BiChevronDown className="text-black md:text-white text-[16px]" />
                        )}
                    </span>
                )}
            </div>
            {dropItems && showDropDown && (
                <ul className="w-[176px] md:rounded-[8px] md:bg-[#000718] mt-[20px] md:mt-0 md:py-[14px] md:px-[28px] flex gap-[20px] flex-col md:absolute z-10 bottom-[-240px] md:shadow-lg ">
                    {dropItems.map((item, index) => {
                        const { link, url } = item;
                        return (
                            <NavLink
                                to={url}
                                key={index}
                                className="text-black md:text-white text-[14px] md:text-[16px]">
                                {link}
                            </NavLink>
                        );
                    })}
                </ul>
            )}
        </li>
    );
    return <React.Fragment>{disabled ? disabledMenuLink : activeMenuLink}</React.Fragment>;
};

export default MenuLink;
