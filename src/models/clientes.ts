import * as fs from 'fs';
import * as path from 'path';
const clientes = require('../database/clientes.json')
import { randomUUID } from "crypto";

interface Client {
    id?: string;
    endereco: string;
    limite: number;
    dataCadastro: number;
    atualizacaoCadastro: number;
    observacao: string;
}

interface PF extends Client {
    nome: string;
    cpf: number;
}


export class Person implements PF {
    id?: string
    constructor(public nome: string, public cpf: number, public endereco: string, public limite: number, public dataCadastro: number, public atualizacaoCadastro: number, public observacao: string) { }

    listClient() {
        return console.log(clientes)
    }

    createClient() {
        clientes.push({
            id: randomUUID(),
            nome: this.nome,
            cpf: this.cpf,
            endereco: this.endereco,
            limite: this.limite,
            dataCadastro: this.dataCadastro,
            atualizacaoCadastro: this.atualizacaoCadastro,
            observacao: this.observacao
        })
        fs.writeFileSync(
            path.resolve("src", "database", "clientes.json"),
            JSON.stringify(clientes)
        )
        
    }

}

export const updateClient = (id: string) => {
    const clienteIndex = clientes.findIndex((cliente: Person) => cliente.id === id);
    clientes[clienteIndex] = {
        ...clientes[clienteIndex],
        nome: clientes.nome,
        cpf: clientes.cpf,
        endereco: clientes.endereco,
        limite: clientes.limite,
        dataCadastro: clientes.dataCadastro,
        atualizacaoCadastro: clientes.atualizacaoCadastro,
        observacao: clientes.observacao
    }
    fs.writeFileSync(
        path.resolve("src", "database", "clientes.json"),
        JSON.stringify(clientes)
    )
    return console.log("Cliente atualizado com sucesso!")

}
export const deleteClient = (id: string) =>{
    const clienteIndex = clientes.findIndex((clientes: any) => clientes.id === id)
    clientes.splice(clienteIndex, 1)
    fs.writeFileSync(
        path.resolve("src", "database", "clientes.json"),
        JSON.stringify(clientes)
    )
    return (
        console.log("Cliente deletado com sucesso!"),
        console.log(clientes)
    )}