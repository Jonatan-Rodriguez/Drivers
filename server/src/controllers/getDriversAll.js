const axios = require("axios");
const URL = 'http://localhost:5000/drivers';

const getDriversAll = async (req, res) => {
    try {
        const { data } = await axios(URL);

        if (data) {
            //les agrego una imagen por defectos
            const allDrivers = data.map((driver) => {
                if (!driver.image.url) {
                    driver.image.url = 'https://st3.depositphotos.com/36221892/37512/i/450/depositphotos_375127320-stock-photo-barcelona-spain-26th-february-2020.jpg';

                    driver.image.imageby = 'Imagen generica del corredor';
                }
                return driver
            })


            return res.status(200).json(allDrivers);
        }

        return res.status(404).json({ error: 'Error al solicitar todos los corredores' });

    } catch (error) {
        console.error('Error al consultar todos los corredores:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getDriversAll
};