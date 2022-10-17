import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('physical_person', {
    physicalpersonid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'physical_personid',
    },
    personid: Sequelize.DataTypes.INTEGER,
    name: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.NUMBER
})