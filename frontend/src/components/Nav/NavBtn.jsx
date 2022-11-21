/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

const NavBtn = ({ name, background, color }) => {
    const btnStyle = {
        background: `${background}`,
        padding: '16px',
        border: 'none',
        display: 'inline-block',
        color: `${color}`
    };
    return (
        <button type="button" style={btnStyle} className="rounded">
            {name}
        </button>
    );
};

export default NavBtn;
