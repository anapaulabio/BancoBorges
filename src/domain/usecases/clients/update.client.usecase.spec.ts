import updateClientUsecase from "./update.client.usecase";
import createClientUsecase from "./create.client.usecase";
import { ClientsEntity } from "../../entities/clients/client.entity";

test("teste unitário de updateClientUsecase", async () => {
    const client: ClientsEntity = {
        name: "algum",
        cpf: 123456,
        creditLimit: 1000,
        comments: "algo",
        cep: "48730000",
    }
    await createClientUsecase.execute(client)
    const client2: ClientsEntity = {
        name: "Ana",
        cpf: 987456,
        creditLimit: 1000,
        comments: "algo",
        cep: "48730000",
    }
    const client3: ClientsEntity = {
        name: "Ana",
        cpf: 987456,
        creditLimit: 1000,
        comments: "algo",
        cep: "48730000",
    }
    expect( await updateClientUsecase.execute(client2)).toMatchObject(client3)
})