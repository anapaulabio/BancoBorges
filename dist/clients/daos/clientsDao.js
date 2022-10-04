"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Responsável pela relação com banco de dados
const debug_1 = require("debug");
const log = (0, debug_1.debug)('app:in-memory-dao');
class ClientsDAO {
    constructor() {
        this._clients = [];
        log('Creating new instance of ClientDao');
    }
    create(person) {
        let objectPerson;
        person.indexId = this._clients.length;
        objectPerson = person;
        this._clients.push(objectPerson);
        return objectPerson;
    }
    update(person) {
        let objectPerson;
        objectPerson = person;
        if (objectPerson.indexId === undefined) {
            return;
        }
        this._clients[objectPerson.indexId] = objectPerson;
        return objectPerson;
    }
    delete(cpfCnpj) {
        const indexId = this._clients.findIndex((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        log(`Delete Index: ${indexId}`);
        this._clients.splice(indexId, 1);
    }
    list() {
        let objectPerson = [];
        for (let client of this._clients) {
            objectPerson.push(client);
        }
        return objectPerson;
    }
    search(cpfCnpj) {
        const cliente = this._clients.find((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        if (!cliente)
            return;
        return cliente;
    }
}
exports.default = new ClientsDAO();
