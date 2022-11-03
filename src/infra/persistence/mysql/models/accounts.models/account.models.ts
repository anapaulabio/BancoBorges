import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('accounts', {
    accountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'account_id'
    },
    clientId: {
        type: DataTypes.INTEGER,
        field: 'people_id'
    },
    agency: DataTypes.NUMBER,
    accountNumber: {
        type: DataTypes.NUMBER,
        field: 'account_number'
    },
    balance: DataTypes.NUMBER,
})