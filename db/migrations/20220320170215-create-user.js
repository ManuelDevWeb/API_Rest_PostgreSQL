'use strict';

// Importando el modelo USER
const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
    async up(queryInterface) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        // Creando tabla, indicamos el nombre de la tabla y el esquema
        await queryInterface.createTable(USER_TABLE, UserSchema);
    },

    // Revertir cambios (Similar a control de versiones git)
    async down(queryInterface) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        // Eliminando tabla
        await queryInterface.dropTable(USER_TABLE);
    },
};
