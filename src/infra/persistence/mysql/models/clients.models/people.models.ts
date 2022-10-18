import { MysqlDataBase } from '../../mysql.database';
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('people', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'peopleid'
    },
    cep: Sequelize.DataTypes.STRING,
    creditLimit: Sequelize.DataTypes.NUMBER,
    comments: Sequelize.DataTypes.TEXT
});