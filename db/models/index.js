// Se encarga de enviar la conexión hacia los modelos

// Importando modelo user
const { User, UserSchema } = require('./user.model');
// Importando modelo customer
const { Customer, CustomerSchema } = require('./customer.model');

// Configuración de los modelos
function setupModels(sequelize) {
    // Le indicamos al modelo user que debe seguir el esquema de UserSchema
    User.init(UserSchema, User.config(sequelize));
    // Le indicamos al modelo customer que debe seguir el esquema de CustomerSchema
    Customer.init(CustomerSchema, Customer.config(sequelize));

    // Ejecución del método associate (Enviamos los modelos)
    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
}

// Exportamos módulo
module.exports = setupModels;
