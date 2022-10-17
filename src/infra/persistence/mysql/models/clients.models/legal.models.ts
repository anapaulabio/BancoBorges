import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('legal_person', {
    legalpersonid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'legal_personid'
    },
    personid: Sequelize.DataTypes.INTEGER,
    socialReason: Sequelize.DataTypes.STRING,
    cnpj: Sequelize.DataTypes.NUMBER
})