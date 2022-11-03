import * as Sequelize from 'sequelize';

export default {
    up:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('people', {
            peopleId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'people_id'
            },
            cep: Sequelize.DataTypes.STRING,
            creditLimit: {
                type: Sequelize.DataTypes.INTEGER,
                field: 'credit_limit'
            },
            comments: Sequelize.DataTypes.TEXT 
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('people')
    }
};