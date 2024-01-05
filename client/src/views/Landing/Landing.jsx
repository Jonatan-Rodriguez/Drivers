import { ContainerLanding } from "./landing.styled";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <ContainerLanding>
            <h1>Landing</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </ContainerLanding>
    )
}

export default Landing;