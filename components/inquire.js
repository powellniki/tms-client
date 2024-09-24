import { useRouter } from "next/router.js";
import React, { useEffect } from "react"
import useIntersectionObserver from "./intersectionObserver.js";

export default function Inquire() {
    const router = useRouter()

    const handleReveal = (element) => {
        element.style.opacity = '1'
        element.style.transform = 'translateX(0)'
    }

    const inquireRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    useEffect(() => {
        const elements = [inquireRef];
        elements.forEach(ref => {
            const element = ref.current;
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(0px)';
                element.style.transition = 'all 1s ease-in-out';
            }
        });
    }, [inquireRef])

    const handleNavigation = () => {
        router.push('/inquiry');
      }

    return (
        <div className="bg-tms-gray text-center mt-32 py-28 px-4 md:px-0">
            <div ref={inquireRef}>
                <h2 className="font-heading w-2/3 lg:w-1/2 mx-auto text-tms-white text-3xl lg:text-4xl tracking-wider text-shadow-sm uppercase">explore the possibilities for your upcoming building project</h2>
                {/* <h3 className="font-heading text-tms-white text-xl lg:text-2xl mt-14 uppercase tracking-wider"></h3> */}
                <p className="text-tms-white font-Roboto font-light text-md lg:text-lg text-center mx-auto mt-6 w-2/3 lg:w-1/2">
                    Our dedicated team at TMS Builders + Managers is here to provide you with expert guidance and tailored solutions to meet your construction needs.
                </p>
                {/* <p className="text-tms-white w-2/3 lg:w-1/2 mx-auto font-Roboto font-regular text-md lg:text-lg text-center mt-4">
                    Contact us today to discuss how we can bring your vision to life.
                </p> */}
                <button 
                    onClick={handleNavigation}
                    className="uppercase font-heading text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-md mt-6 lg:mt-8"
                >
                    <span className="tracking-widest uppercase">Inquire</span>
                </button>
            </div>
        </div>
    )
}