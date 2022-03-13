// Importando boom (Manejo de errores con status code)
const boom = require('@hapi/boom');

// Importando función para conectarnos a la base de datos
const getConnection = require('../../libs/postgres');

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
        const client = await getConnection();

        // Una vez tenemos el cliente, podemos ejecutar querys
        const respuesta = await client.query('SELECT * FROM tasks ORDER BY title');

        // return respuesta;
        return respuesta.rows;
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