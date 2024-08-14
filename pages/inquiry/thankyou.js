import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import { useRouter } from "next/router.js"


export default function InquiryThankYou() {
    const router = useRouter()

    const navigateHome = () => {
        router.push('/')
    }


    return (
        <main className="w-screen flex items-center justify-center">
            <div className="flex flex-col text-center px-4 mt-24 md:mt-52 lg:mt-64">
                <h1 className="uppercase font-heading text-center text-tms-red text-5xl lg:text-6xl text-shadow-lg mb-8">
                    Thank You For Your Inquiry
                </h1>
                <p className="text-md md:text-lg lg:text-xl mt-4 md:mt-8 lg:mt-12 px-4 md:px-8">
                    Thank you for your inquiry! We have successfully received your submission and appreciate your interest 
                    in TMS LLC Builders + Managers. One of our representatives will review your information and get back to 
                    you shortly. We look forward to discussing how we can assist with your construction needs.
                </p>
                <button
                    onClick={navigateHome}
                    className="uppercase font-heading font-bold text-xl bg-tms-yellow text-tms-white py-3 w-48 hover:bg-tms-black hover:text-tms-white text-shadow-sm mt-8 lg:mt-12 mx-auto"
                >
                    return home
                </button>
            </div>
        </main>
    )
}

InquiryThankYou.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}