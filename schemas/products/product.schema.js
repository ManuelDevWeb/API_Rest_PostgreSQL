// Importando joi (Validación de datos)
const Joi = require('joi');

// Campos y sus validaciones
const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

// Esquema de producto para la creación
const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
    categoryId: categoryId.required(),
});

// Esquema de producto para la actualización
const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image,
    description: description,
    categoryId,
});

// Esquema de producto para obtener producto
const getProductSchema = Joi.object({
    id: id.required(),
});

// Esquema de query
const queryProductSchema = Joi.object({
    limit,
    offset,
});

// Exportamos módulo
module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema,
    queryProductSchema,
};