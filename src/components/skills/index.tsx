import Arrow from "../logoArrow";
import Skill from "../skill";
import { frontendSkills, backendSkills, others } from "../../utils/constant";

const Skills: React.FC = () => {
    return (
        <div className="skills-ctn">
            <h2 className="title bg-blue">What i know ?</h2>
            <div className="skills-logo">
                <Arrow angle={-90} />
            </div>
            <div className="skills">
                <div className="frontend">
                    <span className="skill-title">Frontend</span>
                    <div className="skills-grid">
                        {frontendSkills.map((skill, index) => (
                            <Skill key={index + skill} name={skill} />
                        ))}
                    </div>
                </div>
                <div className="backend">
                    <span className="skill-title">Backend</span>
                    <div className="skills-grid">
                        {backendSkills.map((skill, index) => (
                            <Skill key={index + skill} name={skill} />
                        ))}
                    </div>
                </div>
                <div className="others">
                    <span className="skill-title">Others</span>
                    <div className="skills-grid">
                        {others.map((skill, index) => (
                            <Skill key={index + skill} name={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;