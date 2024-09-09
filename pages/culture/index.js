import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function Culture() {
    return (
        <section className="w-screen flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:px-8">
            <div className="w-full bg-gray-300 h-[32rem] lg:h-[32rem] lg:w-2/3 flex items-center justify-center">
                <span className="text-white text-2xl">Image Placeholder</span>
            </div>
            <div className="w-full flex flex-col justify-center p-4 lg:pl-16">
                <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mb-4 tracking-wider">OUR CULTURE</h1>
                <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">Building with integrity, building relationships, caring for people</h2>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    At TMS LLC Builders + Managers, our culture is built on a foundation of customer satisfaction, quality craftsmanship, and enduring relationships. We are committed to excellence in every project, ensuring our clients receive products and services that exceed expectations.
                </p>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    We believe that strong, long-lasting client relationships are the cornerstone of our success. By fostering open communication and trust, we aim to be a reliable partner our clients can count on for years. Equally important to us is the well-being of our team. We prioritize job satisfaction and strive to create a work environment where every employee feels valued, supported, and motivated to grow. We understand the importance of family and work-life balance, and we are proud to support our employees and their families every step of the way.
                </p>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    At TMS, we are more than builders—a community dedicated to excellence, care, and enduring partnerships.
                </p>
            </div>
        </section>
    )
}

Culture.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}