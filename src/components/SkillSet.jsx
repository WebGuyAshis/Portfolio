const SkillSet = ({skill}) =>{

    return(
        <li className="skill-list-item">
            <img src={skill.icon} alt="" className="icon-img" />

            <h4>{skill.name}</h4>
        </li>
    )
}

export default SkillSet;