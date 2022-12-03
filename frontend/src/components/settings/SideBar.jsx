/* eslint-disable prettier/prettier */

import { React, useContext } from 'react';
import settingsicon from '../../assets/settings/settingsicon.svg';
import profileicon from '../../assets/settings/profileicon.svg';
import logouticon from '../../assets/settings/logouticon.svg';
import passwordicon from '../../assets/settings/passwordicon.svg';
import notificationicon from '../../assets/settings/notificationicon.svg';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

const links = [
    {
        name: 'My Account',
        icon: profileicon,
        link: '/profilesettings'
    },

    {
        name: 'password',
        icon: passwordicon,
        link: '/passwordsettings'
    },
    {
        name: 'Email Notifications',
        icon: notificationicon,
        link: '/notificationsettings'
    }
];

export default function index() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="flex pl-[0px] md:px-[200px] py-2 h-full bg-[ #FFFFFF]  ">
            <div className="flex flex-col  w-full border-b-2 border-[##D9D9D9]">
                <div className="flex flex-col w-full pl-4  md:pl-0 pt-7 pb-3">
                    <div className="flex flex-row items-center w-full mb-2">
                        <span className="flex text-[#0A0B0D] font-normal text-3xl ml-4 mb-5">
                            Settings
                        </span>
                    </div>
                    <div className="flex flex-col w-full h-full py-2 font-semibold text-base text-black">
                        {links.map((link) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link
                                to={link.link}
                                key={link.name}
                                className="flex flex-row items-center w-full h-10 mb-4 hover:text-green-400 ">
                                <img src={link.icon} alt="settingsicon" className="w-5 h-5" />
                                <h1 className="hidden md:flex ml-4">{link.name}</h1>
                            </Link>
                        ))}
                    </div>
                    <div className="flex w-full ">
                        <div className="flex flex-row w-2/5 md:w-full">
                            <div className="hidden md:flex h-full  w-3/5 font-semibold text-base text-black">
                                {links.map((link) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <Link
                                        to={link.link}
                                        key={link.name}
                                        className="flex flex-row items-center w-full h-full  hover:text-green-400  ">
                                        <img
                                            src={link.icon}
                                            alt="settingsicon"
                                            className="w-5 h-5 "
                                        />
                                        <h1 className=" font-normal text-base md:flex ml-4 hover:border-b-2 border-green-400">
                                            {link.name}
                                        </h1>
                                    </Link>
                                ))}
                            </div>
                            <Link
                                to="/"
                                className="hidden md:flex  flex-row items-center  h-full  text-base font-semibold ml-[240px]">
                                <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
                                <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
                                    Logout
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            logout();
                            navigate('/');
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                        className="flex flex-row items-center w-full h-10 mt-10 text-base font-semibold">
                        <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
                        <h1 className="hidden md:flex ml-4 text-[#E84E4E]">Logout</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
