import SkillSection from "../components/skills/SkillSection"
import { allSkills } from "../data/data"

const Skills = () => {


    return (
        <>
            <section>
                {
                    allSkills.map((elem, index) => (
                        <SkillSection key={index} title={elem.title} data={elem.data} />
                    ))
                }
            </section>
        </>
    )
}

export default Skills