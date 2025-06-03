import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import photo from "/public/tms-image-8.webp"


export default function History() {
    return (
        <div className="w-[100vw] flex flex-col">
            
            <div className="w-full flex flex-col lg:flex-row mb-12 lg:mt-16 lg:mb-16 px-12 lg:px-16">
                <div className="w-full h-[32rem] md:h-[36rem] lg:h-[44rem] flex items-center justify-center p-4">
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
                    <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mt-4 lg:mt-0 mb-4 tracking-wider uppercase">Our History</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">Building with integrity and excellence for over 30 years </h2>
                    <p className="text-gray-800 text-base font-Roboto font-light mt-3">
                        For over 30 years, TMS Builders + Managers has been a trusted partner in shaping the commercial and industrial landscape of Middle Tennessee, specializing in high-quality design-build services for warehouses, office buildings, schools, and more. Rooted in a culture of customer satisfaction, craftsmanship, and strong client relationships, TMS is known for innovative design, timely project delivery, and a commitment to quality, safety, and sustainability. TMS values ​​employee well-being, fostering a supportive work environment that enhances job satisfaction and family support. TMS is a community dedicated to excellence and long-term partnerships.
                    </p>
                </div>
            </div>

            <div className="w-full bg-gray-200 flex flex-col px-[1rem] md:px-[6rem] lg:px-[7rem] lg:pt-16 lg:pb-16">

                <div className="flex flex-col py-4 lg:my-8 lg:pt-2">
                    <h2 className="font-heading text-tms-red text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Past Clients</h2>
                    <p className="font-heading text-tms-black text-xl lg:text-2xl mt-12 uppercase tracking-wider">
                        Trusted partnerships across industries and sectors
                    </p>
                    <p className="text-tms-black font-Roboto font-light text-md md:text-lg mt-4">Over the years, TMS has earned the trust of government agencies, commercial leaders, and nonprofit organizations alike. Our work spans military installations, federal departments, financial institutions, manufacturers, and community nonprofits—each project a reflection of our dedication to quality and collaboration.</p>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-x-4">
                    {/*  Government Contracts  */}
                    <div  className="flex-1 mt-8 lg:mt-0 lg:p-4">
                        <div>
                            <h3 className="font-heading text-tms-black text-2xl lg:text-3xl tracking-wider uppercase">Government Contracts</h3>
                            <ul className="text-gray-800 list-disc text-base font-Roboto font-light ml-8 mt-4">
                                <li className="mt-3">US Army Corps of Engineers
                                    <ul className="ml-8">
                                        <li className="mt-1">Louisville District</li>
                                        <li className="mt-1">Savannah District</li>
                                        <li className="mt-1">South Atlantic Division</li>
                                        <li className="mt-1">Ft. Bragg, North Carolina</li>
                                        <li className="mt-1">Ft. Stewart, Georgia</li>
                                        <li className="mt-1">Hunter Army Airfield, Georgia</li>
                                        <li className="mt-1">Dobbins Air Reserve Base, Georgia</li>
                                        <li className="mt-1">Ft. Knox, Kentucky</li>
                                        <li className="mt-1">Ft. Benning, Georgia</li>
                                        <li className="mt-1">Camp McKall, North Carolina</li>
                                    </ul>
                                </li>
                                <li className="mt-3">Ft Campbell KY Directorate of Contracting</li>
                                <li className="mt-3">U.S. Fish and Wildlife Service</li>
                                <li className="mt-3">U.S. Department of Interior</li>
                                <li className="mt-3">U.S. Department of Agriculture</li>
                                <li className="mt-3">U.S. Department of Transportation</li>
                                <li className="mt-3">Federal Aviation Administration</li>
                                <li className="mt-3">City of Clarksville</li>
                            </ul>
                        </div>
                    </div>

                    {/*  Private Commercial Clients  */}
                    <div  className="flex-1 mt-8 lg:mt-0 lg:p-4">
                        <div className="">
                            <h3 className="font-heading text-tms-black text-2xl lg:text-3xl tracking-wider uppercase">Private Commercial Clients</h3>
                            <ul className="text-gray-800 list-disc text-base font-Roboto font-light ml-8 mt-4">
                                <li className="mt-3">Jenkins and Wynne Ford, Lincoln, Honda</li>
                                <li className="mt-3">Cumberland Electric Membership Cooperative</li>
                                <li className="mt-3">Farmers & Merchants Bank (F&M)</li>
                                <li className="mt-3">First Advantage Bank</li>
                                <li className="mt-3">Beach Oil Company</li>
                                <li className="mt-3">Nashville Wire Products</li>
                                <li className="mt-3">Midsouth Wire Products</li>
                                <li className="mt-3">3rd Generation Real Estate Holding Group</li>
                                <li className="mt-3">Nashville Display</li>
                                <li className="mt-3">Convenient Car Care (Valvoline Instant Oil Change)</li>
                            </ul>
                        </div>
                    </div>

                    {/*  Non-Profit Clients  */}
                    <div  className="flex-1 my-8 lg:my-0 lg:p-4">
                        <div className="">
                            <h3 className="font-heading text-tms-black text-2xl lg:text-3xl tracking-wider uppercase">Non-Profit Clients</h3>
                            <ul className="text-gray-800 list-disc text-base font-Roboto font-light ml-8 mt-4">
                                <li className="mt-3">Manna Café Ministries</li>
                                <li className="mt-3">First Baptist Church of St. Bethlehem</li>
                                <li className="mt-3">First Baptist Church Clarksville</li>
                                <li className="mt-3">Bethel Community Church</li>
                                <li className="mt-3">Loaves and Fishes</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="lg:pt-8 font-gray-800 text-base font-Roboto font-medium">
                    <p>All of these clients would be pleased to provide references and share their experience while working with TMS</p>
                </div>
            </div>
        </div>
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