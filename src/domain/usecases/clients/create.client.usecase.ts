import { ClientsEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../interface.usecase";
import { ViaCepFactory } from "../../../infra/apis/cep/viacep.factory";
import { ApiCepFactory } from "../../../infra/apis/cep/apicep.factory";
import { CepFactory } from "../../../adapters/connectors/cep.factory";

export class CreateClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository, private _viaCep: CepFactory, private _apiCep: CepFactory) {
        
    }

    async execute(data: ClientsEntity): Promise<ClientsEntity | undefined> {
       data.addresses = await this._viaCep.preencheEndereco(data.cep);
        
       if(!data.addresses){
            data.addresses = await this._apiCep.preencheEndereco(data.cep);
        } 
        return await this._repository.create(data);
    }
}

export default new CreateClientUseCase(
    ClientsRepository,
    new ViaCepFactory(),
    new ApiCepFactory()
);