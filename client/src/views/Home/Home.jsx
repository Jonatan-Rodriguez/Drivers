//styled
import { ContainerHome } from "./home.styled";
//components
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectBox from "../../components/SelectBox/SelectBox";
//hook
import { addDriver, addTeam } from '../../redux/action';
import { connect } from 'react-redux';
import { useEffect } from "react";

const Home = ({ addDriver, addTeam }) => {

    useEffect(() => {
        addDriver();
        addTeam();
    }, []);

    return (
        <ContainerHome>
            <div className="searchSelect">
                <SearchBar />
                <SelectBox />
            </div>
            <Cards />
        </ContainerHome>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDriver: () => dispatch(addDriver()),
        addTeam: () => dispatch(addTeam()),
    };
};

export default connect(null, mapDispatchToProps)(Home);
