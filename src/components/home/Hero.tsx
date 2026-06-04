import { MdOutlineFileDownload } from "react-icons/md"
import Button from "../common/buttons/Button"
import ButtonOutline from "../common/buttons/ButtonOutline"
import { links } from "../../data/data"
import Icon from "../common/icons/Icon"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import { useRef } from "react"
import myImage from "../../assets/images/IMG_20240127_180709_022.jpg"
import { Link } from "react-router-dom"
import useSlider from "../../hooks/useSlider"

const Hero = () => {

    const hero = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: ".hero-div",
            trigger: ".hero-div",
            start: "top bottom",
            end: "+=500",
        })
        triggerFade({
            target: ".text-gsap",
            trigger: ".text-gsap",
            direction: "left",
            start: "top bottom",
            end: "+=300",
        })
        triggerFade({
            target: ".btn-gsap",
            trigger: ".btn-gsap",
            direction: "up",
            distance: 20,
            start: "top bottom",
            end: "+=150",
        })
        triggerFade({
            target: ".links a",
            distance: 30,
            stagger: .2,
            trigger: ".links a",
            start: "top bottom",
            end: "+=80",
        })
    }, { scope: hero })

    const context = useSlider()
    if (!context) return null;

    const { setSliderStat } = context;

    return (
        <>
            <section className="hero" ref={hero}>
                <div className="flex justify-center items-center p-3 my-2 mx-7 flex-wrap gap-5 md:gap-0">
                    <div className="w-full md:w-1/2 h-full px-3">

                        <div className="flex flex-col justify-center gap-3 hero-div">
                            <h2 className="text-2xl text-(--avo-primary) font-secondary text-gsap">Hello , I'm </h2>
                            <h1 className="text-4xl text-(--avo-primary-dark) font-primary text-gsap">Anugrah Rakholiya.</h1>
                            <h3 className="text-(--text-secondary) text-gsap">I design & build professional websites. </h3>
                            <p className="text-(--text-muted) text-gsap">Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. I build responsive, scalable, and user-focused web applications with clean code and modern technologies.</p>
                            <div className="flex flex-wrap gap-3 my-4 ">
                                <div className="btn-gsap">
                                    <Link to="projects" onClick={() => setSliderStat(true)}>
                                        <Button value="View Projects" />
                                    </Link>
                                </div>
                                <div className="btn-gsap">
                                    <a href="/ANUGRAH_RAKHOLIYA.pdf" download={true}>
                                        <ButtonOutline value="Download CV" Icon={MdOutlineFileDownload} />
                                    </a>
                                </div>

                            </div>
                            <div className="flex gap-2.5 flex-wrap links">
                                {
                                    links.map((link, index) => (
                                        <a key={index} href={link.link} target="_blank">{<Icon Value={link.icon} options={{ size: 18 }} />}</a>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                    <div className="w-full md:w-1/2 hero-div flex justify-center items-center">
                        <div className="h-80 w-80 rounded-4xl overflow-hidden  shadow-(--shadow-primary) transition-all duration-200 hover:shadow-(--shadow-primary-hover)">
                            <img src={myImage} alt="my image" className="h-100 w-full scale-[1.35] object-contain" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero