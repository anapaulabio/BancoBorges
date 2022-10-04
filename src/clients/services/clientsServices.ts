// contem as regras de negócio da api

import ClientsDAO  from "../daos/clientsDao";
import { CRUD } from '../../common/interfaces/crudInterfaces';
import { ClientsDTO } from "../dtos/clientsDtos";

class ClientsService implements CRUD {
    async create(resource: ClientsDTO): Promise<ClientsDTO> {
        return ClientsDAO.create(resource)
    }
    async deleteById(resourceId: number): Promise<void> {
        return ClientsDAO.delete(resourceId)
    }
    async list(): Promise<ClientsDTO[]> {
        return ClientsDAO.list()
    }
    async updateById(resource: ClientsDTO): Promise<ClientsDTO | undefined> {
        return ClientsDAO.update(resource)
    }
    async readById(resourceId: number): Promise<ClientsDTO | undefined> {
        return ClientsDAO.search(resourceId)
    }
}

export default new ClientsService();