import '../assets/css/header.css';

const Header = () => {
    return (

        <div className="header-container">
            <ul className="header-nav">
                <li className='nav-items'>
                    <a href="#about">About</a>
                </li>

                <li className='nav-items'>
                    <a href="#skills">Skills</a>
                </li>

                <li className='nav-items'>
                    <a href="#projects">Projects</a>
                </li>

                <li className='nav-items'>
                    <a href="#education">Education</a>
                </li>

                <li className='nav-items'>
                    <a href="#experience">Experience</a>
                </li>

                <li className='nav-items'>
                    <a href="#certification">Certification</a>
                </li>

                <li className='nav-items'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

    )
}


export default Header;