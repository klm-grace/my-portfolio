import K from "@/assets/K.svg?react";

const Navbar = () => {
    return <div className="nav">
        <div className="links-ctn">
            <div className="logo-ctn">
                <K className="logo" />
                <h3 className="handlee-regular">LM</h3>
            </div>
            <div className="links">
                <a href="#me" className="link">Portfolio</a>
                <a href="#contact" className="link">Hire Me</a>
            </div>
        </div>
    </div>
}

export default Navbar