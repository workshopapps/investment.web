/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Footer from '../components/Footer/Footer';
// import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import { useState, useEffect } from 'react';
import MobileMenu from '../components/Nav/MobileMenu';
import { useLocation } from 'react-router-dom';

const PageLayout = (children) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(true);
    const pathName = useLocation();
    useEffect(() => {
        setOpenMobileMenu(false);
        return () => {
            setOpenMobileMenu(true);
        };
    }, [pathName]);
    return (
        <div className="flex flex-col h-screen relative ">
            <div className="nav-bar flex-none">
                <Nav openMenu={setOpenMobileMenu} />
            </div>
            {openMobileMenu && <MobileMenu toggleMenu={setOpenMobileMenu} />}
            <div className="page-content lg:mx-[100px] grow">{children}</div>
            <div className="footer flex-none">
                <Footer />
            </div>
        </div>
    );
};

export default PageLayout;
