import { ClientsEntity } from "../../../../../domain/entities/clients/client.entity";
import { IPeopleEntity } from "../../../../../domain/entities/clients/people.entity";
import { IPhysicalPeopleEntity } from "../../../../../domain/entities/clients/physical.entity";
import { ILegalPeopleEntity } from "../../../../../domain/entities/clients/legalpeople.entity";

export default function (people: any): ClientsEntity | undefined {
    if(!people)
    return;
    
    let client: IPeopleEntity = {
        indexId: people.indexId,
        cep: people.cep,
        creditLimit: people.creditLimit,
        comments: people.comments,
    }

    if(people.addresses){
        client.addresses = {
            cep: people.addresses.cep,
            logradouro: people.addresses.logradouro,
            complemento: people.addresses.complemento,
            bairro: people.addresses.bairro,
            cidade: people.addresses.cidade,
            estado: people.addresses.estado
        }
    }

    if(people.physicalpeople){
        (client as IPhysicalPeopleEntity).name = people.physicalpeople.name
        (client as IPhysicalPeopleEntity).cpf = people.physicalpeople.cpf
    } else if(people.legalpeople){
        (client as ILegalPeopleEntity).socialReason = people.legalpeople.socialReason
        (client as ILegalPeopleEntity).cnpj = people.legalpeople.cnpj
    } else {
        return
    }

    return (client as ClientsEntity);
}