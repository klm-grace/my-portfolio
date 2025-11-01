import Img from "../img"

const Work: React.FC<{ work: Experience }> = ({ work }) => {
    const { company, description, icon, title } = work
    console.log(Array.isArray(description),description);
    
    return <div className="work-ctn" >
        <div className="work-ctn-header">
            <Img className="work-img" src={icon} />
            <div>
                <h3 className="work-company">{company}</h3>
                <p>{title}</p>
            </div>
        </div>
        <div className="work-ctn-body">
            {!Array.isArray(description) ? <p className="work-desc" >{description}</p> : description.map((el, idx) => <p key={"desc" + idx} className="work-desc" >{el}</p>)}

        </div>
    </div>
}



export default Work