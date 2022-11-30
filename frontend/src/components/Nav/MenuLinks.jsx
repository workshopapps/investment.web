/* eslint-disable prettier/prettier */
import React from 'react';
import MenuLink from './MenuLink';

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
    return (
        <ul className="w-full hidden md:flex gap-[5px] max-w-[328px] justify-between items center">
            {navLinks.map((item, index) => {
                const { link, url, icon } = item;
                return <MenuLink link={link} url={url} key={index} icon={icon} />;
            })}
        </ul>
    );
};

export default MenuLinks;
