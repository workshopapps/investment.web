/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import NavLink from './NavLink';
const NavLinks = ({ navLinks }) => {
    return (
        <ul>
            {navLinks.map((item, index) => {
                const { link } = item;
                return <NavLink key={index} link={link} />;
            })}
        </ul>
    );
};

export default NavLinks;
