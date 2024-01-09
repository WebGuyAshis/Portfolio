import '../assets/css/about.css';
import logoImg from '../assets/images/logoImg.jpg';

const About = () => {

    return (
        <div className="about-container component-container">
            <h1 className='component-header'>
                <span>
                    {/* Icon */}
                </span>
                <span>About</span>
            </h1>

            <div className="about-details">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                    consequatur velit voluptatum perferendis quia, expedita asperiores
                    deleniti. Doloribus rerum blanditiis vel et, odio sit quasi asperiores
                    itaque nam soluta dignissimos.
                </p>
                
                <img
                    className="logo-image"
                    src={logoImg}
                    alt="logo"
                />

            </div>
        </div>
    );
};

export default About;
