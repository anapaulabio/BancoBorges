import * as Sequelize from "sequelize";

import { IDatabaseModel } from "../../infra/persistence/databasemodel.interface"
import { ClientsEntity } from "../../domain/entities/clients/client.entity"
import { MysqlDataBase } from "../../infra/persistence/mysql/mysql.database";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";

import peopleModels from "../../infra/persistence/mysql/models/clients.models/people.models";
import physicalModels from "../../infra/persistence/mysql/models/clients.models/physical.models";
import legalModels from "../../infra/persistence/mysql/models/clients.models/legal.models";
import addressesModels from "../../infra/persistence/mysql/models/clients.models/address.models";
import entityToModel from "../../infra/persistence/mysql/helpers/clients/entityToModel.client.mysql";
import modelToEntity from "../../infra/persistence/mysql/helpers/clients/modelToEntity.client.mysql";

export class ClientsRepository implements IClientsRepository {
    constructor(
        private _database: IDatabaseModel,
        private _peopleModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _physicalPeopleModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _legalPeopleModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _addressModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ){
        this._peopleModel.hasOne(this._physicalPeopleModel, {
            foreignKey: 'peopleid',
            as: 'physicalPeople' 
        });

        this._peopleModel.hasOne(this._legalPeopleModel, {
            foreignKey: 'peopleid',
            as: 'legalPeople'
        });

        this._peopleModel.hasOne(this._addressModel, {
            foreignKey: 'peopleid',
            as: 'addresses'
        });
    }

    async readById(resourceId: number): Promise<ClientsEntity | undefined> {
       try {
        const people = await this._database.read(this._peopleModel, resourceId, {
            include: [
                'physicalPeople',
                'legalPeople',
                'addresses',
            ]
        });

        return modelToEntity(people);
       } catch (error) {
         console.error('Algo deu errado', error);
       }
    }

    async create(resource: ClientsEntity): Promise<ClientsEntity> {
       const { people, physicalPeople, legalPeople, addresses } = entityToModel(resource)
       const peopleModel = await this._database.create(this._peopleModel, people)

       if(physicalPeople){
        physicalPeople.peopleid = peopleModel.null;
        const physicalPeopleModel = await this._database.create(this._physicalPeopleModel, physicalPeople)
       }

       if(legalPeople){
        legalPeople.peopleid = peopleModel.null;
        const legalPeopleModel = await this._database.create(this._legalPeopleModel, legalPeople)
       }

       if(addresses){
        addresses.peopleid = peopleModel.null;
        const addressModel = await this._database.create(this._addressModel, addresses)
       }

       resource.indexId = peopleModel.null

       return resource
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.delete(this._physicalPeopleModel, {peopleid: resourceId});
        this._database.delete(this._legalPeopleModel, {peopleid: resourceId});
        this._database.delete(this._addressModel, {peopleid: resourceId});
        this._database.delete(this._peopleModel, {indexId: resourceId});
    }

    async list(): Promise<ClientsEntity[]> {
        const people = await this._database.list(this._peopleModel, {
            include: [
                'physicalPeople',
                'legalPeople',
                'addresses'
            ]
        });

        const clients = people.map(modelToEntity)

        return clients
    }

    async updateById(resource: ClientsEntity): Promise<ClientsEntity | undefined> {
        const peopleModel = await this._database.read(this._peopleModel, resource.indexId!, {
            include: [
                'physicalPeople',
                'legalPeople',
                'addresses'
            ]
        });

        const { people, physicalPeople, legalPeople, addresses } = entityToModel(resource)

        await this._database.update(peopleModel, people)

        if(physicalPeople){
            await this._database.update(peopleModel.getPhysicalPeople(), physicalPeople)
        }
        if(legalPeople){
            await this._database.update(peopleModel.getLegalPeople(), legalPeople)
        }
        if(addresses){
            await this._database.update(peopleModel.getAddresses(), addresses)
        }
        return resource;
    }
}

export default new ClientsRepository(
    MysqlDataBase.getInstance(),
    peopleModels,
    physicalModels,
    legalModels,
    addressesModels
);
