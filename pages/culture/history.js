import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import photo from "/public/tms-image-8.webp"


export default function History() {
    return (
        <div className="w-screen flex flex-col mb-12 lg:mb-20">
            <div className="w-screen flex flex-col lg:flex-row mb-12 lg:mt-16 lg:mb-16 lg:px-12">
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
                <div className="w-full flex flex-col justify-center p-4 lg:p-4">
                    <h1 className="text-tms-red font-heading text-5xl xl:text-6xl md:leading-snug mt-4 lg:mt-0 mb-4 tracking-wider uppercase">Our History</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-2 lg:mt-4 uppercase tracking-wider">Building with integrity and excellence for over 30 years </h2>
                    <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                    For over 30 years, TMS Builders + Managers has been a trusted partner in shaping the commercial and industrial landscape of Middle Tennessee, specializing in high-quality design-build services for warehouses, office buildings, schools, and more. Rooted in a culture of customer satisfaction, craftsmanship, and strong client relationships, TMS is known for innovative design, timely project delivery, and a commitment to quality, safety, and sustainability. TMS values ​​employee well-being, fostering a supportive work environment that enhances job satisfaction and family support. TMS is a community dedicated to excellence and long-term partnerships.
                    </p>
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="flex flex-col items-center text-center px-10 md:px-12 lg:px-12 py-12 lg:my-16 lg:pt-20">
                    <h2 className="font-heading text-tms-red text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Past Clients</h2>
                    <p className="font-heading md:w-2/3 text-tms-black text-xl lg:text-2xl mt-12 uppercase tracking-wider">
                    Trusted partnerships across industries and sectors
                    </p>
                    <p className="text-tms-black md:w-2/3 font-Roboto font-light text-md md:text-lg mt-4">Over the years, TMS has earned the trust of government agencies, commercial leaders, and nonprofit organizations alike. Our work spans military installations, federal departments, financial institutions, manufacturers, and community nonprofits—each project a reflection of our dedication to quality and collaboration.</p>
                </div>

                {/*  Government Contracts  */}
                <div  className="w-full flex flex-col lg:flex-row">
                    <div className="w-full py-4 md:p-8 lg:w-1/2 lg:py-8 lg:px-8 flex items-center justify-center">
                        <div className="w-full md:h-[30rem] lg:h-[44rem] aspect-square relative shadow-lg">
                            <Image
                                src={photo}
                                alt=""
                                className="object-cover rounded-sm"
                                layout="fill" // This keeps the image contained within the square
                                quality={90}
                                priority
                            />
                        </div>
                    </div>
                
                    <div className="w-full px-4 md:px-10 pb-8 lg:pb-0 lg:w-1/2 lg:p-4 flex flex-col justify-center lg:mr-8">
                        <h3 className="font-heading text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Government Contracts</h3>
                        {/* <p className="font-heading text-tms-black text-lg lg:text-xl pt-8 uppercase tracking-wider">Pre-construction is the phase of a construction project that occurs before actual building begins.</p> */}
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">US Army Corps of Engineers</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Ft Campbell KY Directorate of Contracting</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">U.S. Fish and Wildlife Service</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">U.S. Department of Interior</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">U.S. Department of Agriculture</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">U.S. Department of Transportation</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Federal Aviation Administration</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">City of Clarksville</p>
                    </div>
                </div>

                {/*  Private Commercial Clients  */}
                <div  className="w-screen flex flex-col lg:flex-row">
                    <div className="w-full py-4 md:p-8 lg:w-1/2 lg:py-8 lg:px-8 flex items-center justify-center">
                        <div className="w-full md:h-[30rem] lg:h-[44rem] aspect-square relative shadow-lg">
                            <Image
                                src={photo}
                                alt=""
                                className="object-cover rounded-sm"
                                layout="fill"
                                quality={90}
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 md:px-10 pb-8 lg:pb-0 lg:w-1/2 lg:p-4 flex flex-col justify-center lg:mr-8">
                        <h3 className="font-heading text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Private Commercial Clients</h3>
                        {/* <p className="font-heading text-tms-black text-lg lg:text-xl pt-8 uppercase tracking-wider">Design-build is an integrated project delivery method</p> */}
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Jenkins and Wynne Ford, Lincoln, Honda</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Cumberland Electric Membership Cooperative</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Farmers & Merchants Bank (F&M)</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">First Advantage Bank</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Beach Oil Company</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Nashville Wire Products</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Midsouth Wire Products</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">3rd Generation Real Estate Holding Group</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Nashville Display</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Convenient Car Care (Valvoline Instant Oil Change)</p>
                    </div>
                </div>

                {/*  Non-Profit Clients  */}
                <div  className="w-screen flex flex-col lg:flex-row">
                    <div className="w-full py-4 md:p-8 lg:w-1/2 lg:py-8 lg:px-8 flex items-center justify-center">
                        <div className="w-full md:h-[30rem] lg:h-[44rem] aspect-square relative shadow-lg">
                            <Image
                                src={photo}
                                alt=""
                                className="object-cover rounded-sm"
                                layout="fill"
                                quality={90}
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 md:px-10 pb-8 lg:pb-0 lg:w-1/2 lg:p-4 flex flex-col justify-center lg:mr-8">
                        <h3 className="font-heading text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Non-Profit Clients</h3>
                        {/* <p className="font-heading text-tms-black text-lg lg:text-xl pt-8 uppercase tracking-wider">Design-build is an integrated project delivery method</p> */}
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Manna Café Ministries</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">First Baptist Church of St. Bethlehem</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">First Baptist Church Clarksville</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Bethel Community Church</p>
                        <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">Loaves and Fishes</p>
                    </div>
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