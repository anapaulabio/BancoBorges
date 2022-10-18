import { ClientsEntity } from "../../../../../domain/entities/clients/client.entity";

export default function (client: ClientsEntity) {
    const people = {
        indexId: client.indexId,
        cep: client.cep,
        creditLimit: client.creditLimit,
        comments: client.comments
    }

    let physicalpeople = undefined
    if ('cpf' in client){
        physicalpeople = {
            peopleid: undefined,
            name: client.name,
            cpf: client.cpf
        }
    }

    let legalpeople = undefined
    if ('cnpj' in client){
        legalpeople = {
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
        physicalpeople: physicalpeople,
        legalpeople: legalpeople,
        addresses: addresses
    }
}