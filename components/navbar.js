import Link from "next/link.js"

export default function Navbar() {


  return (
      <nav className="bg-gray-800 p-12 text-white flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">TMS Logo</p>
        </div>
        <div className="flex space-x-8">
          <Link href='/' className="no-underline text-white hover:text-gray-400">HOME</Link>
          <Link href="/culture" className="no-underline text-white hover:text-gray-400">CULTURE</Link>
          <Link href="/services" className="no-underline text-white hover:text-gray-400">SERVICES</Link>
          <Link href="/portfolio" className="no-underline text-white hover:text-gray-400">PORTFOLIO</Link>
          <Link href="/careers" className="no-underline text-white hover:text-gray-400">CAREERS</Link>
          <Link href="/inquiry" className="no-underline text-white hover:text-gray-400">INQUIRY</Link>
        </div>
      </nav>
    )
}