import React, { useEffect, useState } from "react"
import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Head from "next/head.js"
import RotatingText from "@/components/rotatingText.js"
import OurImpact from "@/components/ourImpact.js"
import Inquire from "@/components/inquire.js"
import ProjectsOverview from "@/components/projectsOverview.js"
import useIntersectionObserver from "@/components/intersectionObserver.js"
import { getProjects } from "@/data/projects.js"

export default function Home() {
    const [projects, setProjects] = useState([])

    const handleReveal = (element) => {
        element.style.opacity = '1'
        element.style.transform = 'translateX(0)'
    }

    const heroRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data)
        }) 
    }, [])


    useEffect(() => {
        const elements = [heroRef];
        elements.forEach(ref => {
            const element = ref.current;
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(0px)';
                element.style.transition = 'all 1s ease-in-out';
            }
        });
    }, [heroRef])

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
                    {/* Video Background */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/landing-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="absolute inset-20 flex flex-col justify-center items-center sm:justify-end pb-16 md:pb-36 lg:pb-16">
                        <RotatingText />
                    </div>
                </div>

                <div className="px-8 md:px-0 my-12 md:my-20 lg:my-28 justify-center text-center m-auto md:w-2/3 lg:w-1/2">
                    <div ref={heroRef}>
                        <h1 className="text-tms-black font-heading lg:font-bold text-4xl md:text-5xl lg:text-6xl md:leading-snug lg:tracking-wider">
                            TMS LLC BUILDERS + MANAGERS IS A PREMIER COMMERCIAL GENERAL CONSTRUCTION MANAGEMENT FIRM BASED IN CLARKSVILLE, TENNESSEE.
                        </h1>
                        <span className="text-tms-black font-Roboto font-light block text-md md:text-xl pt-8">
                            We excel in overseeing all aspects of construction projects, ensuring top-tier quality from start to finish.
                        </span>
                        <div className="border-t border-tms-red my-12 md:my-20 lg:my-24"></div>
                    </div>
                </div>

                <OurImpact />
                {projects.length > 0 ? <ProjectsOverview projects={projects} /> : <p>Loading...</p>}
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