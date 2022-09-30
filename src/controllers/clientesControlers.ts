import readlineSync from "readline-sync";
import { PersonPF, PersonPJ, createClientPJ } from "../models/clientes";


export const newClientPF = () => {
    let clienteNome = readlineSync.question("Nome do cliente: ")
    let clienteCpf = readlineSync.question("CPF do cliente: ")
    let clienteEndereco = readlineSync.question("Endereco do cliente: ")
    let clienteLimite = readlineSync.question("Limite de crédito do cliente: ")
    let clienteDataCadastro = readlineSync.question("Data de cadastro do cliente: ")
    let clienteDataAtualização = readlineSync.question("Data de atualização do cliente: ")
    let clienteObservacao = readlineSync.question("Observacao: ")

    let cliente = new PersonPF(clienteNome, Number(clienteCpf), clienteEndereco, Number(clienteLimite), Number(clienteDataCadastro), Number(clienteDataAtualização), clienteObservacao)
    
    cliente.createClientPF()
   }
    
export const newClientPj = () => {
    let clienteRazao = readlineSync.question("Razao social do cliente: ")
    let clienteCnpj = readlineSync.question("CNPJ do cliente: ")
    let clienteEndereco = readlineSync.question("Endereco do cliente: ")
    let clienteLimite = readlineSync.question("Limite de crédito do cliente: ")
    let clienteDataCadastro = readlineSync.question("Data de cadastro do cliente: ")
    let clienteDataAtualização = readlineSync.question("Data de atualização do cliente: ")
    let clienteObservacao = readlineSync.question("Observacao: ")

    let cliente = new PersonPJ(clienteRazao, Number(clienteCnpj), clienteEndereco, Number(clienteLimite), Number(clienteDataCadastro), Number(clienteDataAtualização), clienteObservacao)
    
    return cliente
   }
 

export let setorCreate = () => {
    let instroducao = readlineSync.question('Deseja cadastrar um novo clinete?: s/n: ')
    instroducao === 's' ? secondQuestion() : console.log("retorne a página inicial")
}

function secondQuestion() {
    let createCliente = readlineSync.question("O cliente é pessoa física ou pessoa jurídica? pf/pj: ")
    createCliente === 'pf' ? newClientPF() : newClientPj()
}

  