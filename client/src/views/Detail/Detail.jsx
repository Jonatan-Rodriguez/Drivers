import { ContainerDetail } from "./detail.styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
    const { id } = useParams();
    const [driver, setDriver] = useState({});

    const detailGet = async () => {
        try {
            const { data } = await axios(`http://localhost:3001/drivers/${id}`);
            if (data.name) {
                setDriver(data);
            }
        } catch (error) {
            alert('¡No hay video juegos con este ID!');
        }
    }

    useEffect(() => {
        detailGet();
    }, []);

    return (
        <ContainerDetail>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className='containerCard'>
                        <div className='containerImg'>
                            <img className='img' src={driver?.image?.url} alt={driver?.name?.forname} />
                        </div>
                        <div className='containerData'>
                            <h1 className='name'>{driver?.name?.forename}</h1>
                            <h1 className='name'>{driver?.name?.surname}</h1>
                            <div className='data'><p>ID: {driver?.id}</p></div>
                            {driver?.description ?
                                <div className='data'><p>Descripcion: </p> <div className="contenedor-des">{driver?.description}</div></div>
                                : <></>
                            }
                            <div className='data'><p>Nacionalidad: {driver?.nationality}.</p></div>
                            <div className='data'><p>Fecha de nacimiento: {driver?.dob}.</p></div>
                            {driver?.teams ?
                                <div className='data'><p>Escuderias: {driver?.teams}.</p></div>
                                : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDetail>
    )
}

export default Detail;