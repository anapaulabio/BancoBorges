import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('saving_accounts', {
    savingAccountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'saving_account_id'
    },
    accountId: {
        type: DataTypes.INTEGER,
        field: 'account_id'
    },
    income: DataTypes.NUMBER
});