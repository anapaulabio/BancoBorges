import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('addresses', {
            addressesId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'addresses_id'
            },
            cep: Sequelize.DataTypes.STRING,
            logradouro: Sequelize.DataTypes.STRING,
            complemento: Sequelize.DataTypes.STRING,
            bairro: Sequelize.DataTypes.STRING,
            cidade: Sequelize.DataTypes.STRING,
            estado: Sequelize.DataTypes.STRING,
            people_id: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName:'people'
                    },
                    key: 'people_id'
                },
                
            } 
        })
    },
    down: (queryInterface: Sequelize.QueryInterface)=> {
        return queryInterface.dropTable('addresses')
    }
};