import { ICheckingAccountDTO } from "./checkingDTO";
import { ISavingAccountDTO } from './savingDTO';

export type AccountDTO =  ISavingAccountDTO | ICheckingAccountDTO;