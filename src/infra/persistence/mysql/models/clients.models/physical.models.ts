import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('physical_people', {
    physicalpeopleId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'physical_people_id',
    },
    peopleId: Sequelize.DataTypes.INTEGER,
    name: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.STRING
})