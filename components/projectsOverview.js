import React from "react"
import ProjectCard from "./projectCard.js"


export default function ProjectsOverview({ projects }) {
    return (
        <section className="w-full py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
    )
}