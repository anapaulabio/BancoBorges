import { ClientsEntity } from "../../../../../domain/entities/clients/client.entity";
import { IPeopleEntity } from "../../../../../domain/entities/clients/people.entity";
import { IPhysicalPeopleEntity } from "../../../../../domain/entities/clients/physical.entity";
import { ILegalPeopleEntity } from "../../../../../domain/entities/clients/legalpeople.entity";

export default function (people: any): ClientsEntity | undefined {
    if(!people)
    return;
    
    let client: IPeopleEntity = {
        peopleId: people.peopleId,
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

    if(people.physicalPeople){
        (client as IPhysicalPeopleEntity).name = people.physicalPeople.name;
        (client as IPhysicalPeopleEntity).cpf = people.physicalPeople.cpf;
    } else if(people.legalPeople){
        (client as ILegalPeopleEntity).socialReason = people.legalPeople.socialReason;
        (client as ILegalPeopleEntity).cnpj = people.legalPeople.cnpj;
    } else {
        return;
    }

    return (client as ClientsEntity);
}