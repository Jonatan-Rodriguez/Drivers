//styled
import { ContainerSearchBar } from "./searchBar.styled";
//hook
import { useState } from "react";
import { connect } from "react-redux";
//action
import { driverFound } from "../../redux/action";
//img
import search from '../../assets/img/search.svg';

const SearchBar = ({ driverFound }) => {
    const [nombre, setNombre] = useState('');

    let handleInputChange = (event) => {
        const name = event.target.value;
        const nameMayus = name.charAt(0).toUpperCase() + name.slice(1);
        setNombre(nameMayus);
    }

    return (
        <ContainerSearchBar>
            <div className="search">
                <input className="search__input" type="text" placeholder="Buscar por nombre" onChange={handleInputChange} value={nombre} />
                <button className="search__button" onClick={() => { driverFound(nombre); setNombre('') }}>
                    <img src={search} className="search__icon" />
                </button>
            </div>
        </ContainerSearchBar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        driverFound: (nombre) => dispatch(driverFound(nombre))
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);