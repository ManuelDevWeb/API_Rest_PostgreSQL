// Importando boom (Manejo de errores con status code)
const boom = require('@hapi/boom');

// Importando función para conectarnos a la base de datos
// const getConnection = require('../../libs/postgres');
// Importando sequelize para conectarnos a la base de datos meriante ORM (En models guarda los modelos)
const { models } = require('../../libs/sequelize');

// Clase Servicio User
class UserService {
    constructor() {}

    // Crear usuario
    async create(data) {
        return data;
    }

    // Buscar usuarios
    async find() {
        // Obteniendo el cliente de la conexión
        // const client = await getConnection();

        // Buscando todos los datos del modelo User
        const respuesta = await models.User.findAll();

        // Una vez tenemos el cliente, podemos ejecutar querys
        // const respuesta = await client.query('SELECT * FROM tasks ORDER BY title');

        // return respuesta.rows;
        return respuesta;
    }

    // Buscar un usuario
    async findOne(id) {
        return { id };
    }

    // Actualizar usuario
    async update(id, changes) {
        return {
            id,
            changes,
        };
    }

    // Eliminar usuario
    async delete(id) {
        return { id };
    }
}

// Exportamos módulo
module.exports = UserService;