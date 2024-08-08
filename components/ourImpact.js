import React from "react";
import impactImage from "../public/hero-2.jpeg"
import Image from "next/image.js";

export default function OurImpact() {

    return (
        <div className="bg-gray-200 p-8 md:p-4 flex flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:p-8">
                <h2 className="p-4 font-heading text-4xl md:text-5xl lg:text-7xl text-tms-red text-shadow-lg">OUR IMPACT</h2>
                <p className="text-xs sm:text-sm md:pr-2 pt-2 md:pt-4 text-center">
                    Brief impact statement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                </p>
                <div className="flex flex-row p-4">
                    <div className="pl-4 pr-4">
                        <h3 className="text-tms-yellow text-shadow-lg text-4xl md:text-5xl lg:text-7xl font-bold">100+</h3>
                        <p className="font-heading">PROJECTS COMPLETED</p>
                    </div>
                    <div className="pl-4 pr-4">
                        <h3 className="text-tms-yellow text-shadow-lg text-4xl md:text-5xl lg:text-7xl font-bold">30+</h3>
                        <p className="font-heading">YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:pl-2 lg:pr-2 md:w-1/2 flex items-center justify-center">
                <Image src={impactImage} alt="TMS Builders + Managers Our Impact Image" className="object-cover" />
            </div>
        </div>
    )
}