import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import careerImage from "/public/tms-image-19.webp"

//adding a comment to trigger redeploy

export default function Careers() {
    return (
        <main className="w-screen flex flex-col p-4 mt-4 mb-8 lg:mt-20 lg:mb-12 lg:px-12">
            <div className="w-full flex flex-col lg:flex-row lg:h-[40rem] flex items-center justify-center lg:mt-4">
    
                {/* Image Container */}
                <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[42rem] overflow-hidden relative">
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
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-1 lg:pl-8">
                    <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mt-4 lg:mt-0 mb-4 tracking-wider uppercase">Careers at TMS</h1>
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

            <div className="p-4 mt-12">
                <h2 className="uppercase font-heading text-tms-black text-2xl md:text-3xl lg:text-4xl">Current Career Openings</h2>

                {/* No Job Openings */}
                <div>
                    <p className="p-6 font-Roboto font-light text-md lg:text-lg">At this time, we have no current job openings. Please check back for future opportunities.</p>
                </div>

                {/* job openings */}
                {/* <div className="mt-4 md:mt-8 lg:mt-12 flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
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
                </div> */}
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