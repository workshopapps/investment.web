import Link from "next/link";

const NavLinks = ({ navLinks }) => {
  return (
    <ul>
      {navLinks.map((item, index) => {
        const { link } = item;
        return (
          <Link href={item.to} key={index}>
            <li
              key={index}
              className="text-sm md:text-base mb-6 cursor-pointer"
            >
              {link}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;
