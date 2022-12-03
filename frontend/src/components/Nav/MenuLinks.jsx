/* eslint-disable prettier/prettier */
import React, { useContext} from 'react';
import MenuLink from './MenuLink';
import AuthContext from '../../auth/AuthContext';

const MenuLinks = () => {
    const navLinks = [
        {
            link: 'Stock',
            url: '/'
        },
        {
            link: 'About Us',
            url: '/about'
        },
        {
            link: `Help `,
            url: '/help',
            icon: true
        }
    ];
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <ul className="w-full hidden md:flex gap-[5px] max-w-[328px] justify-between items center">
            {navLinks.map((item, index) => {
                const { link, url, icon } = item;
                return <MenuLink link={link} url={url} key={index} icon={icon} />;
            })}
            {
                isLoggedIn && <MenuLink link={'Watchlist'} url={'/watchlist'} />
            }
        </ul>
    );
};

export default MenuLinks;
