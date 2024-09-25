// components/Footer.js
import Image from "next/image.js";
import logo from "../public/TMS-logo.jpg"
import linkedIn from "../public/linked-in-logo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-28">

        {/* Row 1: Logo and All Rights Reserved */}
        <div className="flex flex-col items-start md:flex-row md:justify-around md:space-x-6 py-8 lg:py-12 border-b border-gray-600">
          <div className="flex flex-col space-y-2">
            <Image src={logo} alt="TMS Logo" width={170} />
            <p className="text-sm font-Roboto tracking-wide">All rights reserved.</p>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-4 mt-8 md:mt-0">
            <h2 className="text-lg font-bold text-tms-yellow font-heading tracking-widest uppercase">Contact Us</h2>
            <address className="not-italic space-y-2 text-sm font-Roboto tracking-wide">
              <p>TMS, LLC Builders + Managers</p>
              <p>128 N 2nd St, Suite 205, Clarksville, Tennessee 37040</p>
              <a href="tel:+9316472233" className="hover:text-gray-400 block">(931) 647-2233</a>
              <a href="mailto:info@tms.build" className="hover:text-gray-400 block">info@tms.build</a>
            </address>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col space-y-4 mt-8 md:mt-0">
            <h2 className="text-lg font-bold text-tms-yellow font-heading tracking-widest uppercase">Explore</h2>
            <ul className="space-y-2 text-sm font-Roboto tracking-wide">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-gray-400">Sitemap</a>
              </li>
              <li>
                <a href="https://www.synarcdesign.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  SynArc Design
                </a>
              </li>
            </ul>
          </div>

          {/* LinkedIn Section */}
          <div className="flex flex-col items-center space-y-2 mt-8 md:mt-0">
            <a href="https://www.linkedin.com/company/tms-builders-and-managers/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedIn} alt="LinkedIn Logo" height={40} width={40} className="hover:opacity-75" />
            </a>
          </div>
        </div>
          
        {/* Website Design Credit */}
        <div className="relative z-10 font-Roboto tracking-wide text-sm md:text-md text-center text-white py-4">
          <a 
            href="https://sandstonecds.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Website Design by Sandstone Creative
          </a>
        </div>

      </div>
    </footer>
  )
}