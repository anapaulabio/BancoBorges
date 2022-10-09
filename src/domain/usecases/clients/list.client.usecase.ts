import { ClientsEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../interface.usecase";

class ListClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(): Promise<ClientsEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListClientUseCase(
    ClientsRepository
);