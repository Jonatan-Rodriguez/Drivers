import { ContainerCard } from './card.styled';
import { Link } from 'react-router-dom';
import info from '../../assets/img/info.svg';

const Card = ({ image, forename, surname, id, teams, date }) => {
    return (
        <ContainerCard>
            <div className="imgContainer">
                <Link to={`/detail/${id}`}>
                    <img src={image} alt={forename} />
                    <div className="overlay">
                        <img className='infoIco' src={info} />
                        <p>Saber mas</p>
                    </div>
                </Link>
            </div>
            <p><b>{date}</b></p>
            <p><b>{forename}</b></p>
            <p><b>{surname}</b></p>
            <p>Escuderias:</p>
            <p>{teams}</p>
        </ContainerCard>
    )
}

export default Card;