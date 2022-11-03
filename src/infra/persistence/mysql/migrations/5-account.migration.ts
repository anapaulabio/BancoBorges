import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) =>{
        return queryInterface.createTable('accounts', {
            accountId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'account_id'
            },
            clientId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName:'people'
                    },
                    key: 'people_id'
                },
            },
            agency: Sequelize.DataTypes.INTEGER,
            accountNumber: {
                type: Sequelize.DataTypes.INTEGER,
                field: 'account_number'
            },
            balance: Sequelize.DataTypes.INTEGER,
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('accounts')
    }
}