import React from "react"
import Image from "next/image.js"

export default function ProjectsOverview() {

    return (
        <section className="text-center mt-32 mb-32">
            <h1 className="font-heading text-gray-900 text-5xl xl:text-6xl text-shadow-lg pb-8">CURRENT PROJECTS</h1>
            <div className="flex flex-col lg:flex-row px-2 lg:px-4 text-center">

                <div className="w-full lg:w-1/3 lg:m-1 bg-gray-100 p-2 mb-8 mb-0">
                    <div className="w-full">
                        <div className="bg-gray-300 p-2 h-[24rem] md:h-[32rem] lg:h-[32rem] flex items-center justify-center">
                            image placeholder
                        </div>
                    </div>
                    <h2 className="text-left text-gray-900 text-2xl lg:text-3xl font-bold mt-4 pb-2">Project Title</h2>
                    <p className="text-left line-clamp-2">
                        Brief project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                    </p>
                    <p className="text-tms-red mt-2 mb-2 text-left underline">Read More</p>
                </div>

                <div className="w-full lg:w-1/3 lg:m-1 bg-gray-100 p-2 mb-8 mb-0">
                    <div className="w-full">
                        <div className="bg-gray-300 p-2 h-[24rem] md:h-[32rem] lg:h-[32rem] flex items-center justify-center">
                            image placeholder
                        </div>
                    </div>
                    <h2 className="text-left text-gray-900 text-2xl lg:text-3xl font-bold mt-4 pb-2">Project Title</h2>
                    <p className="text-left line-clamp-2">
                        Brief project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                    </p>
                    <p className="text-tms-red mt-2 mb-2 text-left underline">Read More</p>
                </div>

                <div className="w-full lg:w-1/3 lg:m-1 bg-gray-100 p-2 mb-8 mb-0">
                    <div className="w-full">
                        <div className="bg-gray-300 p-2 h-[24rem] md:h-[32rem] lg:h-[32rem] flex items-center justify-center">
                            image placeholder
                        </div>
                    </div>
                    <h2 className="text-left text-gray-900 text-2xl lg:text-3xl font-bold mt-4 pb-2">Project Title</h2>
                    <p className="text-left line-clamp-2">
                        Brief project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.
                    </p>
                    <p className="text-tms-red mt-2 mb-2 text-left underline">Read More</p>
                </div>

            </div>
        </section>
    )
}