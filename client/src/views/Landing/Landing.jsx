import { ContainerLanding } from "./landing.styled";
import { Link } from "react-router-dom";
import f1 from '../../assets/video/f1.mp4';

const Landing = () => {
    return (
        <ContainerLanding>
            <header className="header content">
                <div className="header-video">
                    <video src={f1} autoPlay loop muted></video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1>Fazt Web</h1>
                    <Link to='/home'>
                        <button>INGRESAR</button>
                    </Link>
                </div>
            </header>
        </ContainerLanding>
    )
}

export default Landing;