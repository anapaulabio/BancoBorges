import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('accounts', {
    indexid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'accountid'
    },
    clientid: {
        type: DataTypes.INTEGER,
        field: 'peopleid'
    },
    agency: DataTypes.NUMBER,
    accountnumber: DataTypes.NUMBER,
    balance: DataTypes.NUMBER,
})