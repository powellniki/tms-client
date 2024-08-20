import { useRouter } from "next/router.js";
import React from "react"

export default function Inquire() {
    const router = useRouter()

    const handleNavigation = () => {
        router.push('/inquiry');
      }

    return (
        <div className="bg-tms-gray text-center mt-32 pt-20 pb-20 px-4 md:px-0">
            <h2 className="font-heading lg:font-bold text-tms-white text-5xl lg:text-6xl pt-4 tracking-wider text-shadow-sm">GENERAL INQUIRIES</h2>
            <h3 className="font-heading text-tms-white text-xl lg:text-2xl mt-14 uppercase tracking-wider">For general inquiries about beginning a career with TMS</h3>
            <p className="text-tms-white font-Roboto font-light text-md lg:text-lg text-center mx-auto mt-4 md:w-2/3 lg:w-2/6">
                To explore the possibilities for your upcoming building project, please reach out to us. 
                Our dedicated team at TMS, LLC is here to provide you with expert guidance and tailored solutions to meet your construction needs.
            </p>
            <p className="text-tms-white font-Roboto font-light text-md lg:text-lg text-center mt-6">
                Contact us today to discuss how we can bring your vision to life.
            </p>
            <button 
                onClick={handleNavigation}
                className="uppercase font-heading text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-6 lg:mt-8"
            >
                <span className="tracking-widest">INQUIRE</span>
            </button>
        </div>
    )
}