import { ClientsEntity } from "../../../../../domain/entities/clients/client.entity";

export default function (client: ClientsEntity) {
    const person = {
        indexId: client.indexId,
        address: client.address,
        creditLimit: client.creditLimit,
        comments: client.comments
    }

    let physicalPerson = undefined
    if ('cpf' in client){
        physicalPerson = {
            personid: undefined,
            name: client.name,
            cpf: client.cpf
        }
    }

    let legalPerson = undefined
    if ('cnpj' in client){
        legalPerson = {
            personid: undefined,
            socialReason: client.socialReason,
            cnpj: client.cnpj
        }
    }

    let address = undefined
    if ('address' in client){
        address = {
            ...client.address, ...{personid: undefined}
        }
    }

    return {
        person: person,
        physicalPerson: physicalPerson,
        legalPerson: legalPerson,
        address: address
    }
}