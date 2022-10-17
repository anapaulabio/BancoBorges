import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('saving_account', {
    savingaccountid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'saving_accountid'
    },
    accountid: DataTypes.INTEGER,
    income: DataTypes.NUMBER

})