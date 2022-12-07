import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProtectedPage from "./auth/ProtectedPage";
import Footer from "./Footer/Footer";

const Layout = ({
  children,
  showNavBar = true,
  showFooter = true,
  isProtected = false,
  disableStrictProtection = false,
}) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathName = useRouter().pathname;

  // useEffect(() => {
  //   scrollToTop();
  // }, []);

  useEffect(() => {
    setOpenMobileMenu(false);
    return () => {
      setOpenMobileMenu(true);
    };
  }, [pathName]);

  return (
    <div className="flex flex-col h-screen relative ">
      {/* {showNavBar && (
            <>
                <div className="nav-bar flex-none">
                    <ProtectedPage strict={false}>
                        <Nav openMenu={setOpenMobileMenu} />
                    </ProtectedPage>
                </div>
                {openMobileMenu && <MobileMenu toggleMenu={setOpenMobileMenu} />}
            </>
        )} */}

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

export default Layout;
