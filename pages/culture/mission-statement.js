import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import photoOne from "/public/tms-image-8.webp"
import photoTwo from "/public/tms-image-4.webp"


export default function Mission() {
    return (
        <section className="w-screen flex flex-col lg:flex-row mb-12 lg:mt-16 lg:mb-20 lg:px-12">
        {/* Left Column: Two Stacked Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full h-[32rem] md:h-[36rem] lg:h-[44rem] flex items-center justify-center lg:p-4">
                <Image
                    src={photoOne}
                    alt="TMS Image 1"
                    className="h-full w-full object-cover"
                    width={2048}
                    height={1365}
                    quality={90}
                    priority
                />
            </div>
            <div className="w-full h-[32rem] md:h-[36rem] lg:h-[44rem] flex items-center justify-center lg:p-4 hidden lg:block">
                <Image
                    src={photoTwo}
                    alt="TMS Image 2"
                    className="h-full w-full object-cover"
                    width={2048}
                    height={1365}
                    quality={90}
                    priority
                />
            </div>
        </div>

        {/* Right Column: All Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-4">
            <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mt-4 lg:mt-0 mb-4 tracking-wider uppercase">
                Our Mission
            </h1>
            <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">
                Where Expertise, Trust, and Quality Meet
            </h2>
            <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                At TMS, LLC we are committed to upholding the highest standards of excellence through our unwavering dedication to the following core principles:
            </p>

            <div className="text-gray-800 font-bold ml-[16%] my-8">
                <p>Quality...</p>
                <p className="ml-[8%]">People</p>
                <p className="ml-[16%]">Processes</p>
                <p className="ml-[22%]">Technology & Skill</p>
                <p className="ml-[32%]">Proficiency</p>
                <p className="ml-[40%]">Relationships</p>
                <p className="ml-[48%]">Business Practices</p>
                <p className="ml-[56%]">At Work</p>
            </div>

            <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                TMS LLC has a long-standing history of reflecting our dedication to &quot;Quality&quot;.
                In its simplest form, our mission is to foster a team of 
                <span className="text-gray-800 text-md lg:text-lg font-Roboto font-medium"> highly dedicated people using their skills for the benefit of others. </span>
                We are driven by a commitment to excellence, integrity, and service in all that we do.
            </p>

            <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-8 lg:mt-4">
                At the heart of TMS LLC is a deep commitment to treating others as we would want to be treated as taught in the Bible.
                This is displayed to our clients through honesty and fair dealings.
                The Bible and the teachings of Jesus Christ inspire our actions, from this we promote the highest ethical standards in all our interactions—
                with clients, designers, subcontractors, vendors, each other, and all others we engage with.
            </p>

            <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                We believe that to provide the best products and services, we must stay fully informed and ahead of industry trends.
                Our approach to excellence is straightforward:
            </p>

            <div className="text-gray-800 font-bold ml-[16%] my-8">
                <p>Quality People</p>
                <p className="ml-[8%]">+ Quality Know-How</p>
                <p className="ml-[16%]">+ Quality Attitude</p>
                <p className="ml-[22%]">+ Quality Processes</p>
                <p className="ml-[32%]">+ Timely Completion of Jobs</p>
                <p className="ml-[40%]">= Satisfied Customers</p>
            </div>

            <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                Our greatest badge of honor is the trust we&apos;ve earned from the many organizations, 
                customers, and individuals who have chosen TMS Contracting, LLC to fulfill their construction needs.
                This trust reflects our commitment to quality in everything we do.
            </p>

            <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                TMS LLC strives to be recognized among the very best in the construction industry. 
                We achieve this by providing innovative and effective solutions to our customer&apos;s construction needs, 
                delivering superior performance, ensuring absolute reliability, and maintaining uncompromising integrity.
            </p>

            <div className="text-gray-800 font-bold flex mx-auto mt-8">
                <p>This is our definition of &quot;Quality&quot;</p>
            </div>
        </div>
    </section>
    )
}

Mission.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}