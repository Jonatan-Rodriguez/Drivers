const { DataTypes } = require('sequelize');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

module.exports = (sequelize) => {
  const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });

  //metodo que carga los equipos automaticamente una vez creado el modelo
  Team.afterSync(async () => {

    const { data } = await axios(URL);

    if (data) {
      //cargo los equipos al array y los concateno

      const equiposSeparados = data.reduce((equipos, obj) => {
        const equiposArray = obj?.teams?.split(',').map(team => team.trim());
        return equipos.concat(equiposArray);
      }, []);

      //saco duplicados
      const equiposSinRepetir = equiposSeparados.filter((equipo, index) => {
        //saco null
        if (equipo != null) {
          return equiposSeparados.indexOf(equipo) === index;
        }
      });

      //caragando la base de datos con los team de la api

      const equipos = equiposSinRepetir.map(nombreEquipo => ({ name: nombreEquipo }));

      await Team.bulkCreate(equipos);
    }
  });

  return Team;
};