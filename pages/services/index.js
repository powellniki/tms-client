import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Services() {
    return (
        <article className="mt-16 md:mt-20 lg:mt-24 mb-32">
            <h1 className="w-screen font-heading text-tms-red text-5xl lg:text-6xl text-shadow-lg text-center md:mb-8">OUR SERVICES</h1>

            <section className="w-screen flex flex-col lg:flex-row mt-12 p-2 md:p-4 md:mt-2 lg:p-8">
                <div className="lg:w-1/2 w-full bg-gray-300 h-[28rem] md:h-[32rem] flex items-center justify-center">
                    <span className="text-white text-2xl">Image Placeholder</span>
                </div>
                <div className="lg:w-1/2 w-full mt-4 p-4 lg:mt-16 lg:pl-8">
                    <h1 className="text-gray-800 font-heading text-4xl lg:text-5xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">PRE-CONSTRUCTION</h1>
                    <p className="text-gray-800 text-md md:text-xl pr-4">
                        Pre-construction is the phase of a construction project that occurs before actual building begins. This critical stage involves detailed planning, design, budgeting, scheduling, and feasibility analysis. During pre-construction, our team at TMS, LLC works closely with clients to outline project objectives, identify potential challenges, and develop strategies to ensure a smooth and successful construction process. Services may include site analysis, cost estimation, value engineering, and permitting. By thoroughly preparing in the pre-construction phase, we ensure that projects are delivered on time, within budget, and to the highest quality standards.
                    </p>
                </div>
            </section>

            <section className="w-screen flex flex-col lg:flex-row-reverse mt-12 p-2 md:p-4 md:mt-2 lg:p-8">
                <div className="lg:w-1/2 w-full bg-gray-300 h-[28rem] md:h-[32rem] flex items-center justify-center">
                    <span className="text-white text-2xl">Image Placeholder</span>
                </div>
                <div className="lg:w-1/2 w-full mt-4 p-4 lg:mt-16 lg:pr-8 lg:text-end">
                    <h1 className="text-gray-800 font-heading text-4xl lg:text-5xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">GENERAL CONTRACTING</h1>
                    <p className="text-gray-800 text-md md:text-xl">
                        General Contracting description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus.
                    </p>
                </div>
            </section>

            <section className="w-screen flex flex-col lg:flex-row mt-12 p-2 md:p-4 md:mt-2 lg:p-8">
                <div className="lg:w-1/2 w-full bg-gray-300 h-[28rem] md:h-[32rem] flex items-center justify-center">
                    <span className="text-white text-2xl">Image Placeholder</span>
                </div>
                <div className="lg:w-1/2 w-full mt-4 p-4 lg:mt-16 lg:pl-8">
                    <h1 className="text-gray-800 font-heading text-4xl lg:text-5xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">DESIGN-BUILD</h1>
                    <p className="text-gray-800 text-md md:text-xl pr-4">
                        Design-build is an integrated project delivery method where TMS, as a single entity design-build team, works under one contract to provide both design and construction services. This streamlined approach fosters collaboration and ensures clear communication from the project's inception to completion. By unifying design and construction responsibilities, design-build can lead to faster project completion, reduced costs, and minimized risk for the client. At TMS, LLC, we use the design-build method to deliver efficient, high-quality projects that meet our client's specific needs and expectations.
                    </p>
                </div>
            </section>

            <section className="w-screen flex flex-col lg:flex-row-reverse mt-12 p-2 md:p-4 md:mt-2 lg:p-8">
                <div className="lg:w-1/2 w-full bg-gray-300 h-[28rem] md:h-[32rem] flex items-center justify-center">
                    <span className="text-white text-2xl">Image Placeholder</span>
                </div>
                <div className="lg:w-1/2 w-full mt-4 p-4 lg:mt-16 lg:pr-8 lg:text-end">
                    <h1 className="text-gray-800 font-heading text-4xl lg:text-5xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">PROGRAM MANAGEMENT</h1>
                    <p className="text-gray-800 text-md md:text-xl">
                        At TMS LLC Builders + Managers, our Program Management involves overseeing a portfolio of related construction projects from inception to completion, ensuring they align with our clients' strategic objectives. Our program management services encompass project planning, coordination, and execution across multiple projects, facilitating efficient resource allocation, risk management, and communication. By integrating all aspects of the program, we ensure that each project progresses smoothly, stays on schedule, and adheres to budgetary constraints. Our commitment to excellence and attention to detail ensure that our clients achieve their overarching goals with cohesive and high-quality outcomes.                    </p>
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