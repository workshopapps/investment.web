/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBtn = ({ name, background, color, url }) => {
    const btnStyle = {
        background: `${background}`,
        padding: '16px',
        border: 'none',
        display: 'inline-block',
        color: `${color}`
    };
    return (
        <button type="button" style={btnStyle} className="rounded">
            <Link to={url}>
                {name}
            </Link>
        </button>
    );
};

export default NavBtn;
