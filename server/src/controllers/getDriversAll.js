const axios = require("axios");
const URL = 'http://localhost:5000/drivers';
const { Driver, Team } = require('../db');
const { Op } = require('sequelize');

const getDriversAll = async (req, res) => {
    try {
        const { name } = req.query;

        //cumplira esta condiciones si existe query
        if (name) {
            let driversFound = [];

            //busqueda en la base de datos
            const driversByName = await Driver.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` }, // Búsqueda case-insensitive por el nombre
                },
                include: [{ model: Team, through: 'driver_team' }], // Incluir datos del equipo vinculado
            });

            if (driversByName[0]) {
                driversByName.map((driBd) => {
                    // Convertir el objeto devuelto por Sequelize a un objeto plano
                    const driverPlain = driBd.get({ plain: true });

                    // Añado un atributo 'created' al objeto driverPlain para diferenciarlo
                    driverPlain.created = true;
                    driversFound.push(driverPlain);
                })
            }

            //busqueda en la API
            const { data } = await axios(`${URL}?name.forename=${name}`);

            if (data) {
                data.map((driApi) => {
                    if (!driApi.image.url) {
                        driApi.image.url = 'https://st3.depositphotos.com/36221892/37512/i/450/depositphotos_375127320-stock-photo-barcelona-spain-26th-february-2020.jpg';

                        driApi.image.imageby = 'Imagen generica del corredor';
                    }
                    // Añado un atributo 'created' al objeto driverPlain para diferenciarlo
                    driApi.created = false;
                    driversFound.push(driApi);
                })
            }

            if (driversFound[0]) {
                driversFound = driversFound.slice(0, 15);
                return res.status(200).json(driversFound);
            }

            return res.status(404).json({ error: 'Corredor no encontrado' })
        }

        //cumplira esta condiciones si no existe query
        const allDrivers = [];

        //traigo los driver de la base de datos
        const driverDb = await Driver.findAll();

        if (driverDb[0]) {
            driverDb.map(async (dbDriver) => {

                const driverId = dbDriver.id;

                // Encuentra el driver por su ID con todos sus equipos vinculados
                const driverWithTeams = await Driver.findByPk(driverId, {
                    include: [{ model: Team, through: 'driver_team' }],
                });
                // Convertir el objeto devuelto por Sequelize a un objeto plano
                const driverPlain = driverWithTeams.get({ plain: true });

                // Añado un atributo 'created' al objeto driverPlain para diferenciarlo
                driverPlain.created = true;

                allDrivers.push(driverPlain);
            })
        };

        //traigo todos los driver de la API

        const { data } = await axios(URL);

        if (data) {
            //les agrego una imagen por defectos y obtengo los drivers de la API
            data.map((driver) => {
                if (!driver.image.url) {
                    driver.image.url = 'https://st3.depositphotos.com/36221892/37512/i/450/depositphotos_375127320-stock-photo-barcelona-spain-26th-february-2020.jpg';

                    driver.image.imageby = 'Imagen generica del corredor';
                }
                // Añado un atributo 'created' al objeto driverPlain para diferenciarlo
                driver.created = false;

                allDrivers.push(driver);
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