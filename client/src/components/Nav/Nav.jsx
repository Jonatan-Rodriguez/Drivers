import { ContainerNav } from "./nav.styled";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';
import newGame from '../../assets/img/charmander.png';
import { connect } from 'react-redux';
import { addDriver } from "../../redux/action";

const Nav = ({ addDriver }) => {
    return (
        <ContainerNav>
            <div className="logo" onClick={() => addDriver()}>
                <Link to='/home'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navBtn">
                <Link to='/form'>
                    <div className="navIco">
                        <img className="ico" src={newGame} alt="new game" />
                        <p>Crear Video Juego</p>
                    </div>
                </Link>
            </div>
        </ContainerNav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDriver: () => dispatch(addDriver())
    };
};

export default connect(null, mapDispatchToProps)(Nav);