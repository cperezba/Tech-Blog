const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Content extends Model { };


Content.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Blog',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Entry-Content'
    },
);


module.exports = Content;