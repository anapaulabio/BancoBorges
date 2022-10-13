import readClientUsecase from "./read.client.usecase";
import {ClientsEntity}  from "../../entities/clients/client.entity";
import createClientUsecase from "./create.client.usecase";

test(" Teste unitário de ReadClientUseCase", async () => {
    const client: ClientsEntity = {
        "name": "Erik Borges",
        "cpf": 123456789027,
        "creditLimit": 1000.00,
        "comments": "Bom pagador :)",
        "cep": "35535000"
    };
    await createClientUsecase.execute(client);
    const client2: ClientsEntity = {
        "name": "Erik Borges",
        "cpf": 123456789027,
        "creditLimit": 1000.00,
        "comments": "Bom pagador :)",
        "cep": "35535000"
    };
    expect(await readClientUsecase.execute({ clientId: 0 })).toMatchObject(client2)
})