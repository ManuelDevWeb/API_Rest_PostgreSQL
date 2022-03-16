// Importando Sequelize
const { Sequelize } = require('sequelize');

// Importando la configuración con las variables de entorno
const { config } = require('./../config/config');

// Protegiendo variables de entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Creando URL de conexión
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Instancia de sequelize (Por detras maneja conexión tipo Pool)
const sequelize = new Sequelize(URI, {
    // Indicamos la BD que estamos utilizando
    dialect: 'postgres',
    // Cada que hagamos una consulta por ORM nos muestra cómo hacerla en lenguaje SQL
    logging: true,
});

// Exportamos módulo
module.exports = sequelize;