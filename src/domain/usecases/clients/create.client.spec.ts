import { ClientsEntity } from "../../entities/clients/client.entity";
import createClientUsecase from "./create.client.usecase";

test("Teste unitário CreateClientUseCase", async () => {
    const client: ClientsEntity = {
        name: "algum",
        cpf: 123456,
        creditLimit: 1000,
        comments: "algo"
    }
    expect(await createClientUsecase.execute(client)).toMatchObject(client)
})