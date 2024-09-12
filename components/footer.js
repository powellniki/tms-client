// components/Footer.js
import Image from "next/image.js";
import logo from "../public/TMS-logo.jpg"
import linkedIn from "../public/linked-in-logo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-2 md:py-4">
      <div className="px-4 md:px-8 lg:px-24 flex flex-row items-center justify-between">

        {/* Left Side: Company Logo and Address */}
        <div className="flex flex-row items-start md:items-center md:space-x-5">

          {/* Company Logo */}
          <div className="flex flex-col items-start mb-2 md:mb-0">
            <Image src={logo} alt="TMS Logo" width={170} />
            <div className="text-xs mt-2">
              <p>TMS, LLC Builders & Managers</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Company Address */}
          <div className="flex flex-col justify-center ml-4 md:pl-8 pb-4 md:pb-0">
            <address className="not-italic text-xs md:text-sm">
              <h2 className="text-lg font-heading text-tms-yellow font-bold text-xl">CONTACT US</h2>
              <div className="mt-1">
                <p>TMS, LLC Builders + Managers</p>
                <p>128 N 2nd St, Suite 205, Clarksville, Tennessee 37040</p>
              </div>
              <div className="mt-2">
                <div>
                  <a href="tel:+9316472233" className="hover:text-gray-400">(931) 647-2233</a>
                </div>
                <div>
                  <a href="mailto:email@tms.build" className="hover:text-gray-400">email@tms.build</a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Right Side: LinkedIn Logo */}
        <div className="flex items-center flex flex-col lg:mr-12">
          <a href="https://www.linkedin.com/company/tms-builders-and-managers/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedIn} alt="Find us on LinkedIn" height={50} />
            <h1 className="text-sm hidden md:block ml-1">Connect with Us!</h1>
          </a>
        </div>

      </div>
    </footer>
  )
}