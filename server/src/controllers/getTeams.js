const { Team } = require('../db');

const getTeams = async (req, res) => {
    try {
        //cosumiendo Team de la base de datos
        const teamDb = await Team.findAll();

        if (!teamDb[0]) return res.status(404).json({ error: 'base de datos Team vacia' });

        return res.status(200).json(teamDb);

    } catch (error) {
        console.error('Error al consultar equipos de los corredores:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getTeams
};