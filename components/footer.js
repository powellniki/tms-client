// components/Footer.js
import Image from "next/image.js";
import logo from "../public/TMS-logo.jpg"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex md:flex-row items-start md:items-center">

        {/* Company Logo */}
        <div className="flex flex-col items-start mb-4 md:mb-0 md:mr-10">
          <Image src={logo} alt="TMS Logo" width={170} />
          <div className="text-xs mt-2">
            <p>TMS, LCC Builders & Managers</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Company Address */}
        <address className="not-italic text-sm">
          <h2 className="text-lg font-heading">CLARKSVILLE <span className="text-tms-yellow font-bold text-xl p-1">|</span> NASHVILLE</h2>
          <p>TMS, LLC Builders + Managers</p>
          <p>128 N 2nd St, Suite 205, Clarksville, Tennessee 37040</p>

          <h2 className="pt-2 text-lg font-heading">CONTACT US</h2>
          <p href="tel:+9316472233" className="hover:text-gray-400">
            <a>(931)647-2233</a>
          </p>
          <p href="mailto:email@tms.build" className="hover:text-gray-400">
            <a>email@tms.build</a>
          </p>
        </address>

      </div>
    </footer>
  )
}