import { ContainerHome } from "./home.styled";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <ContainerHome>
            <h1>Home</h1>
            <Link to='/form'>
                <button>Form</button>
            </Link>
            <Link to='/detail/1'>
                <button>Detail</button>
            </Link>
        </ContainerHome>
    )
}

export default Home;