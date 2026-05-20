import { FaLocationArrow } from "react-icons/fa"
import Button from "../common/buttons/Button"
import Input from "../common/input/Input"
import { useRef, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { useGSAP } from "@gsap/react"
import triggerFade from "../../animations/triggerFade"
import Textarea from "../common/input/Teaxtarea"

const ContactForm = () => {


    const form = useRef<HTMLFormElement>(null)

    const sendMail = (e: FormEvent) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        ).then(() => {
            toast.success("Message sended successfully")
            form?.current?.reset()
        })
            .catch((error) => {
                console.log(error)
                toast.error("Failed to send message")
                form?.current?.reset()
            })
    }

    useGSAP(() => {
        triggerFade({
            target: ".inputs",
            trigger: ".inputs",
            direction: "left",
            distance: 400,
            start: "top bottom",
            end: "+=300",
        })
        triggerFade({
            target: ".inputBtn",
            trigger: ".inputBtn",
            direction: "right",
            distance: 150,
            start: "top bottom",
            end: "+=300",
        })
    }, { scope: form })

    return (
        <>
            <form className="max-w-180 contactForm" ref={form} onSubmit={sendMail}>
                <div className="flex flex-wrap gap-5 my-2">
                    <div className="inputs">
                        <Input label="Full Name" name="name" required />
                    </div>
                    <div className="inputs">
                        <Input label="email" name="email" type="email" required />
                    </div>
                </div>
                <div className="inputs my-5">
                    <Textarea label="message" name="message" />
                </div>
                <div className="text-center inputBtn" >
                    <Button value="Send Message" Icon={FaLocationArrow} type="submit" />
                </div>
            </form>
        </>
    )
}

export default ContactForm