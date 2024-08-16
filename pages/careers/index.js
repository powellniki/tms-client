import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Careers() {
    return (
        <main className="w-screen">

            <div className="flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32">
                <div className="lg:w-1/2 w-full bg-gray-300 h-[32rem] lg:h-[32rem] aspect-w-16 aspect-h-9 flex items-center justify-center">
                    Image placeholder
                </div>
                <div className="lg:w-1/2 w-full mt-4 lg:mt-16 p-4 lg:p-8">
                    <h1 className="uppercase text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">
                        Careers at TMS
                    </h1>
                    <p className="text-gray-800 text-md lg:text-lg">
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