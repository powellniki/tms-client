import { useRouter } from "next/router.js";
import React from "react"

export default function Inquire() {
    const router = useRouter()

    const handleNavigation = () => {
        router.push('/inquiry');
      }

    return (
        <div className="bg-gray-200 p-8 pt-12 text-center">
            <h2 className="font-heading text-tms-red text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-shadow-lg">GENERAL INQUIRIES</h2>
            <p className="pt-4 pb-4 pl-4 pr-4 md:pl-24 md:pr-24">For general inquiries about beginning a career with TMS or to explore the possibilities for your upcoming building project, please reach out to us. Our dedicated team at TMS, LLC is here to provide you with expert guidance and tailored solutions to meet your construction needs. Contact us today to discuss how we can bring your vision to life.</p>
            <button 
                onClick={handleNavigation}
                className="m-2 py-2 px-6 bg-tms-yellow text-white"
            >
                INQUIRE
            </button>
        </div>
    )
}