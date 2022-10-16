import supertest from "supertest";
import app from "./app";
import { ClientsEntity } from "../../../domain/entities/clients/client.entity";

describe("Testes integrados de clientes",  () => {
    test("Teste integrado de criação de cliente", async () => {
        const client: ClientsEntity = {
            "name": "Ana 2",
            "cpf": 1234567891,
            "creditLimit": 50,
            "comments": "como escrever data",
            "cep": 48730000,
        };

        const res = await supertest(app).post('/clients')
                                        .send(client)
                                        .set('Accept', 'application/json');

        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(client);
    } );
});