/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Logo from '../../assets/header/stocknalysis.svg';
import NavBtn from './NavBtn';
import MenuLinks from './MenuLinks';
import Menu from '../../assets/header/menu.svg';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin';
import user_image from '../../assets/images/Rectangle 4749.png';
import { HiChevronDown } from 'react-icons/hi';

// eslint-disable-next-line react/prop-types
const Nav = ({ openMenu }) => {
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
    const [mouse, setMouse] = useState(false);
    const viewProfile = () => {
        setMouse(true);
    };
    const leaveProfile = () => {
        setMouse(false);
    };
    const navigate = useNavigate();
    console.log(userLoggedIn);

    return (
        <nav style={navStyle} className="flex justify-center items-center h-20">
            <div className="w-full flex items-center justify-between lg:mx-[100px] mx-[16px]">
                <div onClick={() => navigate('/')} className="cursor-pointer">
                    <img src={Logo} alt="" />
                </div>
                <div className="hidden md:block nav-items max-w-xs w-full">
                    <MenuLinks />
                </div>
                {userLoggedIn && (
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
                {!userLoggedIn && (
                    <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={user_image}
                            alt="user_profile"
                        />
                        <div className="name relative" onMouseOver={viewProfile} onMouseLeave={leaveProfile}>
                            <h1 className='px-4 flex items-center'>Henry <HiChevronDown /></h1>
                            {mouse && (
                                <span className="view__profile absolute top-6 left-0 bg-slate-600 p-4 rounded-2xl" >
                                    <h1 className='cursor-pointer p-1'>profile</h1>
                                    <h1 className='cursor-pointer p-1' onClick={logoffHandler}>logout</h1>
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;