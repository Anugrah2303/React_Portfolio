import { useRef } from "react"
import Heading from "../components/common/headings/Heading"
import ProjectCard from "../components/project/ProjectCard"
import { projectsData } from "../data/data"
import useGSAPHeading from "../hooks/useGSAPHeading"

const Project = () => {

  
    const projects = useRef(null);

    useGSAPHeading(".projectHeading", projects)

    return (
    <>
        <section ref={projects} className="md:px-17 pt-20">
            <div className="projectHeading">
                <Heading title="Projects" center className="scale-130" />
            </div>
            <div className="my-15 grid grid-cols-[repeat(auto-fit,minmax(335px,1fr))]  gap-y-8">
                {
                    projectsData.map((project, index) => (
                        <ProjectCard key={index} description={project.description} status={project.status} slug={project.slug} title={project.title} image={project.image} techStack={project.techStack} github={project.github} live={project.live} />
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Project