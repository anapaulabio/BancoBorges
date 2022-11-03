import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('saving_accounts', {
            savingAccountId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'saving_account_id'
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
            income: Sequelize.DataTypes.INTEGER
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('saving_accounts')
    }
};