/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Logo from '../../assets/header/logo.svg';
// import NavBtn from './NavBtn';
import { UserStatusContext } from '../../store/UserStatusContext';
import MenuLinks from './MenuLinks';
import Menu from '../../assets/header/menu.svg';
import { Link, useNavigate } from 'react-router-dom';
import user_image from '../../assets/images/Rectangle 4749.png';

import { IoIosNotifications } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';

// eslint-disable-next-line react/prop-types
const Nav = ({ openMenu }) => {
    const { logged } = useContext(UserStatusContext);
    console.log(logged);
    const navStyle = {
        background: '#000718',
        color: 'white'
    };
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
                <div onClick={() => navigate('/')} className="cursor-pointer flex items-center text-2xl">
                    <img src={Logo} alt="" />
                    <p className="text-[#1BD47B] font-bold ml-2">Yieldvest</p>
                </div>
                <div className="hidden md:block nav-items max-w-xs w-full">
                    <MenuLinks />
                </div>
                {!logged && (
                    <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
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
                )}

                <div className="ham-menu block md:hidden" onClick={() => openMenu(true)}>
                    <img src={Menu} alt="" />
                    
                </div>

                {logged && (
                    <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
                        <IoIosNotifications />

                        <FiSettings onClick={() => navigate('/settings')} />

                        <img
                            className="w-16 h-16 rounded-full"
                            src={user_image}
                            alt="user_profile"
                        />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
