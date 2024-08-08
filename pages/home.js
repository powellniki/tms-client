import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Head from "next/head.js"
import Image from "next/image.js"
import heroImage1 from "../public/hero-1.jpeg"
import impactImage from "../public/hero-2.jpeg"
import RotatingText from "@/components/rotatingText.js"

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
                    <div className="w-full md:pl-4 md:pr-4 md:w-1/2 flex items-center justify-center">
                        <Image src={impactImage} alt="TMS Builders + Managers Our Impact Image" className="object-cover" />
                    </div>
                </div>

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