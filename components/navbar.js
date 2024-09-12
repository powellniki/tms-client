import Link from "next/link";
import Image from "next/image";
import logo from "../public/TMS-logo.jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cultureOpen, setCultureOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const navbarElement = document.querySelector('.navbar-fade-in');

    const handleRouteChange = () => {
      // Reset the opacity and apply the fade-in animation
      if (navbarElement) {
        navbarElement.style.opacity = '0';
        navbarElement.style.transform = 'translateX(0px)'; // Adjust the direction as needed
        navbarElement.style.transition = 'none'; // Disable transitions temporarily
      }
    };

    const handleRouteComplete = () => {
      if (navbarElement) {
        // Apply the fade-in animation when the route change is complete
        setTimeout(() => {
          navbarElement.style.opacity = '1';
          navbarElement.style.transform = 'translateX(-20)';
          navbarElement.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        }, 50); // Delay slightly to ensure it's applied after the route change
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setCultureOpen(false); // Ensure "OUR CULTURE" is always collapsed when menu is toggled
  };

  const toggleCultureMenu = () => {
    setCultureOpen(!cultureOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCultureOpen(false); // Ensure "OUR CULTURE" is collapsed when menu is closed
  };

  const isActive = (path) => {
    return router.pathname === path ? "text-tms-yellow" : "";
  };

  return (
    <nav className="h-20 md:h-32 bg-tms-black pl-2 lg:pl-24 text-tms-white flex justify-between items-center relative z-50 shadow-lg">
      <div className="w-32 md:w-60 lg:pl-0">
        <Image src={logo} alt="TMS Logo" width={170} priority/>
      </div>
      <div className=".navbar-fade-in hidden md:flex items-center space-x-12 text-xl font-heading pr-28">
        <Link href="/" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/")}`}>
            HOME
          </span>
        </Link>
        <div className="relative" onMouseEnter={() => setCultureOpen(true)} onMouseLeave={() => setCultureOpen(false)}>
          <Link href="/culture/overview" passHref>
            <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/culture/overview")}`}>
              OUR CULTURE
            </span>
          </Link>
          {cultureOpen && (
            <div className="absolute top-full w-[12rem] text-white text-center bg-tms-black shadow-lg">
              <Link href="/culture/overview" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/culture/overview")}`}>
                  OVERVIEW
                </span>
              </Link>
              <Link href="/culture/history" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/culture/history")}`}>
                  HISTORY
                </span>
              </Link>
              <Link href="/culture/safety" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/culture/safety")}`}>
                  SAFETY
                </span>
              </Link>
            </div>
          )}
        </div>
        <Link href="/services" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/services")}`}>
            SERVICES
          </span>
        </Link>
        <Link href="/portfolio" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/portfolio")}`}>
            PORTFOLIO
          </span>
        </Link>
        <Link href="/careers" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light tracking-wider ${isActive("/careers")}`}>
            CAREERS
          </span>
        </Link>
        <Link href="/inquiry" passHref>
          <span className={`underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/inquiry")}`}>
            INQUIRE
          </span>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none pr-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 md:hidden absolute top-16 left-0 right-0 bg-tms-black text-white flex flex-col items-center space-y-4 py-4 shadow-lg z-50">
          <Link href="/" passHref>
            <span className={`font-bold text-lg font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/")}`} onClick={closeMenu}>
              HOME
            </span>
          </Link>
          <div className="w-full">
            <button
              onClick={toggleCultureMenu}
              className="w-full font-heading font-bold text-lg px-4 text-white hover:text-tms-yellow transition-colors duration-200 focus:outline-none"
            >
              OUR CULTURE
            </button>
            {cultureOpen && (
              <div className="flex flex-col items-center mt-2">
                <Link href="/culture" passHref>
                  <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/culture")}`} onClick={closeMenu}>
                    OVERVIEW
                  </span>
                </Link>
                <Link href="/culture/history" passHref>
                  <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/culture/history")}`} onClick={closeMenu}>
                    HISTORY
                  </span>
                </Link>
                <Link href="/culture/safety" passHref>
                  <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/culture/safety")}`} onClick={closeMenu}>
                    SAFETY
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/services" passHref>
            <span className={`font-bold text-lg font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/services")}`} onClick={closeMenu}>
              SERVICES
            </span>
          </Link>
          <Link href="/portfolio" passHref>
            <span className={`font-bold text-lg font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/portfolio")}`} onClick={closeMenu}>
              PORTFOLIO
            </span>
          </Link>
          <Link href="/careers" passHref>
            <span className={`font-bold text-lg font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/careers")}`} onClick={closeMenu}>
              CAREERS
            </span>
          </Link>
          <Link href="/inquiry" passHref>
            <span className={`font-bold text-lg font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/inquiry")}`} onClick={closeMenu}>
              INQUIRE
            </span>
          </Link>
        </div>
      )}
    </nav>
  )
}