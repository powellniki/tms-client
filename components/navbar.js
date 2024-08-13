import Link from "next/link";
import Image from "next/image";
import logo from "../public/TMS-logo-NBG.png";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cultureOpen, setCultureOpen] = useState(false);
  const router = useRouter();

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
    <nav className="h-20 md:h-28 bg-tms-black p-2 text-tms-white flex justify-between items-center relative z-50 shadow-lg">
      <div className="w-32 md:w-40">
        <Image src={logo} alt="TMS Logo" width={170} />
      </div>
      <div className="hidden md:flex items-center space-x-4 text-xl font-heading pr-8">
        <Link href="/" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/")}`}>
            HOME
          </span>
        </Link>
        <div className="relative" onMouseEnter={() => setCultureOpen(true)} onMouseLeave={() => setCultureOpen(false)}>
          <Link href="/culture" passHref>
            <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/culture")}`}>
              OUR CULTURE
            </span>
          </Link>
          {cultureOpen && (
            <div className="absolute top-full w-[12rem] text-white text-center bg-gray-700 shadow-lg">
              <Link href="/culture" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/culture/history")}`}>
                  OVERVIEW
                </span>
              </Link>
              <Link href="/culture/history" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/culture/history")}`}>
                  HISTORY
                </span>
              </Link>
              <Link href="/culture/safety" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/culture/safety")}`}>
                  SAFETY
                </span>
              </Link>
            </div>
          )}
        </div>
        <Link href="/services" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/services")}`}>
            SERVICES
          </span>
        </Link>
        <Link href="/portfolio" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/portfolio")}`}>
            PORTFOLIO
          </span>
        </Link>
        <Link href="/careers" passHref>
          <span className={`no-underline cursor-pointer hover:text-tms-yellow transition-colors duration-200 text-shadow-light ${isActive("/careers")}`}>
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
        <button onClick={toggleMenu} className="focus:outline-none">
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 md:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 shadow-lg z-50">
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