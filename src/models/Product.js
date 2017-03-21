export default (sequelize, DataType) => {

    const model = sequelize.define('Product', {
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
        description: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataType.ENUM,
            values: ['TIPO1','TIPO2','TIPO3'],
            allowNull: false,
            validate: {
                notEmpty: true
            }

        }
    });

    return model;
}