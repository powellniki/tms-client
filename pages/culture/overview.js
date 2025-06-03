import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import photo from '/public/tms-image-4.webp'

export default function Culture() {
    return (
        <section className="w-screen flex flex-col lg:flex-row mb-12 lg:mt-16 lg:mb-20 lg:px-12">
            <div className="w-full h-[32rem] md:h-[36rem] lg:h-[44rem] flex items-center justify-center lg:p-4">
                <Image
                    src={photo}
                    alt="Amare Montessori School, Clarksville Tennessee"
                    className="h-full w-full object-cover"
                    width={4429}
                    height={2560}
                    quality={90}
                    objectFit="cover"
                    objectPosition="center"
                    priority
                ></Image>
            </div>
            <div className="w-full flex flex-col justify-center p-4">
                <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mt-4 lg:mt-0 mb-4 tracking-wider uppercase">Our Culture</h1>
                <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">Building with integrity, building relationships, caring for people</h2>
                <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    At TMS Builders + Managers, our culture is built on a foundation of customer satisfaction, quality craftsmanship, and enduring relationships. We are committed to excellence in every project, ensuring our clients receive products and services that exceed expectations.
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