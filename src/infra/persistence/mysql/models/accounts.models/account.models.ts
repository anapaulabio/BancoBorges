import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('accounts', {
    indexId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'accountid'
    },
    clientId: {
        type: DataTypes.INTEGER,
        field: 'peopleid'
    },
    agency: DataTypes.NUMBER,
    accountNumber: {
        type: DataTypes.NUMBER,
        field: 'accountnumber'
    },
    balance: DataTypes.NUMBER,
})