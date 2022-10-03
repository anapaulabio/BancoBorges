import { IPersonDTO } from "./personDto";

export interface IPhysicalPersonDTO extends IPersonDTO {
    name: string;
    cpf: number;
}

// regras de negócio da entidade