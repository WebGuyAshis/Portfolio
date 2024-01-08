import htmlLogo from '../assets/icons/htmlLogo.png'
import cssLogo from '../assets/icons/cssLogo.png'
import jsLogo from '../assets/icons/jsLogo.png'
import nodeLogo from '../assets/icons/nodeLogo.png'
import expressLogo from '../assets/icons/expressLogo.png'
import jwtLogo from '../assets/icons/jwtLogo.png'
import passportLogo from  '../assets/icons/passportLogo.png'
import redisLogo from '../assets/icons/redisLogo.jpg'
import reactLogo from '../assets/icons/reactLogo.jpg'

import SkillSet from './SkillSet'
import '../assets/css/skills.css'

const Skills = () =>{

    const skills = [
        {
            name: "HTML",
            icon: htmlLogo
        },
        {
            name: "CSS",
            icon: cssLogo
        },
        {
            name: "JavaScript",
            icon: jsLogo
        },
        {
            name: "Node.js",
            icon: nodeLogo
        },
        {
            name: "Express.js",
            icon: expressLogo
        },
        {
            name: "JWT",
            icon: jwtLogo
        },
        {
            name: "Passport.js",
            icon: passportLogo
        },
        {
            name: "Redis",
            icon: redisLogo
        },
        {
            name: "React",
            icon: reactLogo
        }
    ];
    return(
        <div className="skills-container component-container">
            <h1 className="component-header">
                <span>
                    {/* Icon */}
                </span>
                <span>Skills</span>
            </h1>

            <ul className="skills-list">         
                {skills.map((skill, index)=>{
                    return(
                        <SkillSet key={index} skill={skill} />
                )
                })}
            </ul>

        </div>
    )
}

export default Skills;