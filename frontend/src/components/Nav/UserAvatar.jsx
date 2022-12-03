import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

const UserAvatar = ({ width = '50px', height = '50px', fontSize = '16px' }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className=" justify-between items-center gap-4 nav-btns hidden md:flex">
            <Link
                to="/settings"
                className={`w-[${width}] h-[${height}] rounded-full text-white bg-gray-400 flex justify-center items-center`}>
                <h1 className={`text-white uppercase font-[700] text-[${fontSize}]`}>
                    {user.name.slice(0, 2)}
                </h1>
            </Link>
        </div>
    );
};

export default UserAvatar;
