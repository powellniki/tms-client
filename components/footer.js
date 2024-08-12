// components/Footer.js
import Image from "next/image.js";
import logo from "../public/TMS-logo.jpg"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-2 md:py-4">
      <div className="container px-4 md:px-8 lg:px-12 flex md:flex-row items-start items-center">

        {/* Company Logo */}
        <div className="flex flex-col items-start mb-2 w-[18rem] md:w-auto md:mb-0 md:mr-10">
          <Image src={logo} alt="TMS Logo" width={170} />
          <div className="text-xs mt-2">
            <p>TMS, LCC Builders & Managers</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Company Address */}
        <address className="not-italic text-xs md:text-sm flex flex-col justify-center pl-4 md:pl-2 pb-4 md:pb-0">
          <h2 className="text-lg font-heading text-tms-yellow font-bold text-xl">CONTACT US</h2>
          <div className="mt-1">
            <p>TMS, LLC Builders + Managers</p>
            <p>128 N 2nd St, Suite 205, Clarksville, Tennessee 37040</p>
          </div>
          <div className="mt-2">
            <p href="tel:+9316472233" className="hover:text-gray-400">
              <a>(931)647-2233</a>
            </p>
            <p href="mailto:email@tms.build" className="hover:text-gray-400">
              <a>email@tms.build</a>
            </p>
          </div>
        </address>

      </div>
    </footer>
  )
}