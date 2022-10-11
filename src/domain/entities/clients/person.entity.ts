import { IAddressEntity } from "./address.entity"

export interface IPersonEntity extends IAddressEntity {
    indexId?: number,
    address?: IAddressEntity,
    creditLimit: number,
    registerDate?: Date,
    updateDate?: Date,
    comments: string
}
