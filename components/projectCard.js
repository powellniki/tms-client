import React, { useEffect } from "react"
import useIntersectionObserver from "./intersectionObserver.js"
import Image from "next/image.js"
import Link from "next/link.js"

export default function ProjectCard({project}) {
    const handleReveal = (element) => {
        element.style.opacity = '1'
        element.style.transform = 'translateX(0)'
    }

    const projectCardRef = useIntersectionObserver(handleReveal, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })


    useEffect(() => {
        const elements = [projectCardRef];
        elements.forEach(ref => {
            const element = ref.current;
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(-20px)';
                element.style.transition = 'all 1s ease-in-out';
            }
        });
    }, [projectCardRef])

  // Using Next.js <Image> component for optimization
  const imageUrl = project.featured_image;

  return (
    <div ref={projectCardRef} className="relative h-[28rem] w-full">
      <Link href={`/portfolio/${project.slug}`} passHref>
        <div className="block relative w-full h-full">
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="shadow-md"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-50 transition duration-300 ease-in-out">
            <h2 className="text-white font-heading p-8 text-3xl md:text-4xl lg:text-5xl uppercase text-shadow-xl tracking-wider text-center">
              {project.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
    )
}