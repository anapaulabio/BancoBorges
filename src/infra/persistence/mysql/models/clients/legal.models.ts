import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('legal_people', {
    legalPeopleId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'legal_people_id'
    },
    peopleId: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'people_id'
    },
    socialReason: {
        type: Sequelize.DataTypes.STRING,
        field: 'social_reason'},
    cnpj: Sequelize.DataTypes.STRING
})