import { ClientsRepository } from "../../../adapters/repositories/clients.repository";
import { ApiCepFactory } from "../../../infra/apis/cep/apicep.factory";
import { ViaCepFactory } from "../../../infra/apis/cep/viacep.factory";
import { ClientsEntity } from "../../entities/clients/client.entity";
import { CreateClientUseCase } from "./create.client.usecase";

jest.mock("../../../adapters/repositories/clients.repository")
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>

test("Teste unitário CreateClientUseCase", async () => {

    const repositoryClient = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>
    repositoryClient.create.mockResolvedValue({
        "name": "Ana 2",
        "cpf": 1234567891,
        "creditLimit": 50,
        "comments": "como escrever data",
        "cep": 48730000,
        "address": {
            "cep":"48730-000",
            "logradouro": "",
            "complemento": "",
            "bairro": "",
            "cidade": "Conceição do Coité",
            "estado": "BA"
        }
        })
    const client: ClientsEntity = {
        "name": "Ana 2",
        "cpf": 1234567891,
        "creditLimit": 50,
        "comments": "como escrever data",
        "cep": 48730000,
    }

    const createClientUsecase = new CreateClientUseCase(
        repositoryClient,
        new ViaCepFactory(),
        new ApiCepFactory()
    )

    expect(await createClientUsecase.execute(client)).toMatchObject(client)
})