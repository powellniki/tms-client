import Link from "next/link.js"
import Image from "next/image.js"
import logo from "../public/TMS-logo.jpg"

export default function Navbar() {


  return (
      <nav className="bg-gray-800 p-2 text-white flex justify-between items-center">
        <div>
          <Image src={logo} alt="TMS Logo" width={200} />
        </div>
        <div className="flex items-center space-x-4">
            <Link href="/" passHref><span className="no-underline hover:text-gray-400 cursor-pointer">HOME</span></Link>
                <span className="text-red-500 font-bold text-xl pb-1">|</span>
            <Link href="/culture" passHref><span className="no-underline hover:text-gray-400 cursor-pointer">CULTURE</span></Link>
                <span className="text-red-500 font-bold text-xl pb-1">|</span>
            <Link href="/services" passHref><span className="no-underline hover:text-gray-400 cursor-pointer">SERVICES</span></Link>
                <span className="text-red-500 font-bold text-xl pb-1">|</span>
            <Link href="/portfolio" passHref><span className="no-underline hover:text-gray-400 cursor-pointer">PORTFOLIO</span></Link>
                <span className="text-red-500 font-bold text-xl pb-1">|</span>
            <Link href="/careers" passHref><span className="no-underline hover:text-gray-400 cursor-pointer">CAREERS</span></Link>
                <span className="text-red-500 font-bold text-xl pb-1">|</span>
            <Link href="/inquiry" passHref><span className="no-underline hover:text-gray-400 cursor-pointer">INQUIRY</span></Link>
        </div>
      </nav>
    )
}