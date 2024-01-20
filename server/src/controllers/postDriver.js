const { Driver, Team } = require('../db');

const postDriver = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, team } = req.body;

        const driverCreate = await Driver.create({ name, surname, description, image, nationality, dob });

        const foundTeam = await Promise.all(team.map(async (postTeam) => {
            return await Team.findOne({ where: { name: postTeam.value } });
        }))

        if (!foundTeam) {
            return res.status(404).json({ message: 'Equipo no encontrado' });
        };

        foundTeam.map(async (teamFound) => {
            return await driverCreate.addTeam(teamFound);
        })

        return res.status(200).json(driverCreate);

    } catch (error) {
        console.error('Error al agregar un corredor a la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    postDriver
};