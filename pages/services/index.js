import Layout from "@/components/layout.js"
import Navbar from "@/components/navbar.js"
import Image from "next/image.js"
import image1 from "/public/pre-construction.webp"
import image3 from "/public/design-build.webp"
import image4 from "/public/careers-inquiry.png"
import useIntersectionObserver from "@/components/intersectionObserver.js"
import { useEffect } from "react"


export default function Services() {

    const handleReveal = (element) => {
        element.style.opacity = '1'
        element.style.transform = 'translateX(0)'
    }

    const serviceHeaderRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })
    const serviceOneRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })
    const serviceTwoRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })
    const serviceThreeRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    useEffect(() => {
        const elements = [serviceHeaderRef, serviceOneRef, serviceTwoRef, serviceThreeRef];
        elements.forEach(ref => {
            const element = ref.current;
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(0px)';
                element.style.transition = 'all 1s ease-in-out';
            }
        });
    }, [serviceHeaderRef, serviceOneRef, serviceTwoRef, serviceThreeRef])



    return (
        <article className="w-[100vw] pb-16">

            <div ref={serviceHeaderRef} className="flex flex-col items-start px-10 md:px-12 lg:px-12 py-12 lg:py-20">
                <h1 className="font-heading lg:font-bold text-tms-red text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Our Services</h1>
                <h2 className="font-heading w-3/4 text-tms-black text-xl lg:text-2xl mt-12 uppercase tracking-wider">
                    At TMS Builders + Managers, we offer a comprehensive range of services designed to guide your project from concept to completion. 
                </h2>
                <p className="text-tms-black font-Roboto font-light text-md md:text-lg mt-4">Whether you need pre-construction planning, design-build expertise, or program management, our experienced team is dedicated to delivering exceptional results. With a focus on quality, communication, and efficiency, we tailor our services to meet the unique needs of every client and project.</p>
            </div>

            {/*  Pre-Construction  */}
            <section ref={serviceOneRef} className="w-full flex flex-col lg:flex-row">
                <div className="w-full p-8 lg:w-1/2 lg:py-8 lg:px-8 flex items-center justify-center">
                    <div className="w-full md:h-[30rem] lg:h-auto aspect-square relative">
                        <Image
                            src={image1}
                            alt=""
                            className="object-cover"
                            layout="fill" // This keeps the image contained within the square
                            quality={90}
                            priority
                        />
                    </div>
                </div>
                <div className="w-full px-10 pb-8 lg:pb-0 lg:w-1/2 lg:p-4 flex flex-col justify-center lg:mr-8">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Pre-Construction</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 uppercase tracking-wider">
                        Pre-construction is the phase of a construction project that occurs before actual building begins.
                    </h2>
                    <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        This critical stage involves detailed planning, design, budgeting, scheduling, and feasibility analysis. During pre-construction, our team at TMS works closely with clients to outline project objectives, identify potential challenges, and develop strategies to ensure a smooth and successful construction process. Services may include site analysis, cost estimation, value engineering, and permitting. By thoroughly preparing in the pre-construction phase, we ensure that projects are delivered on time, within budget, and to the highest quality standards.
                    </p>
                </div>
            </section>

            {/*  Design Build  */}
            <section ref={serviceTwoRef} className="w-screen flex flex-col lg:flex-row">
                <div className="w-full p-8 lg:w-1/2 lg:py-8 lg:px-8 flex items-center justify-center">
                    <div className="w-full md:h-[30rem] lg:h-auto aspect-square relative">
                        <Image
                            src={image3}
                            alt=""
                            className="object-cover"
                            layout="fill"
                            quality={90}
                            priority
                        />
                    </div>
                </div>
                <div className="w-full px-10 pb-8 lg:pb-0 lg:w-1/2 lg:p-4 flex flex-col justify-center lg:mr-8">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Design Build</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 uppercase tracking-wider">
                        Design-build is an integrated project delivery method
                    </h2>
                    <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        Design-Build is where TMS, as a single entity design-build team, works under one contract to provide both design and construction services. This streamlined approach fosters collaboration and ensures clear communication from the project&apos;s inception to completion. By unifying design and construction responsibilities, design-build can lead to faster project completion, reduced costs, and minimized risk for the client. At TMS, we use the design-build method to deliver efficient, high-quality projects that meet our client&apos;s specific needs and expectations.
                    </p>
                </div>
            </section>

            {/*  Program Management  */}
            <section ref={serviceThreeRef} className="w-screen flex flex-col lg:flex-row">
                <div className="w-full p-8 lg:w-1/2 lg:py-8 lg:px-8 flex items-center justify-center">
                    <div className="w-full md:h-[30rem] lg:h-auto aspect-square relative">
                        <Image
                            src={image4}
                            alt=""
                            className="object-cover object-left"
                            layout="fill"
                            quality={90}
                            priority
                        />
                    </div>
                </div>
                <div className="w-full px-10 pb-8 lg:pb-0 lg:w-1/2 lg:p-4 flex flex-col justify-center lg:mr-8">
                    <h1 className="font-heading lg:font-bold text-tms-black text-3xl lg:text-4xl tracking-wider uppercase">Program Management</h1>
                    <h2 className="font-heading text-tms-black text-lg lg:text-xl pt-8 uppercase tracking-wider">
                        Our Program Management involves overseeing a portfolio of related construction projects from inception to completion
                    </h2>
                    <p className="text-gray-800 text-md lg:text-lg font-Roboto font-light mt-2 lg:mt-4">
                        At TMS Builders + Managers, we ensure they align with our clients&apos; strategic objectives. Our program management services encompass project planning, coordination, and execution across multiple projects, facilitating efficient resource allocation, risk management, and communication. By integrating all aspects of the program, we ensure that each project progresses smoothly, stays on schedule, and adheres to budgetary constraints. Our commitment to excellence and attention to detail ensure that our clients achieve their overarching goals with cohesive and high-quality outcomes.
                    </p>
                </div>
            </section>

        </article>
    )
}

Services.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar/>
            <section className="container">{page}</section>
        </Layout>
    )
}