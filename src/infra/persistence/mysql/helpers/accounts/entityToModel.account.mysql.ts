import { AccountEntity } from "../../../../../domain/entities/accounts/account.entity";

export default function (account: AccountEntity){
    const Account = {
        indexId: account.indexId,
        clientId: account.clientId,
        agency: account.agency,
        accountNumber: account.accountNumber,
        balance: account.balance
    }

    let checkingAccount = undefined;
    if('tax' in account){
        checkingAccount = {
            accountid: undefined,
            tax: account.tax,
            tranferLimit: account.transferLimit
        }
    }

    let savingAccount = undefined;
    if('income' in account){
        savingAccount =  {
            accountid: undefined,
            income: account.income
        }
    }

    return {
        Account: Account,
        checkingAccount: checkingAccount,
        savingAccount: savingAccount
    }
}