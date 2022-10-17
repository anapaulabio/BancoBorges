import { MysqlDataBase } from '../../mysql.database';
import { DataTypes } from 'sequelize';

export default MysqlDataBase.getInstance().createModel('person', {
    indexId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'personid'
    },
    cep: DataTypes.STRING,
    creditLimit: DataTypes.NUMBER,
    comments: DataTypes.TEXT
});