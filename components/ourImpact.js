import React from "react";
import impactImage from "../public/hero-2.jpeg"
import Image from "next/image.js";

export default function OurImpact() {

    return (
        <div className="bg-gray-200 flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center pt-8 md:pt-0">
                <h2 className="font-heading text-tms-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-shadow-lg">OUR IMPACT</h2>
                <p className="text-xs lg:text-sm text-center pt-4 pl-2 pr-2 md:pt-4 lg:pr-8 lg:pl-8 lg:pt-8">
                    Brief impact statement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                    Brief impact statement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                
                </p>
                <div className="flex flex-row justify-center pt-2 pb-2 lg:pt-4">
                    <div className="p-2">
                        <h3 className="font-sans text-tms-yellow text-shadow-lg text-4xl md:text-5xl lg:text-6xl font-bold">100+</h3>
                        <p className="font-heading">PROJECTS COMPLETED</p>
                    </div>
                    <div className="p-2">
                        <h3 className="font-sans text-tms-yellow text-shadow-lg text-4xl md:text-5xl lg:text-6xl font-bold">30+</h3>
                        <p className="font-heading">YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <Image src={impactImage} alt="TMS Builders + Managers Our Impact Image" className="object-cover" />
            </div>
        </div>
    )
}