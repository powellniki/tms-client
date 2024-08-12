import React from "react";
import impactImage from "../public/hero-2.jpeg"
import Image from "next/image.js";

export default function OurImpact() {

    return (
        <section className="bg-tms-red flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex items-center justify-center pt-0">
                <Image src={impactImage} alt="TMS Builders + Managers Our Impact Image" className="object-cover" />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 items-center justify-center mt-12 mb-12 lg:m-0 ">
                <h2 className="font-heading text-white text-5xl md:text-5xl xl:text-6xl text-shadow-lg pt-4">OUR IMPACT</h2>
                <p className="text-white text-md md:text-lg text-center pt-4 pl-6 pr-6 md:pt-8 md:pl-12 md:pr-12 lg:pr-20 lg:pl-20 lg:pt-8 text-shadow-lg">
                    Brief impact statement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                </p>
                <div className="flex flex-row justify-center pt-4 pb-2 md:pb-12 lg:pb-2 md:mt-4">
                    <div className="p-4">
                        <h3 className="font-heading text-tms-yellow text-shadow-lg text-6xl md:text-7xl">100+</h3>
                        <p className="text-white font-heading text-shadow-light text-xl">PROJECTS COMPLETED</p>
                    </div>
                    <div className="p-4">
                        <h3 className="font-heading text-tms-yellow text-shadow-lg text-6xl md:text-7xl">30+</h3>
                        <p className="text-white font-heading text-shadow-light text-xl">YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}