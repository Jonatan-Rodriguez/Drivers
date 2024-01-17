import { ContainerPagination } from "./pagination.styled";

const Pagination = ({ pages, prevHandler, nextHandler, currentPage }) => {

    return (
        <ContainerPagination>
            <div className="pagination-btn">
                <button onClick={prevHandler}>&lt; Anterior</button>
                <div className="pagination-pag">
                    <span className="pag">{currentPage}</span><span>de {pages}</span>
                </div>
                <button onClick={nextHandler}>Siguiente &gt;</button>
            </div>
        </ContainerPagination>
    )
}

export default Pagination;