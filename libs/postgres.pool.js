/*
  Un pool de conexiones es un conjunto limitado de conexiones a una
  base de datos, que es manejado por un servidor de aplicaciones de
  forma tal, que dichas conexiones pueden ser reutilizadas por los
  diferentes usuarios.
*/

const { Pool } = require('pg');

// Pool para conectarnos a la BD
const pool = new Pool({
    // Tener en cuenta que estamos usando docker
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin123',
    database: 'my_store',
});

// Exportamos módulo
module.exports = pool;