"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const clientes_1 = require("./models/clientes");
// Dados dos clientes
//questões
let clienteNome = readline_sync_1.default.question("Nome do cliente: ");
let clienteCpf = readline_sync_1.default.question("CPF do cliente: ");
let clienteEndereco = readline_sync_1.default.question("endereco do cliente: ");
let clienteLimite = readline_sync_1.default.question("limite de crédito do cliente: ");
let clienteDataCadastro = readline_sync_1.default.question("Data de cadastro do cliente: ");
let clienteDataAtualização = readline_sync_1.default.question("Data de atualização do cliente: ");
let clienteObservacao = readline_sync_1.default.question("Observação: ");
let cliente = new clientes_1.Person(clienteNome, Number(clienteCpf), clienteEndereco, Number(clienteLimite), Number(clienteDataCadastro), Number(clienteDataAtualização), clienteObservacao);
cliente.createClient();
cliente.listClient();
let idDelete = readline_sync_1.default.question("Digite o ID do cliente que deseja deletar: ");
cliente.deleteClient(idDelete);
cliente.listClient();
