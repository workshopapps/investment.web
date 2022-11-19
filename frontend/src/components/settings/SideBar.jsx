import React from 'react';
import settingsicon from '../../assets/settings/settingsicon.svg';
import profileicon from '../../assets/settings/profileicon.svg';
import notificationicon from '../../assets/settings/notificationicon.svg';
import payementicon from '../../assets/settings/paymenticon.svg';
import privacyicon from '../../assets/settings/privacyicon.svg';
import logouticon from '../../assets/settings/logouticon.svg';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'profile',
        icon: profileicon,
        link: '/settings/account'
    },
    {
        name: 'notification',
        icon: notificationicon,
        link: '/settings/notifications'
    },
    {
        name: 'payment',
        icon: payementicon,
        link: '/settings/payment'
    },
    {
        name: 'privacy',
        icon: privacyicon,
        link: '/settings/privacy'
    }
];

export default function index() {
    return (
        <div className="flex pl-[100px] py-4 fixed">
            <div className="flex flex-col  w-full md:1/5">
                <div className="flex flex-col w-full h-full py-11">
                    <div className="flex flex-row items-center w-full h-10 mb-4">
                        <img src={settingsicon} alt="settingsicon" className="w-5 h-5" />
                        <span className="text-[#0A0B0D] font-medium text-2xl ml-4">Settings</span>
                    </div>
                    <div className="flex flex-col w-full h-full py-2 font-semibold text-base text-black">
                        {links.map((link) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link
                                to={link.link}
                                key={link.name}
                                className="flex flex-row items-center w-full h-10 mb-4">
                                <img src={link.icon} alt="settingsicon" className="w-5 h-5" />
                                <h1 className="ml-4">{link.name}</h1>
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/settings/logout"
                        className="flex flex-row items-center w-full h-10 mt-10 text-base font-semibold">
                        <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
                        <h1 className="ml-4 text-[#E84E4E]">Logout</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}