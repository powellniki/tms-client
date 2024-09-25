import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import photo from "/public/tms-image-16.webp"


export default function Safety() {
    return (
        <section className="w-screen flex flex-col lg:flex-row mb-12 lg:mt-16 lg:mb-20 lg:px-12">
            <div className="w-full h-[32rem] md:h-[36rem] lg:h-[44rem] flex items-center justify-center lg:p-4">
                <Image
                    src={photo}
                    alt=""
                    className="h-full w-full object-cover"
                    width={4000}
                    height={2250}
                    quality={90}
                    objectFit="cover"
                    objectPosition="center"
                    priority
                ></Image>
            </div>
            <div className="w-full flex flex-col justify-center p-4 lg:p-4">
                <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mt-4 lg:mt-0 mb-4 tracking-wider uppercase">OUR SAFETY</h1>
                <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">At TMS Builders + Managers, we are committed to safety above all</h2>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    Safety is our utmost priority at TMS due to the inherent risks and hazards in construction activities. Our comprehensive safety management protocols are designed to prevent accidents, injuries, and fatalities on the job site, ensuring the health and well-being of our workers. Maintaining strict compliance with legal and regulatory requirements fosters a strong safety culture within our company and on our job sites, enhancing productivity and, most importantly, protecting our employees.
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