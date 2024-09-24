import React from "react"
import ProjectCard from "./projectCard.js"
import Link from "next/link.js"


export default function ProjectsOverview({ projects }) {
    return (
        <section className="w-full py-12">
          <header className="flex flex-col w-full items-center py-8">
            <h1 className="font-heading text-tms-black text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Recent Projects</h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <Link href="/portfolio" passHref>
            <p className="text-tms-black font-Roboto font-light text-md md:text-xl text-center mt-8">See more projects by TMS Builders + Managers...</p>
          </Link>
        </section>
    )
}