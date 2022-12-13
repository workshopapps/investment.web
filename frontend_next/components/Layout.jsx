import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProtectedPage from "./auth/ProtectedPage";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import MobileMenu from "./Nav/MobileMenu";
import { scrollToTop } from "../utils/scroll";

const Layout = ({
  children,
  showNavBar = true,
  showFooter = true,
  isProtected = false,
  disableStrictProtection = false,
}) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const pathName = useRouter().pathname;

  const size = useWindowSize();

  useEffect(() => {
    scrollToTop();
  }, []);
  
  useEffect(() => {
    setOpenMobileMenu(false);
    if(size >= 768) {
      setOpenMobileMenu(false);
    }
    return () => {
      setOpenMobileMenu(true);
    };
  }, [pathName, size]);

  const mobileMenu = <MobileMenu toggleMenu={setOpenMobileMenu} />

  return (
    <div className="flex flex-col h-screen relative">
      {showNavBar && (
        <>
          <div className="nav-bar flex-none">
            <ProtectedPage strict={false}>
              <Nav openMenu={setOpenMobileMenu} />
            </ProtectedPage>
          </div>
          {size.width <= 768 && openMobileMenu && mobileMenu}
        </>
      )}

      {isProtected ? (
        <ProtectedPage strict={!disableStrictProtection}>
          <div className="page-content grow mt-[78px]">{children}</div>
        </ProtectedPage>
      ) : (
        <div className="page-content grow mt-[78px]">{children}</div>
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

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}