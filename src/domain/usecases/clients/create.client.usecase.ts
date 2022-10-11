import { ClientsEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../interface.usecase";
import { ViaCepFactory } from "../../../infra/apis/viacep.factory";
import { ApiCepFactory } from "../../../infra/apis/apicep.factory";
import { CepFactory } from "../../../adapters/connectors/cep.factory";

class CreateClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository, private _viaCep: CepFactory, private _apiCep: CepFactory) {}

    async execute(data: ClientsEntity): Promise<ClientsEntity | undefined> {
       data.address = await this._viaCep.preencheEndereco(data.cep);
        
       if(!data.address){
            data.address = await this._apiCep.preencheEndereco(data.cep);
        } 
        return await this._repository.create(data);
    }
}

export default new CreateClientUseCase(
    ClientsRepository,
    new ViaCepFactory(),
    new ApiCepFactory()
);