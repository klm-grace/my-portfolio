import { Experiences } from "../../utils/constant"
import Work from "../work"


const Works = () => {
    return <div className="works">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        {Experiences.map((el, idx) => {
            return <Work work={el} key={'workKey-' + idx} />
        })}
    </div>
}

export default Works