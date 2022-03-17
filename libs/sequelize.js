// Importando Sequelize
const { Sequelize } = require('sequelize');

// Importando la configuración con las variables de entorno
const { config } = require('./../config/config');
// Importando la configuración de los modelos
const setupModels = require('./../db/models');

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

// Ejecutamos la función setupModels despues de crear la isntancia y le pasamos la conexión
setupModels(sequelize);

// Realiza una sincronización, agarra los modelo y crea la estructura
sequelize.sync();

// Exportamos módulo
module.exports = sequelize;