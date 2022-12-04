/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Link } from 'react-router-dom';
import downloadImage from '../../assets/index/footer-download.svg';
import footerLogo from '../../assets/footer/footerLogo.png';
import footerFb from '../../assets/footer/footerFb.png';
import insta from '../../assets/footer/insta.png';
import footerTwitter from '../../assets/footer/footerTwitter.png';
import NavLinks from './NavLinks';

const Footer = () => {
    const pathname = window.location.pathname;
    const navItems = [
        {
            name: 'Get To Know Us',
            navLinks: [
                { link: 'About Yieldvest', to: '/about' },
                { link: 'Contact Us', to: '/contact' }
            ]
        },
        {
            name: 'Support',
            navLinks: [
                { link: 'How it works', to: '/howitworks' },
                { link: 'Help', to: '/help' }
            ]
        },
        {
            name: 'Legal',
            navLinks: [
                { link: 'Terms of Use', to: '/terms' },
                { link: 'Privacy Policy', to: '/policy' },
                { link: 'Cookies', to: '/cookies' }
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
            <div className="flex w-full flex-wrap justify-between items-start gap-8  pb-12 mb-8 md:mt-12">
                <div>
                    <div className="w-60 flex items-center text-2xl pb-8 md:pb-0">
                        <img src={footerLogo} alt="" />

                        <p className="font-bold ml-2 text-[#1BD47B]">Yieldvest</p>
                    </div>
                    <div
                        className={`${
                            pathname !== '/download' ? 'hidden lg:flex pt-4 mb-[66px]' : 'hidden'
                        }`}>
                        <Link to="/download">
                            <img src={downloadImage} alt="download-image" className="w-full" />
                        </Link>
                    </div>
                    <div className="flex gap-3  ">
                        <img src={footerTwitter} alt="" />
                        <img src={insta} alt="" />
                        <img src={footerFb} alt="" />
                    </div>
                </div>
                <div className="flex justify-between items-start flex-wrap gap-8 max-w-2xl w-full">
                    {navItems.map((item, index) => {
                        const { name, navLinks } = item;
                        return (
                            <div key={index} className="w-36">
                                <p className="mb-8" style={{ fontWeight: 700, fontSize: '18px' }}>
                                    {name}
                                </p>
                                <NavLinks navLinks={navLinks} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-center border-t-[2px] w-full border-white pt-[18px]">
                {' '}
                2022 Yieldvest{' '}
            </div>
        </footer>
    );
};

export default Footer;
