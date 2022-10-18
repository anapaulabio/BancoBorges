import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('legal_people', {
    legalpeopleid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'legal_peopleid'
    },
    peopleid: Sequelize.DataTypes.INTEGER,
    socialReason: Sequelize.DataTypes.STRING,
    cnpj: Sequelize.DataTypes.STRING
})