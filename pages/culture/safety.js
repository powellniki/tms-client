import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Safety() {
    return (
        <section className="w-screen flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32">
            <div className="lg:w-1/2 w-full bg-gray-300 h-[32rem] lg:h-[32rem] aspect-w-16 aspect-h-9 flex items-center justify-center">
                <span className="text-white text-2xl">Image Placeholder</span>
            </div>
            <div className="lg:w-1/2 w-full mt-4 lg:mt-16 p-4 lg:p-8">
                <h1 className="text-gray-800 font-heading text-5xl xl:text-6xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">SAFETY</h1>
                <p className="text-gray-800 text-md lg:text-lg">
                Safety is our utmost priority at TMS, LLC due to the inherent risks and hazards in construction activities. Our comprehensive safety management protocols are designed to prevent accidents, injuries, and fatalities on the job site, ensuring the health and well-being of our workers. Maintaining strict compliance with legal and regulatory requirements fosters a strong safety culture within our company and on our job sites, enhancing productivity and, most importantly, protecting our employees.
                </p>
            </div>
        </section>
    )
}

Safety.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}