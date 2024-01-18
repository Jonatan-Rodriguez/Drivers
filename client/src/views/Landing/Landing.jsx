import { ContainerLanding } from "./landing.styled";
import { Link } from "react-router-dom";
import f1 from '../../assets/video/f1.mp4';

const Landing = () => {
    return (
        <ContainerLanding>
            <div className="background content">
                <div className="background-video">
                    <video src={f1} autoPlay loop muted></video>
                </div>
                <div className="background-overlay"></div>
                <div className="background-content">
                    <h1>Drivers Web</h1>
                    <Link to='/home'>
                        <button>INGRESAR</button>
                    </Link>
                </div>
            </div>
        </ContainerLanding>
    )
}

export default Landing;