import { IPersonEntity } from "./person.entity";

export interface ILegalPersonEntity extends IPersonEntity {
    socialReason: string;
    cnpj: number;
}