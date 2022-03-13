// Importando express
const express = require('express');

const router = express.Router();

// Rutas para ordenes
/* LOS ENDPOINTS ESPECIFICOS DEBEN DECLARARSE ANTES DE LOS ENDPOINTS DINAMICOS!!! */
router.get('/', (req, res) => {
    res.json([]);
});

// Exportamos modulo
module.exports = router;