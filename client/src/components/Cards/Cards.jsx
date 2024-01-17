import { connect } from "react-redux";
import { ContainerCards } from "./cards.styled";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";

const RESULT_PAGE = 9;

const Cards = ({ allDrivers }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [items, setItems] = useState([]);
    const [pages, setPages] = useState(0);

    useEffect(() => {
        // Actualiza los elementos cuando cambia la lista completa de drivers
        const startIndex = currentPage * RESULT_PAGE;
        const endIndex = startIndex + RESULT_PAGE;
        setItems(allDrivers.slice(startIndex, endIndex));
        const pagesTotal = Math.floor(allDrivers.length / RESULT_PAGE);
        setPages(pagesTotal);
    }, [allDrivers, currentPage]);

    const nextHandler = () => {
        const totalElementos = allDrivers.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * RESULT_PAGE;

        if (firstIndex < totalElementos) {
            setCurrentPage(nextPage);
        }
    };

    const prevHandler = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <ContainerCards>
            <h1>Corredores F1</h1>
            <div className="cards">
                {items.map((driver) => (
                    <Card
                        key={driver?.id}
                        id={driver?.id}
                        image={driver?.image?.url}
                        forename={driver.name?.forename}
                        surname={driver.name?.surname}
                        teams={driver.teams}
                        date={driver.dob}
                    />
                ))}
            </div>
            <Pagination pages={pages} currentPage={currentPage} prevHandler={prevHandler} nextHandler={nextHandler} />
        </ContainerCards>
    );
};

const mapStateToProps = (state) => {
    return {
        allDrivers: state.allDrivers, // Accede al estado de los drivers desde el store
    };
};

export default connect(mapStateToProps, null)(Cards);
