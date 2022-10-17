import * as Sequelize from "sequelize";

import { IDatabaseModel } from "../../infra/persistence/databasemodel.interface"
import { ClientsEntity } from "../../domain/entities/clients/client.entity"
import { MysqlDataBase } from "../../infra/persistence/mysql/mysql.database";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";

import personModels from "../../infra/persistence/mysql/models/clients.models/person.models";
import physicalModels from "../../infra/persistence/mysql/models/clients.models/physical.models";
import legalModels from "../../infra/persistence/mysql/models/clients.models/legal.models";
import addressModels from "../../infra/persistence/mysql/models/clients.models/address.models";
import entityToModel from "../../infra/persistence/mysql/helpers/clients/entityToModel.client.mysql";
import modelToEntity from "../../infra/persistence/mysql/helpers/clients/modelToEntity.client.mysql";

export class ClientsRepository implements IClientsRepository {
    constructor(
        private _database: IDatabaseModel,
        private _personModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _physicalPersonModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _legalPersonModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _addressModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {
        this._personModel.hasOne(this._physicalPersonModel, {
            foreignKey: 'personid',
            as: 'physicalPerson' 
        });

        this._personModel.hasMany(this._legalPersonModel, {
            foreignKey: 'personid',
            as: 'legalPerson'
        });

        this._personModel.hasMany(this._addressModel, {
            foreignKey: 'personid',
            as: 'address'
        });
    }

    async readById(resourceId: number): Promise<ClientsEntity | undefined> {
       try {
        const person = await this._database.read(this._personModel, resourceId, {
            include: [
                'physicalPerson',
                'legalPerson',
                'address',
            ]
        });

        return modelToEntity(person);
       } catch (error) {
         console.error('Algo deu errado', error);
       }
    }

    async create(resource: ClientsEntity): Promise<ClientsEntity> {
       const { person, physicalPerson, legalPerson, address } = entityToModel(resource)
       const personModel = await this._database.create(this._personModel, person)

       if(physicalPerson){
        physicalPerson.personid = personModel.null;
        const physicalPersonModel = await this._database.create(this._physicalPersonModel, physicalPerson)
       }

       if(legalPerson){
        legalPerson.personid = personModel.null;
        const legalPersonModel = await this._database.create(this._legalPersonModel, legalPerson)
       }

       if(address){
        address.personid = personModel.null;
        const addressModel = await this._database.create(this._addressModel, address)
       }

       resource.indexId = personModel.null

       return resource
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.delete(this._physicalPersonModel, {personid: resourceId});
        this._database.delete(this._legalPersonModel, {personid: resourceId});
        this._database.delete(this._addressModel, {personid: resourceId});
        this._database.delete(this._personModel, {personid: resourceId});
    }

    async list(): Promise<ClientsEntity[]> {
        const person = await this._database.list(this._personModel, {
            include: [
                'physicalPerson',
                'legalPerson',
                'address'
            ]
        });

        const clients = person.map(modelToEntity)

        return clients
    }

    async updateById(resource: ClientsEntity): Promise<ClientsEntity | undefined> {
        const personModel = await this._database.read(this._personModel, resource.indexId!, {
            include: [
                'physicalPerson',
                'legalPerson',
                'address'
            ]
        });

        const { person, physicalPerson, legalPerson, address } = entityToModel(resource)

        await this._database.update(personModel, person)

        if(physicalPerson){
            await this._database.update(personModel.getPhysicalPerson(), physicalPerson)
        }
        if(legalPerson){
            await this._database.update(personModel.getLegalPerson(), legalPerson)
        }
        if(address){
            await this._database.update(personModel.getAddress(), address)
        }
        return resource;
    }
}

export default new ClientsRepository(
    MysqlDataBase.getInstance(),
    personModels,
    physicalModels,
    legalModels,
    addressModels
);
