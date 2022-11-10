import { ClientsEntity } from "../../../domain/entities/clients/client.entity";
import { IPeopleEntity } from "../../../domain/entities/clients/people.entity";
import IMocks from "./mocks.interface";
import { faker } from '@faker-js/faker';
import { IPhysicalPeopleEntity } from "../../../domain/entities/clients/physical.entity";
import { ILegalPeopleEntity } from "../../../domain/entities/clients/legalpeople.entity";

export default class FakerMocks implements IMocks{
    getClients(): ClientsEntity[] {
        let people: IPeopleEntity[] = [];
        people = this._getPeople();
        const half = Math.ceil(people.length / 2);
        const physicalPeople = this._getPhysicalPeople(people.slice(0, half));
        const legalPeople = this._getLegalPeople(people.slice(half));
        return (physicalPeople as IPeopleEntity[]).concat(legalPeople) as ClientsEntity[];
    }

    private _getPeople(): IPeopleEntity[] {
        const people: IPeopleEntity[] = [];
        Array.from({ length: 10 }).forEach(() => {
            people.push({
                cep: faker.address.zipCode('########'),
                creditLimit: Number(faker.finance.amount(0, 10000)),
                comments: faker.random.words(10)
            });
        });
        return people;
    }

    private _getPhysicalPeople(people: IPeopleEntity[]): IPhysicalPeopleEntity[] {
        const physicalPeople: IPhysicalPeopleEntity[] = [];
        people.forEach((people) => {
            physicalPeople.push({ ...people, ...{ name: faker.name.fullName(), cpf: Number(faker.random.numeric(11)) } });
        });
        return physicalPeople
    }

    private _getLegalPeople(people: IPeopleEntity[]): ILegalPeopleEntity[] {
        const legalPeople: ILegalPeopleEntity[] = [];
        people.forEach((people) => {
            legalPeople.push({ ...people, ...{ socialReason: faker.company.name(), cnpj: Number(faker.random.numeric(14)) } });
        });
        return legalPeople;
    }
}