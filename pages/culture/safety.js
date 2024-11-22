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
                    TMS Builders + Managers is committed to maintaining the highest safety standards in all construction and remodeling projects. We take a proactive
                    approach to create secure, efficient work environments by cultivating a strong culture of safety. Our team works closely with subcontractors to ensure 
                    safety practices are fully integrated into their operations. This collaborative effort guarantees that every project not only meets but surpasses 
                    industry standards, delivering exceptional results and providing our clients with confidence and peace of mind.
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