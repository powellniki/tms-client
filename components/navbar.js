import Link from "next/link.js"
import Image from "next/image.js"
import logo from "../public/TMS-logo.jpg"
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [cultureOpen, setCultureOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
    const toggleCultureMenu = () => {
      setCultureOpen(!cultureOpen)
    }
    const closeMenu = () => {
        setIsOpen(false)
      }

  return (
    <nav className="h-24 bg-gray-800 p-2 text-white flex justify-between items-center">
      <div>
        <Image src={logo} alt="TMS Logo" width={150} />
      </div>
      <div className="hidden md:flex items-center space-x-4 text-xl font-heading pr-8">
        <Link href="/" passHref>
          <span className="no-underline hover:text-gray-400 cursor-pointer">HOME</span>
        </Link>
        <span className="text-tms-yellow font-bold text-xl pb-1">|</span>
        <div className="relative" onMouseEnter={() => setCultureOpen(true)} onMouseLeave={() => setCultureOpen(false)}>
                    <Link href="/culture" passHref>
                        <span className="no-underline hover:text-gray-400 cursor-pointer">CULTURE</span>
                    </Link>
                    {cultureOpen && (
                        <div className="absolute top-full w-auto bg-gray-700 rounded shadow-lg" >
                            <Link href="/culture/history" passHref>
                                <span className="block px-4 py-2 no-underline hover:text-gray-400 cursor-pointer">History</span>
                            </Link>
                            <Link href="/culture/safety" passHref>
                                <span className="block px-4 py-2 no-underline hover:text-gray-400 cursor-pointer">Safety</span>
                            </Link>
                        </div>
                    )}
                </div>
        <span className="text-tms-yellow font-bold text-xl pb-1">|</span>
        <Link href="/services" passHref>
          <span className="no-underline hover:text-gray-400 cursor-pointer">SERVICES</span>
        </Link>
        <span className="text-tms-yellow font-bold text-xl pb-1">|</span>
        <Link href="/portfolio" passHref>
          <span className="no-underline hover:text-gray-400 cursor-pointer">PORTFOLIO</span>
        </Link>
        <span className="text-tms-yellow font-bold text-xl pb-1">|</span>
        <Link href="/careers" passHref>
          <span className="no-underline hover:text-gray-400 cursor-pointer">CAREERS</span>
        </Link>
        <span className="text-tms-yellow font-bold text-xl pb-1">|</span>
        <Link href="/inquiry" passHref>
          <span className="underline text-tms-red hover:text-gray-500 cursor-pointer">INQUIRY</span>
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white flex flex-col items-center space-y-4 py-4">
          <Link href="/" passHref>
            <span className="no-underline hover:text-gray-400 cursor-pointer" onClick={closeMenu}>HOME</span>
          </Link>
          <Link href="/culture" passHref>
            <span className="no-underline hover:text-gray-400 cursor-pointer" onClick={closeMenu}>CULTURE</span>
          </Link>
          <Link href="/services" passHref>
            <span className="no-underline hover:text-gray-400 cursor-pointer" onClick={closeMenu}>SERVICES</span>
          </Link>
          <Link href="/portfolio" passHref>
            <span className="no-underline hover:text-gray-400 cursor-pointer" onClick={closeMenu}>PORTFOLIO</span>
          </Link>
          <Link href="/careers" passHref>
            <span className="no-underline hover:text-gray-400 cursor-pointer" onClick={closeMenu}>CAREERS</span>
          </Link>
          <Link href="/inquiry" passHref>
            <span className="no-underline hover:text-gray-400 cursor-pointer" onClick={closeMenu}>INQUIRY</span>
          </Link>
        </div>
      )}
    </nav>   
    )
}