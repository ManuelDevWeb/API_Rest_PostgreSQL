'use strict';

// Importando el modelo CUSTOMER
const {
    CustomerSchema,
    CUSTOMER_TABLE,
} = require('./../models/customer.model');

module.exports = {
    async up(queryInterface) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        // Creando tabla, indicamos el nombre de la tabla y el esquema
        await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    },

    async down(queryInterface) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        // Eliminando tabla
        await queryInterface.dropTable(CUSTOMER_TABLE);
    },
};
