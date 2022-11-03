import { MysqlDataBase } from "../../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDataBase.getInstance().createModel('addresses', {
    addressid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'address_id'
    },
    cep: Sequelize.DataTypes.STRING,
    logradouro: Sequelize.DataTypes.STRING,
    complemento: Sequelize.DataTypes.STRING,
    bairro: Sequelize.DataTypes.STRING,
    cidade: Sequelize.DataTypes.STRING,
    estado: Sequelize.DataTypes.STRING
})