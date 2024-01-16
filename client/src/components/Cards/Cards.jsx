import { connect } from "react-redux";
import { ContainerCards } from "./cards.styled";
import Card from "../Card/Card";

const Cards = ({ allDrivers }) => {
    return (
        <ContainerCards>
            <h1>Corredores F1</h1>
            <div className="cards">
                {allDrivers?.map(driver => {
                    return (
                        <Card
                            key={driver?.id}
                            id={driver?.id}
                            image={driver?.image?.url}
                            forename={driver.name?.forename}
                            surname={driver.name?.surname}
                            teams={driver.teams}
                            date={driver.dob}
                        />
                    )
                })
                }
            </div>
        </ContainerCards>
    )
}

const mapStateToProps = (state) => {
    return {
        allDrivers: state.allDrivers, // Accede al estado de los drivers desde el store
    };
};

export default connect(mapStateToProps, null)(Cards);