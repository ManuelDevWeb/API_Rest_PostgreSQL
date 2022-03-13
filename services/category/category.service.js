// Importando boom (Manejo de errores con status code)
const boom = require('@hapi/boom');

// Clase Servicio Category
class CategoryService {
    constructor() {}

    // Crear Categoria
    async create(data) {
        return data;
    }

    // Buscar Categorias
    async find() {
        return [];
    }

    // Buscar una categoria
    async findOne(id) {
        return { id };
    }

    // Actualizar una categoria
    async update(id, changes) {
        return { id, changes };
    }

    // Eliminar una categoria
    async remove(id) {
        return { id };
    }
}

// Exportamos módulo
module.exports = CategoryService;