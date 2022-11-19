/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
// eslint-disable-next-line react/prop-types

import React, { useEffect } from 'react';
import MenuLink from './MenuLink';
import NavBtn from './NavBtn';
import Close from './../../Assets/header/close.svg';

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ toggleMenu }) => {
    const navLinks = [
        {
            link: 'Stock',
            url: '/'
        },
        {
            link: 'About Us',
            url: 'about'
        },
        {
            link: 'Help',
            url: 'help'
        }
    ];
    const btns = [
        { name: 'Login', background: 'transparent', color: 'black' },
        { name: 'Get Started', background: '#1BD47B', color: 'white' }
    ];

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, []);
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-white/30">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 bg-transparent"
                onClick={() => toggleMenu(false)}
            ></div>
            <div className="absolute right-0 bg-white top-0 bottom-0 w-64">
                <div className="py-6 px-6">
                    <div
                        className=" flex justify-end items-end mb-10"
                        onClick={() => toggleMenu(false)}
                    >
                        <img src={Close} alt="" className="w-10 h-10" />
                    </div>
                    <ul className="uppercase flex-col gap-4 w-full flex justify-center items-center mb-20">
                        {navLinks.map((item, index) => {
                            const { link, url } = item;
                            return <MenuLink link={link} url={url} key={index} />;
                        })}
                    </ul>
                    <div className=" justify-between items-center gap-4 nav-btns flex flex-col">
                        {btns.map((item, index) => {
                            const { name, background, color } = item;
                            return (
                                <NavBtn
                                    name={name}
                                    background={background}
                                    color={color}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
