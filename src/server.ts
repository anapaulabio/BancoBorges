import readlineSync from "readline-sync";
import { Person, deleteClient, updateClient } from "./models/clientes";

//questões

   
    let clienteNome = readlineSync.question("Nome do cliente: ")
    let clienteCpf = readlineSync.question("CPF do cliente: ")
    let clienteEndereco = readlineSync.question("Endereco do cliente: ")
    let clienteLimite = readlineSync.question("Limite de crédito do cliente: ")
    let clienteDataCadastro = readlineSync.question("Data de cadastro do cliente: ")
    let clienteDataAtualização = readlineSync.question("Data de atualização do cliente: ")
    let clienteObservacao = readlineSync.question("Observacao: ")

    let cliente = new Person(clienteNome, Number(clienteCpf), clienteEndereco, Number(clienteLimite), Number(clienteDataCadastro), Number(clienteDataAtualização), clienteObservacao)
    
    cliente.createClient()
    cliente.listClient()

       

    let idDelete = readlineSync.question("Digite o ID do cliente que deseja deletar: ")
    deleteClient(idDelete)
  
    









