// contem as regras de negócio da api

import {ClientsDAO}  from "../daos/clientsDao";
import { CRUD } from '../../common/interfaces/crudInterfaces';
import { ClientsDTO } from "../dtos/clientsDtos";

class ClientsService implements CRUD {
    async create(resource: ClientsDTO): Promise<ClientsDTO> {
        return ClientsDAO.instance.create(resource)
    }
    async deleteById(resourceId: number): Promise<void> {
        return ClientsDAO.instance.delete(resourceId)
    }
    async list(): Promise<ClientsDTO[]> {
        return ClientsDAO.instance.list()
    }
    async updateById(resource: ClientsDTO): Promise<ClientsDTO | undefined> {
        return ClientsDAO.instance.update(resource)
    }
    async readById(resourceId: number): Promise<ClientsDTO | undefined> {
        return ClientsDAO.instance.search(resourceId)
    }
}

export default new ClientsService();