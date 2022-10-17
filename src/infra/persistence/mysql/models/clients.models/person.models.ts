import { MysqlDataBase } from '../../mysql.database';
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('person', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'personid'
    },
    cep: Sequelize.DataTypes.STRING,
    creditLimit: Sequelize.DataTypes.NUMBER,
    comments: Sequelize.DataTypes.TEXT
});