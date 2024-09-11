import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import ProjectCarousel from "@/components/projectImageCarousel.js"
import { getProjectBySlug } from '@/data/projects'

export async function getServerSideProps({ params }) {
    const projectSlug = params.slug;
    const project = await getProjectBySlug(projectSlug)

    return {
        props: {
            project
        }
    }
}



export default function ProjectDetails({ project }) {
    return (
        <main className="w-screen flex flex-col justify-center items-center">
            <article className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-4">
                {/* Project Title */}
                <header className="mb-10">
                    <h1 className="text-tms-black font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase">
                        {project.title}
                    </h1>
                </header>

                {/* Carousel Section */}
                <ProjectCarousel images={project.images} />

                {/* Project Content */}
                <section className="prose prose-lg mx-auto text-tms-black font-Roboto mb-8">
                    <p className="font-light text-md md:text-xl leading-relaxed">
                        {project.description}
                    </p>
                </section>
            </article>
        </main>
    )
}

ProjectDetails.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}