import { IGeneralAccountDTO } from "./generalAccountsDTO";

export interface ICheckingAccountDTO extends IGeneralAccountDTO {
    tax: number,
    transferLimit: number
}