/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';

const MenuLink = ({ link, url }) => {
    const activeStyle = {
        color: '#1BD47B'
    };
    return (
        <li>
            <NavLink to={url} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {link}
            </NavLink>
        </li>
    );
};

export default MenuLink;
