import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
       return queryInterface.createTable('physical_people', {
            physicalPeopleId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'physical_people_id'
            },
            people_id: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName:'people'
                    },
                    key: 'people_id'
                },
                field: 'people_id',
            }, 
            name: Sequelize.DataTypes.STRING,
            cpf: Sequelize.DataTypes.STRING
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('physical_people')
    }
};