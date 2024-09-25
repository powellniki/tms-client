import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import ProjectCard from "@/components/projectCard.js"
import { getProjects } from "@/data/projects.js"
import { useEffect, useState } from "react"


export default function Portfolio() {
    const [projectsList, setProjectsList] = useState([])

    useEffect(() => {
        getProjects().then(data => {
            setProjectsList(data)
        })
    }, [])


    return (
        <main className="w-full pb-16">
            <div className="flex flex-col items-center text-center px-10 md:px-12 lg:px-12 py-12 lg:pt-20">
                <h1 className="font-heading text-tms-red text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Featured Projects</h1>
                <h2 className="font-heading md:w-2/3 text-tms-black text-xl lg:text-2xl mt-12 uppercase tracking-wider">Building a Legacy of Construction Excellence</h2>
                <p className="text-tms-black md:w-2/3 font-Roboto font-light text-md md:text-lg mt-4">
                Explore a selection of construction projects completed over the years. From commercial renovations to large-scale developments, each project reflects the company&apos;s commitment to quality, craftsmanship, and timely delivery.
                </p>
            </div>

            {/* Grid layout with responsive spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-20 lg:mb-28 px-4 md:px-8 lg:px-12">
                {projectsList.length > 0 ? (
                    projectsList.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index}/>
                    ))
                ) : (
                    <p className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500">No projects available</p>
                )}
            </div>
        </main>
    )
}

Portfolio.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="">{page}</section>
        </Layout>
    )
}