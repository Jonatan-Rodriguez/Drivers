const axios = require("axios");
const URL = 'http://localhost:5000/drivers';

const getDriverById = async (req, res) => {
    try {
        const id = req.params.id
        const { data } = await axios(`${URL}/${id}`);

        if (data) {

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