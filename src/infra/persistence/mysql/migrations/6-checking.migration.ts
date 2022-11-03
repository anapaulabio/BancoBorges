import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('checking_accounts', {
            checkingAccountId: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'checking_account_id'
            },
            accountId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName:'accounts'
                    },
                    key: 'account_id'
                }
            },
            transferLimit: { 
                type: Sequelize.DataTypes.INTEGER,
                field: 'transfer_limit',
            },
            tax: Sequelize.DataTypes.INTEGER
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('checking_accounts')
    }
};