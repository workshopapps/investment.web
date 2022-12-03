/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
// eslint-disable-next-line react/prop-types

import React, { useEffect } from 'react';
import MenuLink from './MenuLink';
// import NavBtn from './NavBtn';
import Close from './../../assets/header/close.svg';

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ toggleMenu }) => {
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
            link: 'Help',
            url: '/help'
        }
    ];
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, []);
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-white/30 z-10">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"
                onClick={() => toggleMenu(false)}
            ></div>
            <div className="absolute right-0 bg-white top-0 bottom-0 w-[200px]">
                <div className="py-6 px-6">
                    <div className="flex items-center justify-end">
                        <div
                            className=" flex justify-end items-end mb-10"
                            onClick={() => toggleMenu(false)}
                        >
                            <img src={Close} alt="" className="w-7 h-7" />
                        </div>
                    </div>
                    <ul className="uppercase flex-col gap-4 w-full flex justify-center items-left mb-10 font-[600]">
                        {navLinks.map((item, index) => {
                            const { link, url } = item;
                            return <MenuLink link={link} url={url} key={index} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
