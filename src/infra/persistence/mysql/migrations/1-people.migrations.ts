import * as Sequelize from 'sequelize';

export default {
    up:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('people', {
            indexId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'people_id'
            },
            cep: Sequelize.DataTypes.STRING,
            creditLimit: Sequelize.DataTypes.INTEGER,
            comments: Sequelize.DataTypes.TEXT 
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('people')
    }
}