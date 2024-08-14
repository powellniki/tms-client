import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Link from "next/link.js"


export default function Inquiry() {
    return (
        <main className="w-screen">

            <div className="flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32">
                <div className="lg:w-1/2 w-full bg-gray-300 h-[32rem] lg:h-[32rem] aspect-w-16 aspect-h-9 flex items-center justify-center">
                    Image placeholder
                </div>
                <div className="lg:w-1/2 w-full mt-4 lg:mt-16 p-4 lg:p-8">
                    <h1 className="uppercase text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug text-shadow-lg mb-4 lg:mb-8">
                        General Inquiries
                    </h1>
                    <p className="text-gray-800">
                    If you have any questions or would like to discuss your upcoming construction project, we are here to help. 
                    At TMS LLC Builders + Managers, our team is ready to provide you with the information and guidance you need. 
                    Whether you are looking for more details about our services or exploring how we can tailor a solution to 
                    meet your specific construction needs, we invite you to reach out to us. Please fill out the inquiry form below, 
                    and one of our representatives will get back to you promptly. We look forward to connecting with you and 
                    assisting with your construction management needs.
                    </p>
                    <Link href="/inquiry/new" passHref>
                        <button className="uppercase font-heading font-bold text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-6 lg:mt-8">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

Inquiry.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}