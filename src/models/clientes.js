"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.PersonPJ = exports.PersonPF = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const clientes = require('../database/clientes.json');
const crypto_1 = require("crypto");
class PersonPF {
    constructor(nome, cpf, endereco, limite, dataCadastro, atualizacaoCadastro, observacao) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.limite = limite;
        this.dataCadastro = dataCadastro;
        this.atualizacaoCadastro = atualizacaoCadastro;
        this.observacao = observacao;
    }
    listClient() {
        return console.log(clientes);
    }
    createClientPF() {
        clientes.push({
            id: (0, crypto_1.randomUUID)(),
            nome: this.nome,
            cpf: this.cpf,
            endereco: this.endereco,
            limite: this.limite,
            dataCadastro: this.dataCadastro,
            atualizacaoCadastro: this.atualizacaoCadastro,
            observacao: this.observacao
        });
        fs.writeFileSync(path.resolve("src", "database", "clientes.json"), JSON.stringify(clientes));
    }
}
exports.PersonPF = PersonPF;
class PersonPJ {
    constructor(razaoSocial, cnpj, endereco, limite, dataCadastro, atualizacaoCadastro, observacao) {
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.limite = limite;
        this.dataCadastro = dataCadastro;
        this.atualizacaoCadastro = atualizacaoCadastro;
        this.observacao = observacao;
    }
    listClient() {
        return console.log(clientes);
    }
    createClientPJ() {
        clientes.push({
            id: (0, crypto_1.randomUUID)(),
            razaoSocial: this.razaoSocial,
            cnpj: this.cnpj,
            endereco: this.endereco,
            limite: this.limite,
            dataCadastro: this.dataCadastro,
            atualizacaoCadastro: this.atualizacaoCadastro,
            observacao: this.observacao
        });
        fs.writeFileSync(path.resolve("src", "database", "clientes.json"), JSON.stringify(clientes));
    }
}
exports.PersonPJ = PersonPJ;
const updateClient = (id) => {
    const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);
    clientes[clienteIndex] = Object.assign(Object.assign({}, clientes[clienteIndex]), { nome: clientes.nome, cpf: clientes.cpf, endereco: clientes.endereco, limite: clientes.limite, dataCadastro: clientes.dataCadastro, atualizacaoCadastro: clientes.atualizacaoCadastro, observacao: clientes.observacao });
    fs.writeFileSync(path.resolve("src", "database", "clientes.json"), JSON.stringify(clientes));
    return console.log("Cliente atualizado com sucesso!");
};
exports.updateClient = updateClient;
const deleteClient = (id) => {
    const clienteIndex = clientes.findIndex((clientes) => clientes.id === id);
    clientes.splice(clienteIndex, 1);
    fs.writeFileSync(path.resolve("src", "database", "clientes.json"), JSON.stringify(clientes));
    return (console.log("Cliente deletado com sucesso!"),
        console.log(clientes));
};
exports.deleteClient = deleteClient;
