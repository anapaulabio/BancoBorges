// contem as regras de negócio da api

import ClientsDAO  from "../daos/clientsDao";
import { CRUD } from '../../common/interfaces/crudInterfaces';
import { ClientsDTO } from "../dtos/clientsDtos";

class ClientsService implements CRUD {
    async create(resource: ClientsDTO): Promise<ClientsDTO> {
        return ClientsDAO.create(resource)
    }
    async deleteById(resourceID: number): Promise<void> {
        return ClientsDAO.delete(resourceID)
    }
    async list(): Promise<ClientsDTO[]> {
        return ClientsDAO.list()
    }
    async updateById (resourceID: ClientsDTO): Promise<ClientsDTO | undefined> {
        return ClientsDAO.update(resourceID)
    }
    async readById(resourceID: number): Promise<ClientsDTO | undefined> {
        return ClientsDAO.search(resourceID)
    }
}

export default new ClientsService();