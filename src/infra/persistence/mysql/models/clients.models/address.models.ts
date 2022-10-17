import { MysqlDataBase } from "../../mysql.database";
import { DataTypes } from "sequelize";

export default MysqlDataBase.getInstance().createModel('address', {
    addressid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cep: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
})