import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Link from "next/link.js"
import Image from "next/image.js"
import inquiryImage from "/public/general-inquiry.png"


export default function Inquiry() {
    return (
        <main className="w-screen">
            <div className="flex flex-col lg:flex-row p-4 md:mt-16 md:mb-24 lg:px-8">

                <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[75vh] overflow-hidden relative">
                    <Image 
                        src={inquiryImage} 
                        alt="Inquire with TMS Builders + Managers"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-sm"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:pl-16">
                    <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mb-4 tracking-wider uppercase">General Inquiries</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">If you have any questions or would like to discuss your upcoming construction project, we are here to help. </h2>
                    <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        At TMS LLC Builders + Managers, our team is ready to provide you with the information and guidance you need. 
                        Whether you are looking for more details about our services or exploring how we can tailor a solution to 
                        meet your specific construction needs, we invite you to reach out to us. Please fill out the inquiry form below, 
                        and one of our representatives will get back to you promptly. We look forward to connecting with you and 
                        assisting with your construction management needs.
                    </p>
                    <Link href="/inquiry/new" passHref>
                        <button className="uppercase font-heading font-bold text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-6 lg:mt-8">
                            <span className="tracking-widest">Contact Us</span>
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