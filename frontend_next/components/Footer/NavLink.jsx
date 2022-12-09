/* eslint-disable react/prop-types */
import React from 'react';

const NavLink = ({ link }) => {
    return <li className="text-sm md:text-base mb-6 hover:text-[#1BD47B] transition duration-500 cursor-pointer">{link}</li>;
};

export default NavLink;
