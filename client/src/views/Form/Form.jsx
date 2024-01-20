import { ContainerForm } from "./form.styled";
import axios from 'axios';
import { useState } from "react";
import { connect } from "react-redux";
import validation from "./validation";
import down from '../../assets/img/arrow.svg';
import Swal from 'sweetalert2';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Form = ({ allTeams }) => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        description: '',
        image: '',
        nationality: '',
        dob: '',
        team: '',
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:3001/drivers', formData);
            Swal.fire({
                title: "Corredor creado!",
                text: "Su corredor se cargo con exito!",
                icon: "success"
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error al cargar el corredor!"
            })
        }
    }

    const handleTeamChange = (team) => {
        /* const { value } = event.target; */
        setFormData({
            ...formData,
            team: team
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors(validation({
            ...formData, [event.target.name]: event.target.value
        }))
    };

    const options = allTeams?.map((team) => {
        return { value: team?.name, label: team?.name }
    });

    const animatedComponents = makeAnimated();

    const isSubmitDisabled = Object.keys(errors).length > 0;

    return (
        < ContainerForm >
            <div className="login wrap">
                <h1 className="h1">AGREGAR NUEVO CORREDOR</h1>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Nombre*" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <div className="error"><p>{errors.name}</p></div>}

                    <input required type="text" placeholder="Apellido*" name="surname" value={formData.surname} onChange={handleChange} />
                    {errors.surname && <div className="error"><p>{errors.surname}</p></div>}

                    <input required type="text" placeholder="Descripcion*" name="description" value={formData.description} onChange={handleChange} />
                    {errors.description && <div className="error"><p>{errors.description}</p></div>}

                    <input required type="text" placeholder="Imagen*" name="image" value={formData.image} onChange={handleChange} />
                    {errors.image && <div className="error"><p>{errors.image}</p></div>}

                    <input required type="text" placeholder="Nacionalidad*" name="nationality" value={formData.nationality} onChange={handleChange} />
                    {errors.nationality && <div className="error"><p>{errors.nationality}</p></div>}

                    <input required type="text" placeholder="Fecha de nacimiento*" name="dob" value={formData.dob} onChange={handleChange} />
                    {errors.dob && <div className="error"><p>{errors.dob}</p></div>}

                    {/* <div className='selectContainer'>
                        <select className='selectBox' multiple onChange={handleTeamChange} value={formData.team}>
                            <option value="">Seleccione un equipo*</option>
                            {allTeams.map((team) => (
                                <option key={team.id} value={team.name}>{team.name}</option>
                            ))}
                        </select>
                        <div className='iconContainer'>
                            <img src={down} alt="filtros" />
                        </div>
                    </div> */}
                    <Select
                        options={options}
                        isMulti
                        classNamePrefix="Seleccione equipos"
                        components={animatedComponents}
                        onChange={handleTeamChange}
                    />
                    {errors.team && <div className="error"><p>{errors.team}</p></div>}

                    <input disabled={isSubmitDisabled} onClick={handleSubmit} className={isSubmitDisabled ? "btn-none" : "btn"} type="submit" value="Crear" />
                    {isSubmitDisabled && <div className="error"><p>Llena los campos obligatorios (*)</p></div>}
                </form>
            </div>
        </ContainerForm >
    )
}

const mapStateToProps = (state) => {
    return {
        allTeams: state.allTeams,
    };
}

export default connect(mapStateToProps, null)(Form);