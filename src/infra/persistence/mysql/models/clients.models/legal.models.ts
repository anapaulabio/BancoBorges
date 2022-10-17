import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('legal_person', {
    legalpersonid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'legal_personid'
    },
    personid: DataTypes.INTEGER,
    socialReason: DataTypes.STRING,
    cnpj: DataTypes.NUMBER
})