/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom"

const NavLink = ({link, url}) => {
  return (
    <Link to={url}>
        {link}
    </Link>
  )
}

export default NavLink