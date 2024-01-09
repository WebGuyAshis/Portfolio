

const ProjectSet = ({project}) =>{
    const showProjectDetails = () =>{
        console.log("Showing Details!", project.hostedLink);
    }
    return(
        <li className="project-list-item"  onClick={showProjectDetails}>
            <div className="desktop-view">
                <img src={project.desktopView} className="view-image" alt="" />
            </div>

            <div className="mobile-view">
            <img src={project.mobileView} className="view-image" alt="" />

            </div>
        </li>
    )
}

export default ProjectSet;