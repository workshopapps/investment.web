/* eslint-disable prettier/prettier */
import React from 'react'
import MenuLink from './MenuLink';

const MenuLinks = () => {
    const navLinks = [
        {
            link: "Stock",
            url: '/'
        },
        {
            link: "About Us",
            url: 'about'
        },
        {
            link: "Help",
            url: 'help'
        },
    ]
  return (
    <ul className="w-full flex justify-between items center">
        {
            navLinks.map((item, index) => {
                const {link, url} = item;
                return <MenuLink link={link} url={url} key={index}  />
            })
        }
    </ul>
  )
}

export default MenuLinks