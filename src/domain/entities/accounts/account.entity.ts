import { ISavingAccountEntity } from './savingaccount.entity';
import { ICheckingAccountEntity } from './checkingaccount.entity';

export type AccountEntity = ICheckingAccountEntity | ISavingAccountEntity;