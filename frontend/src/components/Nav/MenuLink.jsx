/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import React, { useState } from 'react';

const MenuLink = ({ link, url, icon, dropItems, disabled }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const activeStyle = {
        color: '#1BD47B'
    };

    const activeMenuLink = (<li className="relative h-full" onMouseEnter={() => setShowDropDown(true)} >
                                <NavLink
                                    to={url}
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                    className="flex items-center justify-between gap-[10px] h-full">
                                    {link}
                                    {icon && (
                                        <span >
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
                                                <NavLink to={url} key={index} className="text-black md:text-white text-[14px] md:text-[16px]">
                                                    {link}
                                                </NavLink>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>);
    const disabledMenuLink = (<li className="relative h-full" >
                                <div
                                    onClick={() => setShowDropDown(prev => !prev)}
                                    className="flex items-center justify-between gap-[10px] h-full">
                                    {link}
                                    {icon && (
                                        <span >
                                            {showDropDown ? (
                                                <BiChevronUp className="text-black md:text-white text-[16px]" />
                                            ) : (
                                                <BiChevronDown className="text-black md:text-white text-[16px]" />
                                            )}
                                        </span>
                                    )}
                                </div>
                                {dropItems && showDropDown && (
                                    <ul
                                        className="w-[176px] md:rounded-[8px] md:bg-[#000718] mt-[20px] md:mt-0 md:py-[14px] md:px-[28px] flex gap-[20px] flex-col md:absolute z-10 bottom-[-240px] md:shadow-lg ">
                                        {dropItems.map((item, index) => {
                                            const { link, url } = item;
                                            return (
                                                <NavLink to={url} key={index} className="text-black md:text-white text-[14px] md:text-[16px]">
                                                    {link}
                                                </NavLink>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>);
    return (
        <React.Fragment>
            {
                disabled ?  disabledMenuLink : activeMenuLink
            }
        </React.Fragment>
    );

        
};

export default MenuLink;
