/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import Logo from '../../assets/header/logo.svg';
import MenuLinks from './MenuLinks';
import Menu from '../../assets/header/menu.svg';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import UserAvatar from './UserAvatar';

// eslint-disable-next-line react/prop-types
const Nav = ({ openMenu }) => {
    const { isLoggedIn } = useContext(AuthContext);
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
        display: 'inline-block'
    };

    const navigate = useNavigate();

    return (
        <nav
            style={navStyle}
            className="flex justify-center items-center h-[78px] px-[16px] lg:px-[100px]">
            <div className="w-full flex items-center justify-between">
                <div
                    onClick={() => navigate('/')}
                    className="cursor-pointer flex items-center text-2xl">
                    <img src={Logo} alt="" />
                    <p className="text-[#1BD47B] font-bold ml-2">Yieldvest</p>
                </div>
                <MenuLinks />
                {!isLoggedIn && (
                    <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
                        <Link to="/login">
                            <button type="button" style={loginStyle} className="rounded text-white">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button
                                type="button"
                                style={btnStyle}
                                className="rounded text-primary104 font-[400]">
                                Get Started
                            </button>
                        </Link>
                    </div>
                )}
                <div className="ham-menu block md:hidden" onClick={() => openMenu(true)}>
                    <img src={Menu} alt="" />
                </div>

                {isLoggedIn && <UserAvatar />}
            </div>
        </nav>
    );
};

export default Nav;
