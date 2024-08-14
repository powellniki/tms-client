import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Link from "next/link.js"


export default function Inquiry() {
    return (
        <main className="w-screen">
            <div className="flex flex-col lg:flex-row lg:mt-12 mb-12">
                <div className="bg-gray-400 h-[24rem] md:h-[28rem] lg:h-[32rem] lg:w-1/2 lg:m-8">
                    Image placeholder
                </div>
                <div className="lg:w-1/2 m-4 md:m-8 lg:m-8 lg:pt-4">
                    <h1 className="uppercase font-heading text-tms-red text-5xl lg:text-6xl text-shadow-lg pt-8 md:pt-8 lg:pt-16">
                        General Inquiries
                    </h1>
                    <p className="pt-8 lg:pt-12 lg:pr-4 text-md lg:text-lg">
                    If you have any questions or would like to discuss your upcoming construction project, we are here to help. 
                    At TMS LLC Builders + Managers, our team is ready to provide you with the information and guidance you need. 
                    Whether you are looking for more details about our services or exploring how we can tailor a solution to 
                    meet your specific construction needs, we invite you to reach out to us. Please fill out the inquiry form below, 
                    and one of our representatives will get back to you promptly. We look forward to connecting with you and 
                    assisting with your construction management needs.
                    </p>
                    <Link href="/inquiry/new" passHref>
                        <button className="uppercase font-heading font-bold text-lg bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-6 lg:mt-8">
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