import React from "react"
import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Head from "next/head.js"
import Image from "next/image.js"
import heroImage1 from "../public/hero-1.jpeg"
import RotatingText from "@/components/rotatingText.js"
import OurImpact from "@/components/ourImpact.js"
import Inquire from "@/components/inquire.js"
import ProjectsOverview from "@/components/projects.js"


export default function Home() {


    return (
        <>
            <Head>
                <title>Home - TMS Builders and Managers</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Home - TMS Builders and Managers" />
                <meta property="og:description" content="" />
                <meta property="og:url" content="https://www.tms.build" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.tms.build" />
            </Head>

            <main className="">
                <div className="relative w-full z-0" style={{ height: 'calc(100vh - 7rem)' }}>
                    <Image 
                        src={heroImage1} 
                        fill 
                        style={{ objectFit: 'cover' }}
                        alt="Hero Image" 
                        priority
                    />
                    <div className="absolute inset-20 flex flex-col justify-center items-center sm:justify-end pb-16 md:pb-36 lg:pb-16">
                        <RotatingText />
                    </div>
                </div>

                <div className="mt-12 mb-12 md:mt-0 md:mb-0 p-8 md:p-28 lg:m-28 justify-center text-center">
                    <div>
                        {/* For medium and smaller screens, show h2 and span separately */}
                        <h2 className="text-tms-black font-heading text-4xl md:text-5xl xl:text-6xl md:leading-snug lg:hidden text-shadow-lg">
                            TMS LLC BUILDERS + MANAGERS IS A PREMIER COMMERCIAL GENERAL CONSTRUCTION MANAGEMENT FIRM BASED IN CLARKSVILLE, TENNESSEE.
                        </h2>
                        <span className="text-tms-black block text-md md:text-xl pt-8 lg:hidden">
                            We excel in overseeing all aspects of construction projects, ensuring top-tier quality from start to finish.
                        </span>

                        {/* For larger screens, combine h2 and span into one block */}
                        <h2 className="text-tms-black hidden lg:block font-heading text-2xl md:text-4xl lg:text-5xl lg:leading-snug lg:font-bold lg:tracking-wide lg:text-shadow-md">
                            TMS LLC BUILDERS + MANAGERS IS A PREMIER COMMERCIAL GENERAL CONSTRUCTION MANAGEMENT FIRM BASED IN CLARKSVILLE, TENNESSEE. WE EXCEL IN OVERSEEING ALL ASPECTS OF CONSTRUCTION PROJECTS, ENSURING TOP-TIER QUALITY FROM START TO FINISH.
                        </h2>
                    </div>

                </div>

                <OurImpact />
                <ProjectsOverview />
                <Inquire />
            </main>
        </>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}