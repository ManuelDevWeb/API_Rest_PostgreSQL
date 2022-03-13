// Importando express
const express = require('express');

// TODO Importando servicio de categorias
// Importando los esquemas de catergorias
const {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema,
} = require('../../schemas/categories/category.schema');
// Importando middleware de validaciones
const validatorHandler = require('../../middlewares/validator.handler');

const router = express.Router();

//  TODO Instanciando el servicio de categorias

// Rutas para productos
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */

// GET: Obtener tdoas las categorias
router.get('/', async(req, res, next) => {});

// GET: Obtener una categoria (Antes de hacer la petición, validamos que el esquema sea correcto)
router.get(
    '/:categoryId',
    validatorHandler(getCategorySchema, 'params'),
    async(req, res, next) => {}
);

// POST: Crear una categoria (Antes de hacer la petición, validamos que el esquema sea correcto)
router.post(
    '/',
    validatorHandler(createCategorySchema, 'body'),
    async(req, res) => {}
);

// PATCH: Actualizar una categoria (Antes de hacer la petición, validamos que el esquema sea correcto)
router.patch(
    '/:categoryId',
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async(req, res, next) => {}
);

// DELETE: Eliminar una categoria (Antes de hacer la petición, validamos que el esquema sea correcto)
router.delete(
    '/:categoryId',
    validatorHandler(getCategorySchema, 'params'),
    async(req, res, next) => {}
);

// Exportamos módulo
module.exports = router;