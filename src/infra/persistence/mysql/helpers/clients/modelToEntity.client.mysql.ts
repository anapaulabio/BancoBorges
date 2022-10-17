import { ClientsEntity } from "../../../../../domain/entities/clients/client.entity";
import { IPersonEntity } from "../../../../../domain/entities/clients/person.entity";
import { IPhysicalPersonEntity } from "../../../../../domain/entities/clients/physical.entity";
import { ILegalPersonEntity } from "../../../../../domain/entities/clients/legalperson.entity";

export default function (person: any): ClientsEntity | undefined{
    if(!person)
    return;
    
    let client: IPersonEntity = {
        indexId: person.indexId,
        cep: person.cep,
        creditLimit: person.creditLimit,
        comments: person.comments
    }

    if(person.address){
        client.address = {
            cep: person.address.cep,
            logradouro: person.address.logradouro,
            complemento: person.address.complemento,
            bairro: person.address.bairro,
            cidade: person.address.cidade,
            estado: person.address.estado
        }
    }

    if(person.physicalperson){
        (client as IPhysicalPersonEntity).name = person.physicalPerson.name
        (client as IPhysicalPersonEntity).cpf = person.physicalPerson.cpf
    } else if(person.legalperson){
        (client as ILegalPersonEntity).socialReason = person.legalPerson.socialReason
        (client as ILegalPersonEntity).cnpj = person.legalPerson.cnpj
    } else {
        return
    }

    return (client as ClientsEntity);
}