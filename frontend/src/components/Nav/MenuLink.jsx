/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

const MenuLink = ({ link, url, icon }) => {
    const activeStyle = {
        color: '#1BD47B'
    };
    return (
        <li>
            <NavLink to={url} style={({ isActive }) => (isActive ? activeStyle : undefined)} className="flex items-center justify-between gap-[10px]">
                {link}
                <span>
                    {icon && <BiChevronDown className="text-white text-[16px]" />}
                </span>
            </NavLink>
        </li>
    );
};

export default MenuLink;
