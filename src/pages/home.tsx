import Navbar from "../components/navbar"
import Resume from "../components/resume"
import Section from "../components/section"
import Skills from "../components/skills"

const Home = () => {
    return <div className="container">
        <Navbar />
        <Section className="me">
            <>
                <Resume />
                <Skills />
            </>
        </Section>
        <Section className="work">
            <>
            </>
        </Section>
    </div>
}
export default Home