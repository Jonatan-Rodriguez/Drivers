const axios = require("axios");
const URL = 'http://localhost:5000/drivers';
const { Driver, Team } = require('../db');

const getDriverById = async (req, res) => {
    try {
        const id = req.params.id

        //si el id es UUID busco en a base de datos
        if (id.length > 20) {
            const driverWithTeams = await Driver.findByPk(id, {
                include: [{ model: Team, through: 'driver_team' }],
            });

            if (driverWithTeams) return res.status(200).json(driverWithTeams);
        }

        const { data } = await axios(`${URL}/${id}`);

        if (data) {
            if (!data.image.url) {
                data.image.url = 'https://st3.depositphotos.com/36221892/37512/i/450/depositphotos_375127320-stock-photo-barcelona-spain-26th-february-2020.jpg';

                data.image.imageby = 'Imagen generica del corredor';
            }
            return res.status(200).json(data);
        }

        return res.status(404).json({ error: 'Error al solicitar el corredor' });

    } catch (error) {
        console.error('Error al consultar el corredor:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getDriverById
};