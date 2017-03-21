export default (sequelize, DataType) => {

    const model = sequelize.define('Client', {

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataType.ENUM,
            values: ['FISICA', 'JURIDICA'],
            allowNull: false,
            validate: {
                notEmpty: true
            }

        },
        identification: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email1: {
            type: DataType.STRING
        },
        email2: {
            type: DataType.STRING
        },
        telefone1: {
            type: DataType.STRING
        },
        telefone2: {
            type: DataType.STRING
        },

    });

    return model;
}