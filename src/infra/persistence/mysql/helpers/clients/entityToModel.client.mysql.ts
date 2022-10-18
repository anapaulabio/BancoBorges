import { ClientsEntity } from "../../../../../domain/entities/clients/client.entity";

export default function (client: ClientsEntity) {
    const people = {
        indexId: client.indexId,
        cep: client.cep,
        creditLimit: client.creditLimit,
        comments: client.comments
    }

    let physicalPeople = undefined
    if ('cpf' in client){
        physicalPeople = {
            peopleid: undefined,
            name: client.name,
            cpf: client.cpf
        }
    }

    let legalPeople = undefined
    if ('cnpj' in client){
        legalPeople = {
            peopleid: undefined,
            socialReason: client.socialReason,
            cnpj: client.cnpj
        }
    }

    let addresses = undefined
    if ('addresses' in client){
        addresses = {...client.addresses, ...{peopleid: undefined} }
    }

    return {
        people: people,
        physicalPeople: physicalPeople,
        legalPeople: legalPeople,
        addresses: addresses
    }
}