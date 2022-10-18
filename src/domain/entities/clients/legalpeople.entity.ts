import { IPeopleEntity } from "./people.entity";

export interface ILegalPeopleEntity extends IPeopleEntity {
    socialReason: string;
    cnpj: number;
}