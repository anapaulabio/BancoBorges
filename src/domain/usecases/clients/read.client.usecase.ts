import { ClientsEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "..//interface.usecase";

class ReadClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: { clientId: number }): Promise<ClientsEntity | undefined> {
        return await this._repository.readById(data.clientId);
    }
}

export default new ReadClientUseCase(
    ClientsRepository
);