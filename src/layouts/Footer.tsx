import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { CgMail } from "react-icons/cg"
import { FaLocationCrosshairs } from "react-icons/fa6"
import triggerFade from "../animations/triggerFade";

const Footer = () => {

    const footer = useRef(null);

    useGSAP(() => {
        triggerFade({
            target: footer.current,
            direction: "up",
            trigger: "footer",
            start: "top bottom",
            end: "+=10",
            scrub: false
        })
    })

    return (
        <>
            <div className="overflow-hidden">
                <footer ref={footer} style={{ background: "var(--gradient-primary)" }} className="py-3 rounded-full mb-2 mx-1.5 md:mx-7 flex justify-between items-center flex-wrap ">
                    <div className="flex items-center gap-2 px-5">
                        <CgMail size={25} />
                        <h2>23biit081@gmail.com</h2>
                    </div>
                    <div className="flex items-center gap-2 px-5">
                        <FaLocationCrosshairs />
                        <h2>Surat, Gujarat.</h2>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer