import Link from "next/link";
import Image from "next/image";
import logo from "../public/TMS-logo-Transparent.png";
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

  // Determine if we are on the home page
  const isHomePage = router.pathname === "/";

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
    <nav 
      className={`h-24 md:h-32 md:pl-4 lg:pl-16 ${
        isHomePage ? "bg-transparent/50 absolute" : "bg-tms-black"
      } left-0 right-0 w-full text-tms-white flex justify-between items-center z-50`}>

      <div className="flex flex-row md:space-x-2 lg:space-x-6">
        <div className="p-2 md:px-0">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="TMS Logo"
              width={5184}
              height={2579}
              className="w-[10rem] h-auto md:w-[13rem] md:h-auto"
              priority
            />
          </Link>
        </div>

        {/* Company Address */}
        <div className="flex flex-col justify-center font-Roboto">
          <address className="not-italic text-sm md:text-xs lg:text-lg">
            <div className="flex flex-row">
              <p className="">128 N. 2nd St. 3rd Floor <span className="block">Clarksville, TN 37040</span></p>
            </div>
            <div className="">
              <div>
                <a href="tel:+9316472233" className="hover:text-gray-400">(931) 647-2233</a>
              </div>
            </div>
          </address>
        </div>
      </div>

      <div className=".navbar-fade-in hidden md:flex md:space-x-3 lg:space-x-10 text-lg lg:text-xl font-heading pr-4 lg:pr-20">
        <Link href="/" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/")}`}>
            HOME
          </span>
        </Link>
        <div className="relative" onMouseEnter={() => setCultureOpen(true)} onMouseLeave={() => setCultureOpen(false)}>
          <Link href="/culture/overview" passHref>
            <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/culture/overview")}`}>
              CULTURE
            </span>
          </Link>
          {cultureOpen && (
            <div className="absolute top-full w-[14rem] text-white text-center bg-tms-black shadow-lg z-50 pt-4">
              <Link href="/culture/overview" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/culture/overview")}`}>
                  OVERVIEW
                </span>
              </Link>
              <Link href="/culture/mission-statement" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/culture/mission-statement")}`}>
                  MISSION
                </span>
              </Link>
              <Link href="/culture/history" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/culture/history")}`}>
                  HISTORY
                </span>
              </Link>
              <Link href="/culture/safety" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/culture/safety")}`}>
                  SAFETY
                </span>
              </Link>
            </div>
          )}
        </div>
        <Link href="/services" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/services")}`}>
            SERVICES
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/projects")}`}>
            PROJECTS
          </span>
        </Link>
        <Link href="/careers" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/careers")}`}>
            CAREERS
          </span>
        </Link>
        <Link href="/inquiry" passHref>
          <span className={`underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light lg:tracking-wider ${isActive("/inquiry")}`}>
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
        <div className="mt-8 md:hidden absolute top-16 left-0 right-0 bg-tms-black text-white flex flex-col items-center space-y-4 pt-8 pb-12 shadow-lg z-50">
          <Link href="/" passHref>
            <span className={`font-bold text-[24px] font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/")}`} onClick={closeMenu}>
              HOME
            </span>
          </Link>
          <div className="w-full">
            <button
              onClick={toggleCultureMenu}
              className="w-full font-heading font-bold text-[24px] px-4 text-white hover:text-tms-yellow transition-colors duration-200 focus:outline-none"
            >
              OUR CULTURE
            </button>
            {cultureOpen && (
              <div className="flex flex-col items-center mt-2">
                <Link href="/culture/overview" passHref>
                  <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/culture/overview")}`} onClick={closeMenu}>
                    OVERVIEW
                  </span>
                </Link>
                <Link href="/culture/mission-statement" passHref>
                  <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/culture/mission-statement")}`} onClick={closeMenu}>
                    MISSION
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
            <span className={`font-bold text-[24px] font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/services")}`} onClick={closeMenu}>
              SERVICES
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span className={`font-bold text-[24px] font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/projects")}`} onClick={closeMenu}>
              PROJECTS
            </span>
          </Link>
          <Link href="/careers" passHref>
            <span className={`font-bold text-[24px] font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/careers")}`} onClick={closeMenu}>
              CAREERS
            </span>
          </Link>
          <Link href="/inquiry" passHref>
            <span className={`font-bold text-[24px] font-heading no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 ${isActive("/inquiry")}`} onClick={closeMenu}>
              INQUIRE
            </span>
          </Link>
        </div>
      )}
    </nav>
  )
}