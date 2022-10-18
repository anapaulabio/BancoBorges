import { IPeopleEntity } from "./people.entity";

export interface IPhysicalPeopleEntity extends IPeopleEntity {
    name: string;
    cpf: number;
}
