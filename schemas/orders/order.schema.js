// Importando joi (Validación de datos)
const Joi = require('joi');

// Campos y sus validaciones
const id = Joi.number().integer();
const customerId = Joi.number().integer();

// Esquema de orden para obtener orden
const getOrderSchema = Joi.object({
    id: id.required(),
});

// Esquema de orden para la creación
const createOrderSchema = Joi.object({
    customerId: customerId.required(),
});

// Exportamos módulo
module.exports = { getOrderSchema, createOrderSchema };