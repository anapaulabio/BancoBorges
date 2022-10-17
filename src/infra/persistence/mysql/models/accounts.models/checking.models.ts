import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('checking_account', {
    checkingaccountid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'checking_accountid'
    },
    accountid: DataTypes.INTEGER,
    transferLimit: DataTypes.NUMBER,
    tax: DataTypes.NUMBER

})