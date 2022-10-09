import { IGeneralAccountEntity } from './generalaccount.entity'

export interface ICheckingAccountEntity extends IGeneralAccountEntity {
    tax: number,
    transferLimit: number
}