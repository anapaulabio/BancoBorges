import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('physical_people', {
    physicalPeopleId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'physical_people_id',
    },
    peopleId: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'people_id'
    },
    name: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.STRING
})