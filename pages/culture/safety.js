import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Safety() {
    return (
        <section className="w-screen flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:px-8">
            <div className="w-full bg-gray-300 h-[32rem] lg:h-[32rem] lg:w-2/3 flex items-center justify-center">
                <span className="text-white text-2xl">Image Placeholder</span>
            </div>
            <div className="w-full flex flex-col justify-center p-4 lg:pl-16">
                <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mb-4 tracking-wider">OUR SAFETY</h1>
                <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">At TMS Builders + Managers, we are committed to safety above all</h2>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
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