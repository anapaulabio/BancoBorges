import { AccountEntity } from "../../../../../domain/entities/accounts/account.entity";
import { IGeneralAccountEntity } from "../../../../../domain/entities/accounts/generalaccount.entity";
import { ICheckingAccountEntity } from "../../../../../domain/entities/accounts/checkingaccount.entity";
import { ISavingAccountEntity } from "../../../../../domain/entities/accounts/savingaccount.entity";

export default function (account: any): AccountEntity | undefined {
    if(!account)
    return

    let entity: IGeneralAccountEntity = {
        accountId: account.accountId,
        clientId: account.clientId,
        agency: account.agency,
        accountNumber: account.accountNumber,
        balance: account.balance
    }

    if(account.checkingAccount){
        (entity as ICheckingAccountEntity).tax = account.checkingAccount.tax;
        (entity as ICheckingAccountEntity).transferLimit = account.checkingAccount.transferLimit;
    } else if (account.savingAccount){
        (entity as ISavingAccountEntity).income = account.savingAccount.income;
    } else {
        return;
    }

    return (entity as AccountEntity)
}