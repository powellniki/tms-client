import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Head from "next/head.js"
import Image from "next/image.js"
import heroImage1 from "../public/hero-1.jpeg"

import RotatingText from "@/components/rotatingText.js"
import OurImpact from "@/components/ourImpact.js"

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
                    <div className="absolute inset-20 flex flex-col justify-center md:justify-end items-center pb-16">
                        <RotatingText />
                    </div>
                </div>

                <div className="p-12 md:p-32 justify-center text-center">
                    <h2 className="font-heading text-xl md:text-4xl lg:text-5xl text-shadow-md">TMS LLC BUILDERS + MANAGERS IS A PREMIER COMMERCIAL GENERAL CONSTRUCTION MANAGEMENT FIRM BASED IN CLARKSVILLE, TENNESSEE. WE EXCEL IN OVERSEEING ALL ASPECTS OF CONSTRUCTION PROJECTS, ENSURING TOP-TIER QUALITY FROM START TO FINISH.</h2>
                    <p className=" pb-0 pt-8 md:pt-12 text-sm md:text-md">Brief company descriptor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.</p>
                </div>
                <OurImpact />

                <div className="p-12">
                    <h1 className="p-4 font-heading text-4xl md:text-5xl lg:text-7xl text-tms-red text-shadow-lg">RECENT PROJECTS</h1>
                </div>

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