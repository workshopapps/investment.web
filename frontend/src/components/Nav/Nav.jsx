/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import Logo from './../../assets/header/logo.png.svg';
import NavBtn from './NavBtn';
import MenuLinks from './MenuLinks';

const Nav = () => {
    const navStyle = {
        background: "#000718",
        color: "white",
    }

    const btns = [
        {name: "Login", background: "transparent"},
        {name: "Get Started", background: "#1BD47B"}
    ]
  return (
    <nav style={navStyle} className="flex justify-center items-center p-4 h-20">
        <div className='w-full flex items-center justify-between max-w-screen-xl'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className="nav-items max-w-xs w-full">
                <MenuLinks />
            </div>
            <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
                {
                    btns.map((item, index) => {
                        const {name, background} = item;
                        return <NavBtn name={name} background={background} key={index} />
                    })
                }
            </div>
        </div>
    </nav>
  )
}

export default Nav