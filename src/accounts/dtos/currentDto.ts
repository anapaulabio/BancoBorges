import { IAccountDTO } from "./accountDto";

export interface ICurrentAccountDTO extends IAccountDTO {
    tax: number;
}