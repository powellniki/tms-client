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
            <div className="flex flex-col text-center items-center px-4 my-24 md:my-52 lg:my-56">
                <h1 className="uppercase tracking-wider font-heading text-center text-tms-red text-5xl lg:text-6xl mb-8">
                    Thank You For Your Inquiry
                </h1>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4 w-2/3 mx-auto">
                    We have successfully received your submission and appreciate your interest 
                    in TMS LLC Builders + Managers. One of our representatives will review your information and get back to 
                    you shortly. We look forward to discussing how we can assist with your construction needs.
                </p>
                <button
                    onClick={navigateHome}
                    className="uppercase tracking-wider font-heading text-[25px] bg-tms-yellow text-white text-shadow-sm py-2 w-48 hover:bg-tms-black hover:text-tms-white mt-6 lg:mt-8"
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