
import { ClientsEntity } from "../../entities/clients/client.entity";
import DeleteClientUseCase from "./delete.client.usecase"

test("Teste Unitario DeleteClientUseCase", async () => {
    const client ={
        clientId: 0
    }
    expect(await DeleteClientUseCase.execute(client)).toBeUndefined();
})