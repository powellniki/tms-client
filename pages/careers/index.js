import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Careers() {
    return (
        <main className="w-screen">
            <div className="flex flex-col lg:flex-row lg:mt-12">
                <div className="bg-gray-400 h-[24rem] md:h-[28rem] lg:h-[32rem] lg:w-1/2 lg:m-8">
                    Image placeholder
                </div>
                <div className="lg:w-1/2 m-4 md:m-8 lg:m-8 lg:pt-4">
                    <h1 className="uppercase font-heading text-tms-red text-5xl lg:text-6xl text-shadow-lg pt-8 md:pt-8 lg:pt-16">
                        Careers at TMS
                    </h1>
                    <p className="pt-8 lg:pt-12 lg:pr-4 text-md lg:text-lg">
                        Are you ready to build a rewarding career with a leading construction management firm? 
                        At TMS LLC Builders + Managers, we are always looking for talented, dedicated professionals 
                        to join our team. We offer a dynamic work environment where you can grow and thrive, working 
                        on exciting projects that make a real impact. Explore our open career opportunities and 
                        discover how you can contribute to our commitment to excellence in construction. Apply today 
                        and take the first step toward a fulfilling career with TMS.
                    </p>
                </div>
            </div>

            <div className="m-4 md:m-8 lg:m-12">
                <h2 className="uppercase font-heading text-tms-black text-3xl md:text-4xl lg:text-5xl text-shadow-lg pt-8 lg:pt-8">Current Career Openings</h2>

                {/* job openings */}
                <div className="mt-4 md:mt-8 lg:mt-12 flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
                    <h3 className="uppercase font-heading text-xl">Job Title</h3>
                    <div className="text-xl">⮕</div>
                </div>
                <div className="flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
                    <h3 className="uppercase font-heading text-xl">Job Title</h3>
                    <div className="text-xl">⮕</div>
                </div>
                <div className="flex flex-row justify-between border-b border-gray-300 p-4 lg:mx-12">
                    <h3 className="uppercase font-heading text-xl">Job Title</h3>
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