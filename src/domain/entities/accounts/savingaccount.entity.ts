import { IGeneralAccountEntity } from "./generalaccount.entity"

export interface ISavingAccountEntity extends IGeneralAccountEntity {
    income: number
}