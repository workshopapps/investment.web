/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import MenuLink from './MenuLink';
import AuthContext from '../../auth/AuthContext';
import { IoMdHelpCircle } from 'react-icons/io';

const MenuLinks = () => {
    const navLinks = [
        {
            link: 'Home',
            url: '/'
        },
        {
            link: 'About Us',
            url: '/about'
        },
        {
            link: 'Pricing',
            url: '/subscription'
        },
        {
            link: `Help`,
            url: '/help',
            icon: true,
            linkIcon: <IoMdHelpCircle />,
            dropItems: [
                {
                    link: 'How it Works',
                    url: '/howitworks'
                },
                {
                    link: 'Cookies',
                    url: '/cookies'
                },
                {
                    link: 'Contact Us',
                    url: '/contact'
                },
                {
                    link: 'Terms of Use',
                    url: '/terms'
                },
                {
                    link: 'Privacy Policy',
                    url: '/policy'
                }
            ]
        }
    ];
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <ul className="w-full hidden md:flex h-full gap-[5px] max-w-[328px] justify-between items center">
            {navLinks.map((item, index) => {
                const { link, url, icon, dropItems, linkIcon } = item;
                return (
                    <MenuLink linkicon={linkIcon} link={link} url={url} key={index} icon={icon} dropItems={dropItems} />
                );
            })}
            {isLoggedIn && <MenuLink link={'Watchlist'} url={'/watchlist'} />}
        </ul>
    );
};

export default MenuLinks;
