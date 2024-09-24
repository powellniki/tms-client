import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import image1 from "/public/pre-construction.webp"
import image3 from "/public/design-build.webp"
import image4 from "/public/careers-inquiry.png"


export default function Services() {
    return (
        <article className="">

            <h1 className="w-screen border-b font-heading text-tms-red text-5xl lg:text-6xl text-center tracking-wider pt-16 pb-8 lg:pt-20 lg:pb-12">OUR SERVICES</h1>

            <section className="w-screen flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-gray-300 h-[36rem] md:h-[48rem] flex items-center justify-center">
                    <Image
                        src={image1}
                        alt=""
                        className="h-full w-full object-cover"
                        width={1006}
                        height={663}
                        quality={90}
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    ></Image>
                </div>
                <div className="w-full md:w-1/2 pb-12 md:pb-0 pt-10 px-10 lg:pt-28 lg:px-28">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Pre-Construction</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 lg:mt-12 uppercase tracking-wider">Pre-construction is the phase of a construction project that occurs before actual building begins. </h2>
                    <p className="text-gray-800 text-md md:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        This critical stage involves detailed planning, design, budgeting, scheduling, and feasibility analysis. During pre-construction, our team at TMS works closely with clients to outline project objectives, identify potential challenges, and develop strategies to ensure a smooth and successful construction process. Services may include site analysis, cost estimation, value engineering, and permitting. By thoroughly preparing in the pre-construction phase, we ensure that projects are delivered on time, within budget, and to the highest quality standards.
                    </p>
                </div>
            </section>

            {/* <section className="w-screen flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 bg-gray-300 h-[36rem] md:h-[48rem] flex items-center justify-center">
                    <span className="text-white text-2xl">Image Placeholder</span>
                </div>
                <div className="w-full md:w-1/2 md:text-end pb-12 mdpb-0 pt-10 px-10 lg:pt-28 lg:px-28">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider">GENERAL CONTRACTING</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 lg:mt-12 uppercase tracking-wider">General Contracting description. Lorem ilgum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className="text-gray-800 text-md md:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus.
                    </p>
                </div>
            </section> */}

            <section className="w-screen flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-1/2 bg-gray-300 h-[36rem] md:h-[48rem] flex items-center justify-center">
                    <Image
                        src={image3}
                        alt=""
                        className="h-full w-full object-cover"
                        width={1006}
                        height={663}
                        quality={90}
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    ></Image>
                </div>
                <div className="w-full md:w-1/2 pb-12 mdpb-0 pt-10 px-10 lg:pt-28 lg:px-28">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Design Build</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 lg:mt-12 uppercase tracking-wider">Design-build is an integrated project delivery method</h2>
                    <p className="text-gray-800 text-md md:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        Design-Build is where TMS, as a single entity design-build team, works under one contract to provide both design and construction services. This streamlined approach fosters collaboration and ensures clear communication from the project&apos;s inception to completion. By unifying design and construction responsibilities, design-build can lead to faster project completion, reduced costs, and minimized risk for the client. At TMS, we use the design-build method to deliver efficient, high-quality projects that meet our client&apos;s specific needs and expectations.
                    </p>
                </div>
            </section>

            <section className="w-screen flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-gray-300 h-[36rem] md:h-[48rem] flex items-center justify-center">
                    <Image
                        src={image4}
                        alt=""
                        className="h-full w-full object-cover"
                        width={1131}
                        height={664}
                        quality={90}
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    ></Image>
                </div>
                <div className="w-full md:w-1/2 md:text-end pb-12 mdpb-0 pt-10 px-10 lg:pt-28 lg:px-28">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Program Management</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 lg:mt-12 uppercase tracking-wider">Our Program Management involves overseeing a portfolio of related construction projects from inception to completion</h2>
                    <p className="text-gray-800 text-md md:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        At TMS Builders + Managers, we ensure they align with our clients&apos; strategic objectives. Our program management services encompass project planning, coordination, and execution across multiple projects, facilitating efficient resource allocation, risk management, and communication. By integrating all aspects of the program, we ensure that each project progresses smoothly, stays on schedule, and adheres to budgetary constraints. Our commitment to excellence and attention to detail ensure that our clients achieve their overarching goals with cohesive and high-quality outcomes.</p>
                </div>
            </section>

        </article>
    )
}

Services.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}