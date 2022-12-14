/* eslint-disable prettier/prettier */

import { React, useContext } from 'react';
import profileicon from '../../assets/settings/profileicon.svg';
import logouticon from '../../assets/settings/logouticon.svg';
import passwordicon from '../../assets/settings/passwordicon.svg';
import notificationicon from '../../assets/settings/notificationicon.svg';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import SidebarMobile from './SidebarMobile';

const links = [
    {
        name: 'My Account',
        icon: profileicon,
        link: '/settings'
    },

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

// export default function index() {

export default function index() {
    const { logout, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const MenuOption = ({ link }) => {
        const isActive = location.pathname === link.link;
        const activeColor = '#0F7544';

        return (
            <NavLink
                to={link.link}
                key={link.name}
                className={`flex flex-row items-center w-full h-full hover:text-[${activeColor}]`}>
                <img
                    src={link.icon}
                    alt="settingsicon"
                    className="w-5 h-5 "
                    style={{
                        filter: isActive
                            ? 'invert(35%) sepia(44%) saturate(810%) hue-rotate(99deg) brightness(91%) contrast(91%)'
                            : ''
                    }}
                />
                <h1
                    className=" font-normal text-base md:flex ml-4 border-green-400"
                    style={{ color: isActive ? activeColor : 'black' }}>
                    {link.name}
                </h1>
            </NavLink>
        );
    };
    return (
        <div className="flex justify-center items-center py-2 h-full bg-[ #FFFFFF] px-[16px] ">
            <div className="max-w-[1028px] w-full">
                <div className="flex flex-col  w-full md:border-b-2 border-[##D9D9D9]">
                    <div className="flex flex-col w-full pl-4  md:pl-0 pt-7 pb-3">
                        <div className="flex flex-row items-center w-full mb-2">
                            <span className="flex text-[#0A0B0D] font-normal text-xl md:text-3xl ml-4 mb-5">
                                Settings
                            </span>
                            <Link
                                to="/"
                                className="flex md:hidden flex-row items-center  h-full  text-base font-semibold ml-auto pr-4">
                                <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
                                <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
                                    Logout
                                </h1>
                            </Link>
                        </div>
                        <div className="flex md:hidden w-auto  justify-center items-center mb-[20px]">
                            <SidebarMobile />
                        </div>
                        <div className="flex items-center justify-center">
                            <div
                                className={`rounded-full text-white bg-gray-400 flex justify-center items-center`}
                                style={{
                                    width: '100px',
                                    height: '100px'
                                }}>
                                <h1 className={`text-white uppercase font-[700]`} style={{ fontSize: '36px' }}>
                                    {user.name.slice(0, 2)}
                                </h1>
                            </div>
                        </div>
                        <div className="flex w-full ">
                            <div className="flex flex-row w-2/5 md:w-full">
                                <div className="hidden md:flex h-full gap-[10px]  w-4/6 font-semibold text-base text-black">
                                    {links.map((link, index) => (
                                        <MenuOption link={link} key={index} />
                                    ))}
                                </div>
                                <div onClick={() => {
                                        logout();
                                        navigate('/');
                                    }}
                                    className="hidden md:flex  flex-row items-center  h-full  text-base font-semibold ml-[240px]"
                                    style={{
                                        cursor: 'pointer'
                                    }}>
                                    <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
                                    <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
                                        Logout
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// return (
//         <div className="flex pl-[0px] md:px-[200px] py-2 h-full bg-[ #FFFFFF]  ">
//             <div className="flex flex-col  w-full border-b-2 border-[##D9D9D9]">
//                 <div className="flex flex-col w-full pl-4  md:pl-0 pt-7 pb-3">
//                     <div className="flex flex-row items-center w-full mb-2">
//                         <span className="flex text-[#0A0B0D] font-normal text-3xl ml-4 mb-5">
//                             Settings
//                         </span>
//                     </div>
//                     <div className="flex flex-col w-full h-full py-2 font-semibold text-base text-black">
//                         {links.map((link) => (
//                             // eslint-disable-next-line react/jsx-key
//                             <Link
//                                 to={link.link}
//                                 key={link.name}
//                                 className="flex flex-row items-center w-full h-10 mb-4 hover:text-green-400 ">
//                                 <img src={link.icon} alt="settingsicon" className="w-5 h-5" />
//                                 <h1 className="hidden md:flex ml-4">{link.name}</h1>

//                         <Link
//                                 to="/"
//                                 className="flex md:hidden flex-row items-center  h-full  text-base font-semibold ml-[240px]">
//                                 <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
//                                 <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
//                                     Logout
//                                 </h1>

//                             </Link>

//                     </div>
//                     <div className="flex w-full ">
//                         <div className="flex flex-row w-2/5 md:w-full">
//                             <div className="hidden md:flex h-full  w-3/5 font-semibold text-base text-black">
//                                 {links.map((link) => (
//                                     // eslint-disable-next-line react/jsx-key
//                                     <Link
//                                         to={link.link}
//                                         key={link.name}
//                                         className="flex flex-row items-center w-full h-full  hover:text-green-400  ">
//                                         <img
//                                             src={link.icon}
//                                             alt="settingsicon"
//                                             className="w-5 h-5 "
//                                         />
//                                         <h1 className=" font-normal text-base md:flex ml-4 hover:border-b-2 border-green-400">
//                                             {link.name}
//                                         </h1>
//                                     </Link>
//                                 ))}
//                             </div>
//                             {/* <Link
//                                 to="/"
//                                 className="hidden md:flex  flex-row items-center  h-full  text-base font-semibold ml-[240px]">
//                                 <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
//                                 <h1 className="font-normal text-base md:flex ml-4 text-[#E84E4E]">
//                                     Logout
//                                 </h1>
//                             </Link>
//                         </div>
//                     </div> */}

//                     <div
//                         onClick={() => {
//                             logout();
//                             navigate('/');
//                         }}
//                         style={{
//                             cursor: 'pointer'
//                         }}
//                         className="flex flex-row items-center w-full h-10 mt-10 text-base font-semibold">
//                         <img src={logouticon} alt="settingsicon" className="w-5 h-5" />
//                         <h1 className="hidden md:flex ml-4 text-[#E84E4E]">Logout</h1>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };
