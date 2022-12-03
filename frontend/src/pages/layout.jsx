/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import { useState, useEffect } from 'react';
import MobileMenu from '../components/Nav/MobileMenu';
import { useLocation } from 'react-router-dom';
import ProtectedPage from '../auth/ProtectedPage';
import AuthProvider from '../auth/AuthProvider';

const PageLayout = ({ children, showNavBar = true, showFooter = true, isProtected = false }) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const pathName = useLocation();

    useEffect(() => {
        setOpenMobileMenu(false);
        return () => {
            setOpenMobileMenu(true);
        };
    }, [pathName]);

    return (
        <div className="flex flex-col h-screen relative ">
            <AuthProvider>
                {showNavBar && (
                    <>
                        <div className="nav-bar flex-none">
                            <Nav openMenu={setOpenMobileMenu} />
                        </div>
                        {openMobileMenu && <MobileMenu toggleMenu={setOpenMobileMenu} />}
                    </>
                )}

                {isProtected ? (
                    <ProtectedPage>
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
            </AuthProvider>
        </div>
    );
};

export default PageLayout;
