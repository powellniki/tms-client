// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} TMS, Builders & Managers. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/services" className="hover:text-gray-400">Services</Link>
            <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
            <Link href="/team" className="hover:text-gray-400">Our Team</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}