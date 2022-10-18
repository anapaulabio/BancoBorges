import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('physical_people', {
    physicalpeopleid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'physical_peopleid',
    },
    peopleid: Sequelize.DataTypes.INTEGER,
    name: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.STRING
})