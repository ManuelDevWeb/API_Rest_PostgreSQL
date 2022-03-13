// Importando express
const express = require('express');

// TODO Importando servicio de usuarios
// Importando los esquemas de usuarios
const {
    createUserSchema,
    updateUserSchema,
    getUserSchema,
} = require('../../schemas/users/user.schema');
// Importando middleware de validaciones
const validatorHandler = require('../../middlewares/validator.handler');

const router = express.Router();

// TODO Instanciando el servicio de usuarios

// Rutas para productos
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */

// GET: Obtener usuarios
router.get('/', async(req, res, next) => {});

// GET: Obtener un usuario (Antes de hacer la petición, validamos que el esquema sea correcto)
router.get(
    '/:userId',
    validatorHandler(getUserSchema, 'params'),
    async(req, res, next) => {}
);

// POST: Crear un usuario (Antes de hacer la petición, validamos que el esquema sea correcto)
router.post(
    '/',
    validatorHandler(createUserSchema, 'body'),
    async(req, res, next) => {}
);

// PATCH: Actualizar un usuario (Antes de hacer la petición, validamos que el esquema sea correcto)
router.patch(
    '/:userId',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async(req, res, next) => {}
);

// DELETE: Eliminar un usuario (Antes de hacer la petición, validamos que el esquema sea correcto)
router.delete(
    '/:userId',
    validatorHandler(getUserSchema, 'params'),
    async(req, res, next) => {}
);

// Exportamos módulo
module.exports = router;