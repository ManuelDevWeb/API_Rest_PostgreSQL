// Importando Sequelize y elementos necesarios
const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos nombre de la tabla (Entidad)
const CATEGORY_TABLE = 'categories';

// Definimos el esquema de la entidad
const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        // Nombre con el que se guardara el atributo en la BD (_) por buenas prácticas
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
};

// Definimos una clase para nuestra entidad
class Category extends Model {
    // Método static es un método que pertenece a la clase y no al objeto

    // Función para realizar las relaciones
    static associate() {}

    // Función para realizar la configuración (Recibimos una conexión)
    static config(sequelize) {
        return {
            // Conexión que tendra
            sequelize,
            // Nombre de la tabla
            tableName: CATEGORY_TABLE,
            // Nombre del modelo (Clase)
            modelName: 'Category',
            timestamps: false,
        };
    }
}

// Exportamos módulos
module.exports = { Category, CategorySchema, CATEGORY_TABLE };
