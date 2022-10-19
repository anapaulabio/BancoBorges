import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('checking_accounts', {
    checkingaccountid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'checking_accountid'
    },
    accountid: DataTypes.INTEGER,
    transferLimit: { 
        type: DataTypes.NUMBER,
        field: 'transfer_limit',
    },
    tax: DataTypes.NUMBER

})