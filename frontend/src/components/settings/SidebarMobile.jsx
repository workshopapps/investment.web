import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileicon from '../../assets/settings/profileicon.svg';
import { IoIosArrowDown } from 'react-icons/io';

import passwordicon from '../../assets/settings/passwordicon.svg';
import notificationicon from '../../assets/settings/notificationicon.svg';

const Menulinks = [
    {
        name: 'Password',
        icon: passwordicon,
        link: '/passwordsettings'
    },
    {
        name: 'Email Notifications',
        icon: notificationicon,
        link: '/notificationsettings'
    }
];

const SidebarMobile = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="relative">
            <div className="flex items-center" onClick={() => setDropdown(!dropdown)}>
                <img src={profileicon} alt="profileicon" className="w-5 h-5" />
                <Link to="/settings" className="font-normal text-base ml-4">
                    My Account
                </Link>
                {/* <h1 className="font-normal text-base md:flex ml-4 border-green-400">My Account</h1> */}
                <IoIosArrowDown className="ml-2" />
            </div>
            {dropdown && (
                <ul className="absolute top-8 ">
                    {Menulinks.map((link) => (
                        <li key={link.name}>
                            <Link to={link.link}>
                                <div className="flex">
                                    <img src={link.icon} alt="settingsicon" className="w-5 h-5 " />
                                    <h1 className=" font-normal text-base md:flex ml-4 border-green-400">
                                        {link.name}
                                    </h1>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SidebarMobile;