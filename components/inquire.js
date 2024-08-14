import { useRouter } from "next/router.js";
import React from "react"

export default function Inquire() {
    const router = useRouter()

    const handleNavigation = () => {
        router.push('/inquiry');
      }

    return (
        <div className="p-8 text-center mt-32 mb-28">
            <h2 className="font-heading text-tms-black text-5xl xl:text-6xl text-shadow-lg">GENERAL INQUIRIES</h2>
            <p className="mt-8 pl-4 pr-4 md:pl-12 md:pr-12 lg:pr-40 lg:pl-40">For general inquiries about beginning a career with TMS or to explore the possibilities for your upcoming building project, please reach out to us. Our dedicated team at TMS, LLC is here to provide you with expert guidance and tailored solutions to meet your construction needs. Contact us today to discuss how we can bring your vision to life.</p>
            <button 
                onClick={handleNavigation}
                className="uppercase font-heading font-bold text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-6 lg:mt-8"
            >
                INQUIRE
            </button>
        </div>
    )
}