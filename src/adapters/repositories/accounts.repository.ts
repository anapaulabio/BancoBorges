import * as Sequelize from "sequelize";

import { IDatabaseModel } from "../../infra/persistence/databasemodel.interface";
import { AccountEntity } from "../../domain/entities/accounts/account.entity";
import { MysqlDataBase } from "../../infra/persistence/mysql/mysql.database";
import { IAccountsRepository } from "../../domain/repositories/accounts.repository.interface";

import accountModel from "../../infra/persistence/mysql/models/accounts.models/account.models";
import checkingModel from "../../infra/persistence/mysql/models/accounts.models/checking.models";
import savingModel from "../../infra/persistence/mysql/models/accounts.models/saving.models";
import entityToModelAccount from "../../infra/persistence/mysql/helpers/accounts/entityToModel.account.mysql";
import modelToEntityAccount from "../../infra/persistence/mysql/helpers/accounts/modelToEntity.account.mysql";

export class AccountsRepository implements IAccountsRepository {
    constructor(
        private _database: IDatabaseModel,
        private _accountModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _chekingAccountModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _savingAccountModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
    ) {
        this._accountModel.hasOne(this._chekingAccountModel, {
            foreignKey: 'accountId',
            as: 'checkingAccount'
        });

        this._accountModel.hasOne(this._savingAccountModel, {
            foreignKey: 'accountId',
            as: 'savingAccount'
        })
    }

    async readById(resourceId: number): Promise<AccountEntity | undefined> {
        try {
        const account = await this._database.read(this._accountModel, resourceId, {
            include: [
                'checkingAccount',
                'savingAccount',
            ]
        });

        return modelToEntityAccount(account);
    } catch (error) {
        console.error('Algo deu errado', error)
    }
    }

    async create(resource: AccountEntity): Promise<AccountEntity> {
        const { Account, checkingAccount, savingAccount } = entityToModelAccount(resource); 
        const accountModel = await this._database.create(this._accountModel, Account);
        
        if(checkingAccount){
            checkingAccount.accountId = accountModel.null
            const checkingAccountModel = await this._database.create(this._chekingAccountModel, checkingAccount)
        }

        if(savingAccount){
            savingAccount.accountId = accountModel.null
            const savingAccountModel = await this._database.create(this._savingAccountModel, savingAccount)
        }

        resource.accountId = accountModel.null
        return resource
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.delete(this._chekingAccountModel, {accountId: resourceId});
        this._database.delete(this._savingAccountModel, {accountId: resourceId});
        this._database.delete(this._accountModel, {accountId: resourceId});
    }

    async list(): Promise<AccountEntity[]> {
        const accountModel = await this._database.list(this._accountModel, {
            include: [
                'checkingAccount',
                'savingAccount',
            ]
        });
        const account = accountModel.map(modelToEntityAccount)

        return account
    }

    async updateById(resource: AccountEntity): Promise<AccountEntity | undefined> {
        const accountModel = await this._database.read(this._accountModel, resource.accountId!, {
            include: [
                'checkingAccount',
                'savingAccount',
            ]
        });

        const { Account, checkingAccount, savingAccount } = entityToModelAccount(resource);

        await this._database.update(accountModel, Account);

        if(checkingAccount){
            await this._database.update(accountModel.getCheckingAccount(), checkingAccount)
        }
        if(savingAccount){
            await this._database.update(accountModel.getSavingAccount(), savingAccount)
        }

        return resource;
    }
}

export default new AccountsRepository(
    MysqlDataBase.getInstance(),
    accountModel,
    checkingModel,
    savingModel
);
