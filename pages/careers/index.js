import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import careerImage from "/public/careers-inquiry.png"


export default function Careers() {
    return (
        <main className="w-screen">
            <div className="flex flex-col lg:flex-row p-4 md:mt-16 md:mb-24 lg:px-8">
    
                {/* Image Container */}
                <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[75vh] overflow-hidden relative">
                    <Image
                    src={careerImage}
                    alt="Careers at TMS"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left center"
                    className="rounded-sm"
                    />
                </div>
        
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:pl-16">
                    <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mb-4 tracking-wider uppercase">Careers at TMS</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">Build a rewarding career with a leading construction management firm</h2>
                    <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    At TMS LLC Builders + Managers, we are always looking for talented, dedicated professionals 
                    to join our team. We offer a dynamic work environment where you can grow and thrive, working 
                    on exciting projects that make a real impact. Explore our open career opportunities and 
                    discover how you can contribute to our commitment to excellence in construction. Apply today 
                    and take the first step toward a fulfilling career with TMS.
                    </p>
                </div>
            </div>

            <div className="mx-8 md:mx-8 lg:mx-32">
                <h2 className="uppercase font-heading text-tms-black text-3xl md:text-4xl lg:text-5xl pt-8 lg:pt-8">Current Career Openings</h2>

                {/* job openings */}
                <div className="mt-4 md:mt-8 lg:mt-12 flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
                    <h3 className="font-heading text-tms-black text-lg lg:text-xl uppercase tracking-wider uppercase">Job Title</h3>
                    <div className="text-xl">⮕</div>
                </div>
                <div className="flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
                    <h3 className="font-heading text-tms-black text-lg lg:text-xl uppercase tracking-wider uppercase">Job Title</h3>
                    <div className="text-xl">⮕</div>
                </div>
                <div className="flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
                    <h3 className="font-heading text-tms-black text-lg lg:text-xl uppercase tracking-wider uppercase">Job Title</h3>
                    <div className="text-xl">⮕</div>
                </div>
            </div>
        </main>
    )
}

Careers.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}