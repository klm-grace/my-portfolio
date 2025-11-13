import Contact from "../components/contact"
import Arrow from "../components/logoArrow"
import Navbar from "../components/navbar"
import Resume from "../components/resume"
import Section from "../components/section"
import Skills from "../components/skills"
import Title from "../components/title"
import Works from "../components/works"
import K from "@/assets/K.svg?react";


const Home = () => {
    return <><div className="container">
        <Navbar />
        <Section id="me" className="me">
            <>
                <Resume />
                <Skills />
            </>
        </Section>
        <Section id="work" className="workExp">
            <>
                <div className="workExp-title-ctn">
                    <Title content="Work Experience" />
                    <Arrow angle={200} />
                </div>
                <Works />
            </>
        </Section>
        <Section id="contact">
            <Contact />
        </Section>
        <footer className="footer">
            <div className="logo-ctn footer-logo-ctn">
                <K height={51} width={31} className="logo" />
                <h3 className="handlee-regular">LM</h3>
            </div>
            <div style={{ textAlign: 'center', marginTop: ".4rem", color: "var(--gray-color)" }}>Based on a free portfolio design by Zainab Nisa (Figma).</div>
        </footer>
    </div>
        <hr className="footer-line" />
    </>
}
export default Home