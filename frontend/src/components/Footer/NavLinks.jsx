/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
// import NavLink from './NavLink';
import { Link } from 'react-router-dom';

const NavLinks = ({ navLinks }) => {
    return (
        <ul>
            {navLinks.map((item, index) => {
                const { link } = item;
                return (
                    <Link to={item.to} key={index}>
                        <li key={index} className="text-sm md:text-base mb-6 cursor-pointer">
                            {link}
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
};

export default NavLinks;
