import { IGeneralAccountDTO } from "./generalAccountsDTO";

export interface ISavingAccountDTO extends IGeneralAccountDTO {
    income: number
}