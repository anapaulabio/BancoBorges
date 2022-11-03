import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('checking_accounts', {
    checkingaccountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'checking_account_id'
    },
    accountId:{ 
        type: DataTypes.INTEGER,
        field: 'account_id'
    },
    transferLimit: { 
        type: DataTypes.NUMBER,
        field: 'transfer_limit',
    },
    tax: DataTypes.NUMBER
});