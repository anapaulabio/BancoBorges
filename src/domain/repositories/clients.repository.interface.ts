import { ClientsEntity } from "../entities/clients/client.entity";

export interface IClientsRepository {
    readById(resourceId: number): Promise<ClientsEntity | undefined>,
    create(resource: ClientsEntity): Promise<ClientsEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<ClientsEntity[]>,
    updateById(resource: ClientsEntity): Promise<ClientsEntity | undefined>
}