import { IAccountDTO } from "./accountDto";

export interface ISavingsAccountDTO extends IAccountDTO {
    yield: number;
}