import Me from "@/assets/me.svg?react"
import Arrow from "../logoArrow"

const Resume = () => {
    return <div id="me-info">
        <div className="me-logo">
            <Me width={112} height={106} />
            <Arrow />
            <h2 className="me bg-blue">Hi, Its me KLM 😎</h2>
        </div>
        <div className="resume">
            <h1 className="pargraph">
                Turning <span className="bg-blue">complex</span> problems into elegant web solutions.
            </h1>
            <div className="about">
                <p className="about-me">
                    Combining creativity and analytical thinking, I approach software engineering as both an art and a science. I break down complex challenges into clear, structured solutions, while maintaining a keen eye for detail. My goal is to create efficient, intuitive, and visually refined applications.
                </p>
                <button className="btn">Hire me</button>
            </div>
        </div>
    </div>
}

export default Resume