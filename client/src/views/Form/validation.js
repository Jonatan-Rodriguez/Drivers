const validation = (userData) => {
    const errors = {};

    if (!userData.name) {
        errors.name = 'El nombre no puede estar vacio';
    } else {
        if (userData.name.length > 15) {
            errors.name = 'El nombre debe tener menos de 15 caracteres';
        } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(userData.name)) {
            errors.name = 'El nombre no debe contener números ni símbolos';
        }
    }

    if (!userData.surname) {
        errors.surname = 'El apellido no puede estar vacio';
    } else {
        if (userData.surname.length > 15) {
            errors.surname = 'El nombre debe tener menos de 15 caracteres';
        } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(userData.surname)) {
            errors.surname = 'El nombre no debe contener números ni símbolos';
        }
    }

    if (!userData.description) {
        errors.description = 'La descripcion no puede estar vacia';
    } else {
        if (userData.description.length > 30) {
            errors.description = 'La descripcion debe tener menos de 30 caracteres';
        }
    }

    if (!userData.image) {
        errors.image = 'La imagen no puede estar vacia';
    } else {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (!urlRegex.test(userData.image)) {
            errors.image = 'Ingresa una URL de imagen válida';
        }
    }

    if (!userData.nationality) {
        errors.nationality = 'La nacionalidad no puede estar vacia';
    }

    if (!userData.dob) {
        errors.dob = 'La fecha de nacimiento no puede estar vacia';
    } else {
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dobRegex.test(userData.dob)) {
            errors.dob = 'La fecha de nacimiento debe tener el formato aaaa-mm-dd';
        }
    }

    if (!userData.team[0]) {
        errors.team = 'Debe seleccionar al menos un equipo';
    }

    return errors;
}

export default validation;