import { IPersonEntity } from "./person.entity";

export interface IPhysicalPersonEntity extends IPersonEntity {
    name: string;
    cpf: number;
}
