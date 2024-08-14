import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function History() {
    return (
        <section className="w-screen flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32">
            <div className="lg:w-1/2 w-full bg-gray-300 h-[32rem] lg:h-[32rem] aspect-w-16 aspect-h-9 flex items-center justify-center">
                <span className="text-white text-2xl">Image Placeholder</span>
            </div>
            <div className="lg:w-1/2 w-full mt-4 lg:mt-16 p-4 lg:p-8">
                <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">OUR HISTORY</h1>
                <p className="text-gray-800 text-md md:text-xl">
                    TMS history description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus nec augue facilisis, vel scelerisque ligula dapibus.
                </p>
            </div>
        </section>
    )
}

History.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}