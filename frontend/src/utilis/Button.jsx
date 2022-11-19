/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, url, background, color, border}) => {
    const btnStyle = {
        background: background,
        color: color,
        border: border
    }
  return (
    // <Link to={url} style={btnStyle} className="inline-block, rounded py-5 px-24 w-72 border flex items-center justify">
    <Link to={url} style={btnStyle} className="inline-block rounded w-72 flex justify-center items-center py-5 px-24">
        {text}
    </Link>
  )
}
export default Button