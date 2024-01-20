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

            if (driverWithTeams) {
                // Convertir el objeto devuelto por Sequelize a un objeto plano
                const driverPlain = driverWithTeams.get({ plain: true });

                // Añado un atributo 'created' al objeto driverPlain para diferenciarlo y modifico atributos para asimilarlos
                driverPlain.name = { forename: driverPlain.name, surname: driverPlain.surname };
                driverPlain.image = { url: driverPlain.image };

                //Recoro el array de equipos y lo paso a string
                const nameTeamArr = await Promise.all(driverPlain.Teams.map((teamName) => {
                    return teamName.name;
                }))
                driverPlain.teams = nameTeamArr.join(", ");

                return res.status(200).json(driverPlain);
            }
        }

        const { data } = await axios(`${URL}/${id}`);

        if (data) {
            if (!data.image.url) {
                data.image.url = 'https://img.freepik.com/fotos-premium/foto-corredor-masculino-portada-revista_808092-6526.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701216000&semt=ais';

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