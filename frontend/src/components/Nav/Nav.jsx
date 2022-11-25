/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import Logo from '../../assets/header/stocknalysis.svg';
// import NavBtn from './NavBtn';
import MenuLinks from './MenuLinks';
import Menu from '../../assets/header/menu.svg';
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Nav = ({ openMenu }) => {
    const navStyle = {
        background: '#000718',
        color: 'white'
    };

    const btns = [
        { name: 'Login', background: 'transparent', url: '/login' },
        { name: 'Get Started', background: '#1BD47B', url: '/signup' }
    ];
    const loginStyle = {
        background: `transparent`,
        padding: '12px 16px',
        border: 'none',
        display: 'inline-block',
        color: `white`
    };
    const btnStyle = {
        background: `#1BD47B`,
        padding: '12px 16px',
        border: 'none',
        display: 'inline-block',
        color: `white`
    };
    // const btns = [
    //     { name: 'Login', background: 'transparent', url: 'login' },
    //     { name: 'Get Started', background: '#1BD47B' }
    // ];

    const navigate = useNavigate();

    return (
        <nav style={navStyle} className="flex justify-center items-center h-20">
            <div className="w-full flex items-center justify-between lg:mx-[100px] mx-[16px]">
                <div onClick={() => navigate('/')} className="cursor-pointer">
                    <img src={Logo} alt="" />
                </div>
                <div className="hidden md:block nav-items max-w-xs w-full">
                    <MenuLinks />
                </div>
                <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
                    {btns.map((item, index) => {
                        const { name, background, url } = item;
                        return <NavBtn name={name} background={background} key={index} url={url} />;
                    })}
                <Link to="/login">
                    <button type="button" style={loginStyle} className="rounded">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button type="button" style={btnStyle} className="rounded">
                        Get Started
                    </button>
                </Link>
                </div>
                <div className="ham-menu block md:hidden" onClick={() => openMenu(true)}>
                    <img src={Menu} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
