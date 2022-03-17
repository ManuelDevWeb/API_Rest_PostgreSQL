// Se encarga de enviar la conexión hacia los modelos

// Importando modelo user
const { User, UserSchema } = require('./user.model');

// Configuración de los modelos
function setupModels(sequelize) {
    // Le indicamos al modelo user que debe seguir el esquema de UserSchema
    User.init(UserSchema, User.config(sequelize));
}

// Exportamos módulo
module.exports = setupModels;