import '../assets/css/project.css';
import ProjectSet from './ProjectSet';
import pDImg from '../assets/images/placementDesktop.png';
import pMImg from '../assets/images/placmentMobile.jpg'
const Project = () =>{

    let projects = [
        {
            projectName: "Placement Cell",
            desktopView: pDImg,
            mobileView: pMImg,
            projectGithub: "...",
            hostedLink: "..."
        },
        {
            projectName: "Placement Cell",
            desktopView: pDImg,
            mobileView: pMImg,
            projectGithub: "...",
            hostedLink: "..."
        }
    ]

    return(
        <div className="project-container component-container">
            <h1 className='component-header'>
                <span>
                    {/* Icon */}
                </span>
                <span>Projects</span>
            </h1>

            <ul className="project-list">
                {
                    projects.map((project, index)=>{
                        return(
                            <ProjectSet key={index} project={project} />
                        )
                    })
                }
            </ul>

            <button className='see-all-btn'>See ALL</button>
        </div>
    )
}

export default Project;