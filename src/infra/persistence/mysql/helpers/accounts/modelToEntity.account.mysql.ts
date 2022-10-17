import { AccountEntity } from "../../../../../domain/entities/accounts/account.entity";
import { IGeneralAccountEntity } from "../../../../../domain/entities/accounts/generalaccount.entity";
import { ICheckingAccountEntity } from "../../../../../domain/entities/accounts/checkingaccount.entity";
import { ISavingAccountEntity } from "../../../../../domain/entities/accounts/savingaccount.entity";

export default function (account: any): AccountEntity | undefined {
    if(!account)
    return

    let entity: IGeneralAccountEntity = {
        indexId: account.indexId,
        clientId: account.clientId,
        agency: account.agency,
        accountNumber: account.accountNumber,
        balance: account.balance
    }

    if(account.checkingaccount){
        (entity as ICheckingAccountEntity).tax = account.checkingaccount.tax;
        (entity as ICheckingAccountEntity).transferLimit = account.checkingaccount.transferLimit;
    } else if (account.savingaccount){
        (entity as ISavingAccountEntity).income = account.savingaccount.income;
    } else {
        return;
    }

    return (entity as AccountEntity)
}