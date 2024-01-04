import '../assets/css/intro.css';

// logo gif
import logoGif from '../../public/gif/memojiBoy.gif'
const Intro = () => {
    return (
        <div className="intro-container">

            <div className="quick-nav-options">
                <img src={logoGif} alt="logoImg" />

                <div className="show-dynamic-text">
                    Hi! How you doing today??
                </div>
            </div>

            <div className="intro-text">
                <h1>Hi! Welcome</h1>
                <p>Ashis Kumar Yadav&apos;s Portfolio</p>
            </div>
            <a className="download-resume" href="https://drive.google.com/file/d/1X5pX9OpZ4gg57rL28nOph08v9kI1d7UE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
            </a>
        </div>
    )
}

export default Intro;