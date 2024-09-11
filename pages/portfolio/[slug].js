import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js";
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
            <article className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-4 ">
                
                {/* Project Title */}
                <header className="mb-10">
                    <h1 className="text-tms-black font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase">
                    {project.title}
                    </h1>
                </header>
        

                {/* Hero Image Section */}
                <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[75vh] overflow-hidden mb-10">
                    <Image
                    src={project.featured_image}
                    alt={`Image of ${project.title}`}
                    layout="fill"
                    objectFit="cover" // Makes the image fill the container in a balanced way
                    priority
                    className="rounded-sm shadow-lg"
                    />
                </div>
        
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