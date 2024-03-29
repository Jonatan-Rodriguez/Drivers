import { ContainerForm } from "./form.styled";
import axios from 'axios';
import { useState } from "react";
import { connect } from "react-redux";
import validation from "./validation";
import Swal from 'sweetalert2';

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

    const [teamName, setTeamName] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:3001/drivers', formData);

            // Restablecer los valores de los inputs después del envío exitoso
            setFormData({
                name: '',
                surname: '',
                description: '',
                image: '',
                nationality: '',
                dob: '',
                team: '',
            });

            setTeamName([]);

            setErrors({});

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

    const handleTeamChange = (event) => {

        const { value } = event.target;

        if (!teamName.some(team => team.value === value)) {
            if (teamName.length < 5) {
                setTeamName(prevTeamName => [
                    ...prevTeamName,
                    {
                        value: value
                    }
                ]);

                setFormData({
                    ...formData,
                    team: [
                        ...teamName,
                        {
                            value: value
                        }
                    ]
                });

                setErrors(validation({
                    ...formData,
                    team: [
                        ...teamName,
                        {
                            value: value
                        }
                    ]
                }));
            }
        }
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

    const isSubmitDisabled = Object.keys(errors).length > 0;

    return (
        < ContainerForm >
            <div className="login wrap">
                <h1 className="h1">AGREGAR NUEVO CORREDOR</h1>
                <form onSubmit={handleSubmit}>
                    <input required type="text" autoFocus placeholder="Nombre*" name="name" value={formData.name} onChange={handleChange} />
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

                    <div className='selectContainer'>
                        <p>Seleccione equipos*</p>
                        <select className='selectBox' multiple onChange={handleTeamChange}>
                            {allTeams.map((team) => (
                                <option key={team.id} value={team.name}>{team.name}</option>
                            ))}
                        </select>
                        <div className="selectName">
                            {teamName.map(option => (
                                <span className="name" key={option.value}>{option.value}</span>
                            ))
                            }
                        </div>
                    </div>
                    {errors.team && <div className="error"><p>{errors.team}</p></div>}

                    <input disabled={isSubmitDisabled} onClick={handleSubmit} className={isSubmitDisabled ? "btn-none" : "btn"} type="submit" value="Crear" />
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