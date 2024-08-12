import { useRouter } from "next/router.js";
import React from "react"

export default function Inquire() {
    const router = useRouter()

    const handleNavigation = () => {
        router.push('/inquiry');
      }

    return (
        <div className="p-8 text-center mt-32 mb-28">
            <h2 className="font-heading text-gray-900 text-5xl xl:text-6xl text-shadow-lg">GENERAL INQUIRIES</h2>
            <p className="mt-8 pl-4 pr-4 md:pl-12 md:pr-12 lg:pr-40 lg:pl-40">For general inquiries about beginning a career with TMS or to explore the possibilities for your upcoming building project, please reach out to us. Our dedicated team at TMS, LLC is here to provide you with expert guidance and tailored solutions to meet your construction needs. Contact us today to discuss how we can bring your vision to life.</p>
            <button 
                onClick={handleNavigation}
                className="mt-8 py-2 px-8 border border-tms-yellow border-2 text-tms-yellow hover:bg-tms-yellow hover:text-white text-header text-md font-bold"
            >
                INQUIRE
            </button>
        </div>
    )
}