import { ContainerForm } from "./form.styled";
import axios from 'axios';
import { useState } from "react";
import validation from "./validation";

const Form = () => {

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
            console.log('Datos enviados correctamente');
        } catch (error) {
            alert('¡Hubo un error al enviar los datos!')
        }
    }

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
        <ContainerForm>
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

                    <input required type="text" placeholder="Equipo*" name="team" value={formData.team} onChange={handleChange} />
                    {errors.team && <div className="error"><p>{errors.team}</p></div>}

                    <input disabled={isSubmitDisabled} onClick={handleSubmit} className={isSubmitDisabled ? "btn-none" : "btn"} type="submit" value="Crear" />
                    {isSubmitDisabled && <div className="error"><p>Llena los campos obligatorios (*)</p></div>}
                </form>
            </div>
        </ContainerForm>
    )
}

export default Form;