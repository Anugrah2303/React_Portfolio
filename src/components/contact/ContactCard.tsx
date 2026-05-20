import { useGSAP } from '@gsap/react'
import type { previewDataInterface } from '../../types/type'
import IconBtn from '../common/icons/Icon'
import triggerFade from '../../animations/triggerFade'
import { useRef } from 'react'

const ContactCard = ({ Icon, title, data }: previewDataInterface) => {

    const contactCard = useRef(null)

    useGSAP(() => {
        triggerFade({
            target: contactCard.current,
            direction: "down",
            trigger: contactCard.current,
            start: "top bottom",
            end: "+=400"
        })
    }, {scope: contactCard})
    return (
        <>
            <div ref={contactCard} className="py-5 mx-auto h-35 w-45 shadow-(--shadow-sm) hover:shadow-(--shadow-md) transition-all duration-200 flex flex-col flex-wrap items-center my-1.5">
                <div>
                    {Icon && <IconBtn Value={Icon} className="scale-[2]" />}
                </div>
                <div className="px-3 pt-4 text-center">
                    <p className="text-xs text-(--text-secondary)">{title}</p>
                    <h3 className="text-sm text-(--text-primary) ">{data}</h3>
                </div>
            </div>
        </>
    )
}

export default ContactCard