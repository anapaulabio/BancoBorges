import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('physical_person', {
    physicalpersonid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'physical_personid'
    },
    personid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cpf: DataTypes.NUMBER
})