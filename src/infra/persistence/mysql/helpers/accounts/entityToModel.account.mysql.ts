import { AccountEntity } from "../../../../../domain/entities/accounts/account.entity";

export default function (account: AccountEntity){
    const Account = {
        accountId: account.accountId,
        clientId: account.clientId,
        agency: account.agency,
        accountNumber: account.accountNumber,
        balance: account.balance
    }

    let checkingAccount = undefined;
    if('tax' in account){
        checkingAccount = {
            accountId: undefined,
            tax: account.tax,
            transferLimit: account.transferLimit
        }
    }

    let savingAccount = undefined;
    if('income' in account){
        savingAccount =  {
            accountId: undefined,
            income: account.income
        }
    }

    return {
        Account: Account,
        checkingAccount: checkingAccount,
        savingAccount: savingAccount
    }
}