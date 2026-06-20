import { FaEye, FaGithub } from "react-icons/fa"
import type { ProjectCardProps } from "../../types/type"
import { Link } from "react-router-dom"
import MiniButtonOutline from "./MiniButtonOutline"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import useSlider from "../../hooks/useSlider"

const statusStyles = {
    Developing: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    Completed: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    LIVE: "bg-green-200/10 text-green-800 text-lg border-green-500/20",
}

const ProjectCard = ({ title, description, image, status, techStack, github, live, slug }: ProjectCardProps) => {

    const projectCardRef = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: projectCardRef.current,
            trigger: projectCardRef.current,
            start: "top bottom",
            end: "+=300"
        })
        triggerFade({
            target: ".cardBadge",
            trigger: ".cardBadge",
            distance: 500,
            direction: "left",
            start: "bottom bottom",
            end: "+=200"
        })
        triggerFade({
            target: ".cardImage",
            trigger: ".cardImage",
            distance: 500,
            direction: "right",
            start: "top bottom",
            end: "+=200"
        })
        triggerFade({
            target: ".cardTitle",
            trigger: ".cardTitle",
            distance: 150,
            direction: "right",
            start: "top bottom",
            end: "+=300"
        })
        triggerFade({
            target: ".cardDescription",
            trigger: ".cardDescription",
            distance: 150,
            direction: "left",
            start: "top bottom",
            end: "+=300"
        })
    }, { scope: projectCardRef })

    const context = useSlider()
    if (!context) return null;

    return (
        <div ref={projectCardRef} className="w-84 group relative overflow-hidden rounded-[28px] border   border-(--border-light) bg-(--bg-card) shadow-(--shadow-sm) transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(132,204,22,0.15)]">

            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-(--avo-primary)/10 blur-3xl opacity-100 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative h-56 overflow-hidden">
                <img src={image} alt={title} className="cardImage h-full mx-auto object-contain transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-linear-to-t from-(--avo-primary)/30 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 cardBadge">
                    <span className={`rounded-full border px-3 py-1 text-lg font-extrabold tracking-wide backdrop-blur-sm ${statusStyles[status]}`}>
                        {status}
                    </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">

                    {github && (
                        <a href={github} target="_blank" className=" flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/50 text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">
                            <FaGithub size={22} />
                        </a>

                    )}

                    {live && (
                        <a href={live} target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-(--avo-primary) text-white transition-all duration-300 hover:scale-110">
                            <FaEye size={22} />
                        </a>
                    )}
                </div>
            </div>

            <div className="relative p-6">
                <Link to={`/projects/${slug}`} onClick={() => context.setSliderStat(true)}>
                    <div className="cardTitle flex items-start justify-between gap-3">
                        <h3 className="hover:border-b-2 hover:text-blue-800 cursor-pointer hover:w-20 w-0 transition-all duration-200 text-2xl font-bold tracking-tight text-(--text-primary)">
                            {title}

                        </h3>

                        <div className="h-3 w-3 rounded-full bg-(--avo-primary) shadow-[0_0_20px_var(--avo-primary)]" />
                    </div>

                    <p className="cardDescription mt-3 text-sm w-60 leading-relaxed text-(--text-secondary)">
                        {description}
                    </p>

                    <div className="mt-5 w-60 flex flex-wrap gap-2">
                        {techStack?.map((tech, index) => (
                            <MiniButtonOutline key={index} tech={tech} />
                        ))}
                    </div>

                </Link>
                <div className="mt-6 flex items-center gap-2">
                    <div className="h-1 w-14 rounded-full bg-(--avo-primary) transition-all duration-500 group-hover:w-28" />
                    <div className="h-0.5 flex-1 rounded-full bg-(--border-light)" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard