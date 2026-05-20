import SubHeading from "../components/common/headings/SubHeading"
import Heading from "../components/common/headings/Heading"
import { previewData } from "../data/data"
import ContactForm from "../components/contact/ContactForm"
import useGSAPHeading from "../hooks/useGSAPHeading"
import { useRef } from "react"
import ContactCard from "../components/contact/ContactCard"

const Contact = () => {


    const contact = useRef(null)

    useGSAPHeading(".contactHeading", contact)
    useGSAPHeading(".contactFormHeading", contact)

    return (
        <>
            <section ref={contact} className="min-h-screen py-20">
                <div className="mb-10 contactHeading">
                    <Heading title="Contact Me" center className="scale-130" />
                </div>
                <div className="flex gap-20 flex-wrap flex-col justify-center items-center ">
                    <div className="flex flex-wrap gap-6">
                        {
                            previewData.map((data, index) => (
                                <ContactCard key={index} Icon={data.Icon} title={data.title} data={data.data} />
                            ))
                        }
                    </div>
                    <div className="shadow-(--shadow-md) py-7">
                        <div className="contactFormHeading">
                            <SubHeading title="Send Message " center />
                        </div>
                        <div className="px-10 my-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact