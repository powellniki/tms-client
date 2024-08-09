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
  };
  const toggleCultureMenu = () => {
    setCultureOpen(!cultureOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return router.pathname === path ? "text-tms-yellow" : "";
  };

  return (
    <nav className="h-20 md:h-28 bg-gray-200 p-2 text-white flex justify-between items-center relative z-50 shadow-lg">
      <div className="w-32 md:w-40">
        <Image src={logo} alt="TMS Logo" width={170} />
      </div>
      <div className="hidden md:flex items-center space-x-4 text-xl font-heading pr-8">
        <Link href="/" passHref>
          <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/")}`}>
            HOME
          </span>
        </Link>
        {/* <span className="text-tms-yellow font-bold text-xl pb-1">|</span> */}
        <div className="relative" onMouseEnter={() => setCultureOpen(true)} onMouseLeave={() => setCultureOpen(false)}>
          <Link href="/culture" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/culture")}`}>
              CULTURE
            </span>
          </Link>
          {cultureOpen && (
            <div className="absolute top-full w-auto bg-gray-700 rounded shadow-lg">
              <Link href="/culture/history" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/culture/history")}`}>
                  HISTORY
                </span>
              </Link>
              <Link href="/culture/safety" passHref>
                <span className={`block px-4 py-2 no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/culture/safety")}`}>
                  SAFETY
                </span>
              </Link>
            </div>
          )}
        </div>
        {/* <span className="text-tms-yellow font-bold text-xl pb-1">|</span> */}
        <Link href="/services" passHref>
          <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/services")}`}>
            SERVICES
          </span>
        </Link>
        {/* <span className="text-tms-yellow font-bold text-xl pb-1">|</span> */}
        <Link href="/portfolio" passHref>
          <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/portfolio")}`}>
            PORTFOLIO
          </span>
        </Link>
        {/* <span className="text-tms-yellow font-bold text-xl pb-1">|</span> */}
        <Link href="/careers" passHref>
          <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 text-shadow-lg ${isActive("/careers")}`}>
            CAREERS
          </span>
        </Link>
        {/* <span className="text-tms-yellow font-bold text-xl pb-1">|</span> */}
        <Link href="/inquiry" passHref>
          <span className={`underline cursor-pointer hover:text-gray-500 transition-colors duration-300 text-shadow-lg ${isActive("/inquiry")}`}>
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 shadow-lg z-50">
          <Link href="/" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 ${isActive("/")}`} onClick={closeMenu}>
              HOME
            </span>
          </Link>
          <Link href="/culture" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 ${isActive("/culture")}`} onClick={closeMenu}>
              CULTURE
            </span>
          </Link>
          <Link href="/services" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 ${isActive("/services")}`} onClick={closeMenu}>
              SERVICES
            </span>
          </Link>
          <Link href="/portfolio" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 ${isActive("/portfolio")}`} onClick={closeMenu}>
              PORTFOLIO
            </span>
          </Link>
          <Link href="/careers" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 ${isActive("/careers")}`} onClick={closeMenu}>
              CAREERS
            </span>
          </Link>
          <Link href="/inquiry" passHref>
            <span className={`no-underline cursor-pointer hover:text-gray-400 transition-colors duration-300 ${isActive("/inquiry")}`} onClick={closeMenu}>
              INQUIRY
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}