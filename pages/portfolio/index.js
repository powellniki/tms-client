import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import ProjectsOverview from "@/components/projects.js"


export default function Portfolio() {
    return (
        <main className="w-screen">
            <div className="flex flex-col items-start m-12 md:m-20 lg:m-28">
                <h1 className="font-heading lg:font-bold text-tms-red text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Portfolio</h1>
                <h2 className="font-heading text-tms-black text-xl lg:text-2xl mt-12 uppercase tracking-wider">Brief portfolio statement.</h2>
                <p className="text-tms-black font-Roboto font-light text-md md:text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus. Proin aliquet, lacus vitae tincidunt sodales, libero mi pulvinar nulla, at consectetur enim dolor et dui.</p>
            </div>
            <div className="mb-12 md:mb-20 lg:mb-28">
                <ProjectsOverview />
                <ProjectsOverview />
                <ProjectsOverview />
            </div>
        </main>
    )
}

Portfolio.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}