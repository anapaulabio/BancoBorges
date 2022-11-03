import { IAddressesEntity } from "./address.entity"

export interface IPeopleEntity {
    peopleId?: number,
    addresses?: IAddressesEntity,
    cep: string,
    creditLimit: number,
    registerDate?: Date,
    updateDate?: Date,
    comments: string
}
