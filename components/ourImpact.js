import React from "react";
import impactImage from "../public/hero-2.jpeg"
import Image from "next/image.js";

export default function OurImpact() {

    return (
        <section className="flex flex-row justify-center m-auto px-8 md:px-0 md:w-2/3 lg:w-1/2">
            {/* <div className="w-full lg:w-1/2 flex items-center justify-center pt-0">
                <Image src={impactImage} alt="TMS Builders + Managers Our Impact Image" className="object-cover" />
            </div> */}
            <div className="flex flex-col w-full items-center mt-12 mb-12 lg:m-0">
                <h2 className="font-heading font-bold text-tms-black text-5xl lg:text-6xl pt-4 tracking-wider">OUR IMPACT</h2>
                <h3 className="font-heading text-tms-black text-xl lg:text-2xl mt-12 uppercase tracking-wider">Brief impact statement.</h3>
                <p className="text-tms-black font-Roboto font-light text-md md:text-lg text-center mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                </p>
                <div className="flex flex-row mx-6 md:mx-0 pt-4 pb-2 md:pb-12 lg:pb-2 md:mt-4">
                    <div className="p-4">
                        <h3 className="font-heading font-bold text-tms-yellow text-7xl md:text-8xl text-shadow-light">100+</h3>
                        <p className="mt-2 text-tms-black font-heading text-xl lg:text-2xl">PROJECTS COMPLETED</p>
                    </div>
                    <div className="p-4">
                        <h3 className="font-heading font-bold text-tms-yellow text-7xl md:text-8xl text-shadow-light">30+</h3>
                        <p className="mt-2 text-tms-black font-heading text-xl lg:text-2xl">YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}