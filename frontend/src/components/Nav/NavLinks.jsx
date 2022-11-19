/* eslint-disable prettier/prettier */
import React from 'react'
import NavLink from './NavLink'

const NavLinks = () => {
    const navLinks = [
        {
            link: "Stock",
            url: '#'
        },
        {
            link: "About Us",
            url: '#'
        },
        {
            link: "Help",
            url: '#'
        },
    ]
  return (
    <ul>
        {
            navLinks.map((item, index) => {
                const {link, url} = item;
                return <NavLink link={link} url={url} key={index}  />
            })
        }
    </ul>
  )
}

export default NavLinks