/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

const NavBtn = ({name, background}) => {
    const btnStyle = {
        background: `${background}`,
        padding: "16px",
        border: "none",
        display: "inline-block"
    }
  return (
    <button type='button' style={btnStyle} className="rounded">
        {name}
    </button>
  )
}

export default NavBtn