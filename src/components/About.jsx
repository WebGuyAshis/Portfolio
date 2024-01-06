import '../assets/css/about.css';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import logoImg from '../../public/images/logoImg.jpg';

const About = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    return (
        <motion.div className="about-container" style={{ scale }}>
            <h1>
                <span>
                    {/* Icon */}
                </span>
                <span>About</span>
            </h1>

            <motion.div className="about-details">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                    consequatur velit voluptatum perferendis quia, expedita asperiores
                    deleniti. Doloribus rerum blanditiis vel et, odio sit quasi asperiores
                    itaque nam soluta dignissimos.
                </p>
                <motion.img
                    className="logo-image"
                    src={logoImg}
                    alt="logo"
                    style={{ scaleY: scrollYProgress }}
                />
            </motion.div>
        </motion.div>
    );
};

export default About;
