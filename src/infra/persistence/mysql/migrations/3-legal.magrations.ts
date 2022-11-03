import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('legal_people', {
            legalPeopleId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'legal_people_id'
            },
            peopleId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName:'people'
                    },
                    key: 'people_id'
                },
            }, 
            socialReason: {
                type: Sequelize.DataTypes.STRING,
                field: 'social_reason'
            },
            cnpj: Sequelize.DataTypes.STRING
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('legal_people')
    }
}