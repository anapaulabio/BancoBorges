import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('legal_people', {
    legalpeopleId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'legal_people_id'
    },
    peopleId: Sequelize.DataTypes.INTEGER,
    socialReason: Sequelize.DataTypes.STRING,
    cnpj: Sequelize.DataTypes.STRING
})