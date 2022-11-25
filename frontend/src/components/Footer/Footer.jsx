/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/header/logo.png.svg';
import downloadImage from '../../assets/index/footer-download.svg';
import NavLinks from './NavLinks';

const Footer = () => {
    const pathname = window.location.pathname;
    const navItems = [
        {
            name: 'Get To Know Us',
            navLinks: [
                { link: 'About MyStockPlug', to: '/about' },
                { link: 'Careers', to: '/careers' },
                { link: 'Stock Tips', to: '/StockTips' },
                { link: 'Contact Us', to: '/contact' }
            ]
        },
        {
            name: 'Support',
            navLinks: [
                { link: 'Help', to: '/help' },
                { link: 'FAQ', to: '#' },
                { link: 'News', to: 'news' },
                { link: 'Blog', to: '/blog' },
                { link: 'Settings', to: '/settings' }
            ]
        },
        {
            name: 'Legal',
            navLinks: [
                { link: 'Terms of Use', to: '/terms' },
                { link: 'Privacy Policy', to: '/policy' },
                { link: 'Disclaimer' },
                { link: 'Cookies Policy' }
            ]
        }
    ];

    const footerStyle = {
        background: '#000718',
        color: 'white'
    };
    return (
        <footer
            style={footerStyle}
            className="lg:px-[100px] p-6 flex flex-col items-center justify-center w-full">
            <div className="flex w-full flex-wrap justify-between items-start gap-8 md:border-b border-white pb-12 mb-8 md:mt-12">
                <div>
                    <div className="w-60 pb-8 md:pb-0">
                        <img src={logo} alt="" />
                    </div>
                    <div
                        className={`${pathname !== '/download'
                            ? 'hidden lg:flex pt-4'
                            : 'hidden'
                            }`}>
                        <Link to="/download">
                            <img src={downloadImage} alt="download-image" className="w-full" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between items-start flex-wrap gap-8 max-w-2xl w-full">
                    {navItems.map((item, index) => {
                        const { name, navLinks } = item;
                        return (
                            <div key={index} className="w-36">
                                <p className="mb-8 ">{name}</p>
                                <NavLinks navLinks={navLinks} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-center pb-10">2022 MyStockPlug </div>
        </footer>
    );
};

export default Footer;
