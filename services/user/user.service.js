// Importando boom (Manejo de errores con status code)
const boom = require('@hapi/boom');

// Clase Servicio User
class UserService {
    constructor() {}

    // Crear usuario
    async create(data) {
        return data;
    }

    // Buscar usuarios
    async find() {}

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