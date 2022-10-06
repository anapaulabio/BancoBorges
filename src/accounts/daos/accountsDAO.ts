import { AccountDTO } from "../dtos/AccountsDTO";

class AccountDAO {
    private _accounts: AccountDTO[];
    private static _instance: AccountDAO;

    private constructor(){}

    static getInstance(): AccountDAO {
        if(!AccountDAO._instance){
            AccountDAO._instance = new AccountDAO();
        }
        return AccountDAO._instance
    }

    create(account: AccountDTO): AccountDTO {
        let objAccount: AccountDTO
        objAccount = account

        account.indexId = this._accounts.length
        this._accounts.push(objAccount)

        return objAccount    
    }

    list(): (AccountDTO)[]{
        let objAccount: (AccountDTO)[] = []

        for (let account of this._accounts){
           objAccount.push(account)
        }

        return objAccount
    }

    search(accountNumber: number): AccountDTO | undefined {
        const account = this._accounts.find((obj: AccountDTO) => {
            return obj.accountNumber === accountNumber
        })
        if(!account){
            return;
        }
        return account
    }

    update(account: AccountDTO): AccountDTO | undefined {
        let objAccount: AccountDTO
        objAccount = account

        if (objAccount.indexId === undefined) {
            return;
        }
        this._accounts[objAccount.indexId] = objAccount
        return objAccount

    }

    delete(accountNumber: number): void {
        const indexId = this._accounts.findIndex((obj: AccountDTO) => {
            return obj.accountNumber === accountNumber
        })
        this._accounts.splice(indexId, 1)
    }
}

export default AccountDAO.getInstance()