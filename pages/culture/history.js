import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"


export default function History() {
    return (
        <section className="w-screen flex flex-col lg:flex-row p-4 md:mt-24 md:mb-24 lg:px-8">
            <div className="w-full bg-gray-300 h-[32rem] lg:h-[32rem] lg:w-2/3 flex items-center justify-center">
                <span className="text-white text-2xl">Image Placeholder</span>
            </div>
            <div className="w-full flex flex-col justify-center p-4 lg:pl-16">
                <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mb-4 tracking-wider uppercase">Our History</h1>
                <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">Building with integrity and excellence for over 30 years</h2>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    For over 30 years, TMS LLC Builders + Managers has been a trusted partner in shaping the commercial and industrial landscape of Middle Tennessee, specializing in high-quality design-build services for warehouses, office buildings, schools, and more. Rooted in a culture of customer satisfaction, craftsmanship, and strong client relationships, TMS is known for innovative design, timely project delivery, and a commitment to quality, safety, and sustainability. TMS values ​​employee well-being, fostering a supportive work environment that enhances job satisfaction and family support. TMS is a community dedicated to excellence and long-term partnerships.
                </p>
                {/* <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    At the heart of TMS is a culture rooted in customer satisfaction, quality craftsmanship, and lasting relationships. Our clients know they can count on us for innovative design, timely project completion, and exceptional service. We ensure every project meets the highest quality, safety, and sustainability standards—whether building from the ground up or transforming existing spaces.
                </p>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    We believe that strong client relationships are the cornerstone of our success, and we foster trust and open communication in every partnership. Just as important is the well-being of our team. By prioritizing job satisfaction and family support, we create a work environment where our employees thrive, knowing their contributions are valued.
                </p>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    At TMS, we are more than builders—we are a community dedicated to excellence, care, and long-term partnerships that stand the test of time. 
                </p> */}
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