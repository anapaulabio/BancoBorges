import "dotenv/config";

export const databaseConfig = {
    host: String(process.env.DB_HOST),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
    database: String(process.env.DB_NAME),
    port: Number(process.env.DB_PORT),
    dialect: 'mysql'

}

export default databaseConfig

module.exports = databaseConfig