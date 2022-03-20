// Importando Sequelize y elementos necesarios
const { Model, DataTypes, Sequelize } = require('sequelize');

// Importando nombre de la tabla (Entidad) Categories
const { CATEGORY_TABLE } = require('./category.model');

// Definimos nombre de la tabla (Entidad)
const PRODUCT_TABLE = 'products';

// Definimos el esquema de la entidad
const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        // Nombre con el que se guardara el atributo en la BD (_) por buenas prácticas
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    // Atriburo para relacionar con la tabla products
    categoryId: {
        // Nombre con el que se guardara el atributo en la BD (_) por buenas prácticas
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        // Indicamos la tabla a la que va relacionada
        references: {
            model: CATEGORY_TABLE,
            // Foreign Key
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

// Definimos una clase para nuestra entidad
class Product extends Model {
    // Método static es un método que pertenece a la clase y no al objeto

    // Función para realizar las relaciones
    static associate() {}

    // Función para realizar la configuración (Recibimos una conexión)
    static config(sequelize) {
        return {
            // Conexión que tendra
            sequelize,
            // Nombre de la tabla
            tableName: PRODUCT_TABLE,
            // Nombre del modelo (Clase)
            modelName: 'Product',
            timestamps: false,
        };
    }
}

// Exportamos módulos
module.exports = { Product, ProductSchema, PRODUCT_TABLE };
