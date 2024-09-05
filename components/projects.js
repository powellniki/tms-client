import React, { useEffect } from "react"
import useIntersectionObserver from "./intersectionObserver.js"

export default function ProjectsOverview() {
    const handleReveal = (element) => {
        element.style.opacity = '1'
        element.style.transform = 'translateX(0)'
    }

    const projectOneRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })
    const projectTwoRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })
    const projectThreeRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })

    useEffect(() => {
        const elements = [projectOneRef, projectTwoRef, projectThreeRef];
        elements.forEach(ref => {
            const element = ref.current;
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(-20px)';
                element.style.transition = 'all 1s ease-in-out';
            }
        });
    }, [projectOneRef, projectTwoRef, projectThreeRef])

    return (
        <section className="mt-6 lg:mt-14">
            <div className="flex flex-col md:flex-row px-4 lg:px-8 text-center">
                <div ref={projectOneRef} className="md:w-1/3 md:p-2">
                    <div className="relative w-full flex justify-center items-center">
                        <div className="bg-gray-300 mt-6 md:mt-0 w-full h-[25rem] md:w-[15rem] md:h-[18rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                            
                        </div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-tms-white hover:text-tms-black font-heading text-4xl md:text-3xl lg:text-5xl uppercase text-shadow-lg tracking-wider">
                            Project Title
                        </h2>
                    </div>
                </div>
                <div ref={projectTwoRef} className="md:w-1/3 md:p-2">
                    <div className="relative w-full flex justify-center items-center">
                        <div className="bg-gray-300 mt-6 md:mt-0 w-full h-[25rem] md:w-[15rem] md:h-[18rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                            
                        </div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-tms-white hover:text-tms-black font-heading text-4xl md:text-3xl lg:text-5xl uppercase text-shadow-lg tracking-wider">
                            Project Title
                        </h2>
                    </div>
                </div>
                <div ref={projectThreeRef} className="md:w-1/3 md:p-2">
                    <div className="relative w-full flex justify-center items-center">
                        <div className="bg-gray-300 mt-6 md:mt-0 w-full h-[25rem] md:w-[15rem] md:h-[18rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                            
                        </div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-tms-white hover:text-tms-black font-heading text-4xl md:text-3xl lg:text-5xl uppercase text-shadow-lg tracking-wider">
                            Project Title
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}