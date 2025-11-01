import K from "@/assets/K.svg?react";

const Navbar = () => {
    return <div className="nav">
        <div className="links-ctn">
            <div className="logo-ctn">
                <K className="logo" />
                <h3 className="handlee-regular">LM</h3>
            </div>
            <div className="links">
                <a href="#me" className="link">
                    <span className="t">Portfolio</span>
                    <span className="dr"/>
                </a>
                <a href="#work" className="link">
                    <span className="t">Projects</span>
                    <span className="dr"/>
                </a>
                <a href="#contact" className="link">
                    <span className="dr"/>
                    <span className="t">Hire Me</span>
                </a>
            </div>
        </div>
    </div>
}

export default Navbar