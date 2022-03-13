// Importando boom (Manejo de errores con status code)
const boom = require('@hapi/boom');

// Clase Servicio Order
class OrderService {
    constructor() {}

    // Crear Orden
    async create(data) {
        return data;
    }

    // Buscar Ordenes
    async find() {
        return [];
    }

    // Buscar una orden
    async findOne(id) {
        // Se debe retornar un objeto
        return { id };
    }

    // Actualizar una orden
    async update(id, changes) {
        return {
            id,
            changes,
        };
    }

    // Eliminar una orden
    async delete(id) {
        return { id };
    }
}

// Exportamos módulo
module.exports = OrderService;