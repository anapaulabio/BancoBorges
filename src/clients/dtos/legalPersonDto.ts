import { IPersonDTO } from "./personDto";

export interface ILegalPersonDTO extends IPersonDTO {
    socialReason: string;
    cnpj: number;
}

// regras de negócio da entidade