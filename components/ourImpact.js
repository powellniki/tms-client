import React, { useEffect } from "react"
import useIntersectionObserver from "./intersectionObserver.js"

export default function OurImpact() {
    const handleReveal = (element) => {
        element.style.opacity = '1'
        element.style.transform = 'translateX(0)'
    }

    const impactRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    useEffect(() => {
        const elements = [impactRef];
        elements.forEach(ref => {
            const element = ref.current;
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(0px)';
                element.style.transition = 'all 1s ease-in-out';
            }
        });
    }, [impactRef])

    return (
        <section className="flex flex-row justify-center m-auto px-8 md:px-0 md:w-2/3 lg:w-1/2 mt-24 lg:mt-28">
            <div ref={impactRef} className="flex flex-col w-full items-center">
                <div className="w-full border-t border-tms-red"></div>
                <h2 className="font-heading text-tms-black text-5xl lg:text-6xl tracking-wider uppercase mt-24 lg:mt-28">Our Impact</h2>
                <h3 className="font-heading text-center text-tms-black text-xl lg:text-3xl mt-12 uppercase tracking-wider">Building excellence, delivering value for over 30 years</h3>
                <p className="text-tms-black font-Roboto font-light text-md md:text-xl text-center mt-8">
                    TMS Builders + Managers has been a trusted design-build contractor in Middle Tennessee for over 30 years, specializing in warehouses, commercial renovations, schools, and office buildings. With a strong focus on craftsmanship, innovation, and timely project delivery, TMS is committed to quality, safety, and sustainability. Choosing TMS means partnering with a team that creates lasting structures and strong client relationships.
                </p>
                <div className="flex flex-row mx-6 md:mx-0 pt-4 pb-2 md:pb-12 lg:pb-2 md:mt-4">
                    <div className="p-4 text-center">
                        <h3 className="font-heading font-bold text-tms-yellow text-7xl md:text-8xl text-shadow-md tracking-wide">100+</h3>
                        <p className="mt-2 text-tms-black font-heading text-xl lg:text-2xl tracking-wider">PROJECTS COMPLETED</p>
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="font-heading font-bold text-tms-yellow text-7xl md:text-8xl text-shadow-md tracking-wide">30+</h3>
                        <p className="mt-2 text-tms-black font-heading text-xl lg:text-2xl tracking-wider">YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}