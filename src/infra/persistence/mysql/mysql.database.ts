import * as Sequelize from 'sequelize';
import { IDatabaseModel } from '../databasemodel.interface';

export class MysqlDataBase implements IDatabaseModel {
    private static _instance: MysqlDataBase;
    private _db: string;
    private _username: string;
    private _password: string;
    private _host: string;
    private _dialect: Sequelize.Dialect;
    private _port: number;
    private _adapter: Sequelize.Sequelize

    private constructor() {
        this._db = "banco_borges",
        this._username = "root",
        this._password = "Root1993",
        this._host = "localhost",
        this._dialect = 'mysql',
        this._port = 3306,

        this._adapter = new Sequelize.Sequelize(this._db, this._username, this._password, {
            host: this._host,
            dialect: this._dialect,
            port: this._port
            })
    }

    static getInstance() {
        if (!MysqlDataBase._instance) {
            return MysqlDataBase._instance = new MysqlDataBase();
        }
        return MysqlDataBase._instance;
    }

    create(model: Sequelize.ModelCtor<Sequelize.Model<any, any>>, data: any): any {
        return model.create(data);
    }

    async update(model: Sequelize.Model<any, any>, data: any): Promise<any> {
        await model.update(data);
        return model.save();
    }

    list(model: Sequelize.ModelCtor<Sequelize.Model<any,any>>, data: any): any {
        return model.findAll(data);
    }

    async delete(model: Sequelize.ModelCtor<Sequelize.Model<any,any>>, dataWhere: Sequelize.WhereOptions<any>): Promise<any> {
        const result = await model.destroy({
            where: dataWhere
        });
        return (result > 0)
    }

    read(model: Sequelize.ModelCtor<Sequelize.Model<any,any>>, dataId: number, includes?: object): any {
        try {
            return model.findByPk(dataId, includes);
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    createModel(name: string, properties: Sequelize.ModelAttributes):  Sequelize.ModelCtor<Sequelize.Model<any, any>> {
        return this._adapter.define(
            name,
            properties,
            {
                timestamps: false,
            }
        )
    }
}

