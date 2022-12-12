/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import { useState, useEffect } from 'react';
import MobileMenu from '../components/Nav/MobileMenu';
import { useLocation } from 'react-router-dom';
import ProtectedPage from '../auth/ProtectedPage';
import { scrollToTop } from '../utils/scroll';

const PageLayout = ({
    children,
    showNavBar = true,
    showFooter = true,
    isProtected = false,
    disableStrictProtection = false
}) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    console.log(openMobileMenu);
    const pathName = useLocation();

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        setOpenMobileMenu(false);
        return () => {
            setOpenMobileMenu(true);
        };
    }, [pathName]);

    return (
        <div className="flex flex-col h-screen relative ">
            {showNavBar && (
                <>
                    <div className="nav-bar flex-none">
                        <ProtectedPage strict={false}>
                            <Nav openMenu={setOpenMobileMenu} />
                        </ProtectedPage>
                    </div>
                    {openMobileMenu && (
                        <MobileMenu
                            openMobileMenu={openMobileMenu}
                            toggleMenu={setOpenMobileMenu}
                        />
                    )}
                </>
            )}

            {isProtected ? (
                <ProtectedPage strict={!disableStrictProtection}>
                    <div className="page-content grow">{children}</div>
                </ProtectedPage>
            ) : (
                <div className="page-content grow">{children}</div>
            )}

            {showFooter && (
                <div className="footer flex-none">
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default PageLayout;
