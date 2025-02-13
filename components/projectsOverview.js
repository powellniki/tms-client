import React from "react"
import ProjectCard from "./projectCard.js"
import Link from "next/link.js"


export default function ProjectsOverview({ projects }) {
    return (
        <section className="w-full mt-24 lg:mt-28">
          <header className="flex flex-col w-full items-center pb-8">
            <h1 className="font-heading text-tms-black text-5xl lg:text-6xl pt-4 tracking-wider uppercase">Featured Projects</h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <Link href="/projects" passHref>
            <p className="text-tms-black font-Roboto text-md md:text-xl text-center mt-8 hover:text-tms-red font-medium underline">More projects by TMS Builders + Managers</p>
          </Link>
        </section>
    )
}