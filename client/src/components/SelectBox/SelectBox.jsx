import { ContainerSelectBox } from "./selectBox.styled";
import { connect } from "react-redux";
import { filterCardsOrigin, orderCards, orderCardsDate, filterTeam } from "../../redux/action";
import down from '../../assets/img/arrow.svg';

const SelectBox = ({ filterCardsOrigin, filterTeam, orderCards, orderCardsDate, allTeams }) => {

    const handleFilterOrigin = (event) => {
        filterCardsOrigin(event.target.value);
    }

    const handleFilterTeam = (event) => {
        filterTeam(event.target.value);
    }

    const handleOrder = (event) => {
        orderCards(event.target.value);
    }

    const handleOrderDate = (event) => {
        orderCardsDate(event.target.value);
    }
    return (
        <ContainerSelectBox>
            <div className='selectContainer'>
                <p>Filtro por equipo:</p>
                <select className='selectBox' onChange={handleFilterTeam}>
                    <option value="">-</option>
                    <option value="all">Todos</option>
                    {allTeams.map((team) => {
                        return <option key={team.id} value={team.name}>{team.name}</option>
                    })}
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
            <div className='selectContainer'>
                <p>Filtro por origen:</p>
                <select className='selectBox' onChange={handleFilterOrigin}>
                    <option value="">-</option>
                    <option value="all">Todos</option>
                    <option value="false">Api</option>
                    <option value="true">Base de datos</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
            <div className='selectContainer'>
                <p>Orden por fecha:</p>
                <select className='selectBox' onChange={handleOrderDate}>
                    <option value="">-</option>
                    <option value="a">Ascendente</option>
                    <option value="d">Descendente</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
            <div className='selectContainer'>
                <p>Orden por nombre:</p>
                <select className='selectBox' onChange={handleOrder}>
                    <option value="">-</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
        </ContainerSelectBox>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        orderCards: (order) => dispatch(orderCards(order)),
        orderCardsDate: (orderDate) => dispatch(orderCardsDate(orderDate)),
        filterCardsOrigin: (optionOrigin) => dispatch(filterCardsOrigin(optionOrigin)),
        filterTeam: (team) => dispatch(filterTeam(team))
    };
};

const mapStateToProps = (state) => {
    return {
        allTeams: state.allTeams,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);