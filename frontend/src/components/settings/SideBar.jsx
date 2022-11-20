/* eslint-disable prettier/prettier */
import { React } from 'react';
import settingsicon from '../../assets/settings/settingsicon.svg';
import profileicon from '../../assets/settings/profileicon.svg';
import notificationicon from '../../assets/settings/notificationicon.svg';
import payementicon from '../../assets/settings/paymenticon.svg';
import privacyicon from '../../assets/settings/privacyicon.svg';
import logouticon from '../../assets/settings/logouticon.svg';
import passwordicon from '../../assets/settings/passwordicon.svg';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'profile',
        icon: profileicon,
        link: '/profilesettings'
    },
    {
        name: 'notification',
        icon: notificationicon,
        link: '/settings'
    },
    {
        name: 'payment',
        icon: payementicon,
        link: '/settings'
    },
    {
        name: 'privacy',
        icon: privacyicon,
        link: '/settings'
    },
    {
        name: 'password',
        icon: passwordicon,
        link: '/passwordsettings'
    }
];

export default function index() {
    return (
        <div className="flex pl-[40px] py-4 w-1/5 h-full bg-[ #FFFFFF]">
            <div className="flex flex-col  w-full ">
                <div className="flex flex-col w-full py-11">
                    <div className="flex flex-row md:flex-row items-center w-full h-10 mb-4">
                        <img src={settingsicon} alt="settingsicon" className="w-5 h-5" />
                        <span className="hidden md:flex text-[#0A0B0D] font-medium text-2xl ml-4">
                            Settings
                        </span>
                    </div>
                    <div className="flex flex-col w-full h-full py-2 font-semibold text-base text-black">
                        {links.map((link) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link
                                to={link.link}
                                key={link.name}
                                className="flex flex-row items-center w-full h-10 mb-4 hover:text-green-400 "
                            >
                                <img src={link.icon} alt="settingsicon" className="w-5 h-5" />
                                <h1 className="hidden md:flex ml-4">{link.name}</h1>
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/settings/logout"
                        className="flex flex-row items-center w-full h-10 mt-10 text-base font-semibold"
                    >
                        <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
                        <h1 className="hidden md:flex ml-4 text-[#E84E4E]">Logout</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}
