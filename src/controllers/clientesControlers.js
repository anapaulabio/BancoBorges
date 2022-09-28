"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setorCreate = exports.newClientPj = exports.newClientPF = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const clientes_1 = require("../models/clientes");
const newClientPF = () => {
    let clienteNome = readline_sync_1.default.question("Nome do cliente: ");
    let clienteCpf = readline_sync_1.default.question("CPF do cliente: ");
    let clienteEndereco = readline_sync_1.default.question("Endereco do cliente: ");
    let clienteLimite = readline_sync_1.default.question("Limite de crédito do cliente: ");
    let clienteDataCadastro = readline_sync_1.default.question("Data de cadastro do cliente: ");
    let clienteDataAtualização = readline_sync_1.default.question("Data de atualização do cliente: ");
    let clienteObservacao = readline_sync_1.default.question("Observacao: ");
    let cliente = new clientes_1.PersonPF(clienteNome, Number(clienteCpf), clienteEndereco, Number(clienteLimite), Number(clienteDataCadastro), Number(clienteDataAtualização), clienteObservacao);
    cliente.createClientPF();
};
exports.newClientPF = newClientPF;
const newClientPj = () => {
    let clienteRazao = readline_sync_1.default.question("Razao social do cliente: ");
    let clienteCnpj = readline_sync_1.default.question("CNPJ do cliente: ");
    let clienteEndereco = readline_sync_1.default.question("Endereco do cliente: ");
    let clienteLimite = readline_sync_1.default.question("Limite de crédito do cliente: ");
    let clienteDataCadastro = readline_sync_1.default.question("Data de cadastro do cliente: ");
    let clienteDataAtualização = readline_sync_1.default.question("Data de atualização do cliente: ");
    let clienteObservacao = readline_sync_1.default.question("Observacao: ");
    let cliente = new clientes_1.PersonPJ(clienteRazao, Number(clienteCnpj), clienteEndereco, Number(clienteLimite), Number(clienteDataCadastro), Number(clienteDataAtualização), clienteObservacao);
    cliente.createClientPJ();
};
exports.newClientPj = newClientPj;
let setorCreate = () => {
    let instroducao = readline_sync_1.default.question('Deseja cadastrar um novo clinete?: s/n: ');
    instroducao === 's' ? secondQuestion() : console.log("retorne a página inicial");
};
exports.setorCreate = setorCreate;
function secondQuestion() {
    let createCliente = readline_sync_1.default.question("O cliente é pessoa física ou pessoa jurídica? pf/pj: ");
    createCliente === 'pf' ? (0, exports.newClientPF)() : (0, exports.newClientPj)();
}
