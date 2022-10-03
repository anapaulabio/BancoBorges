import { BankAccountDTO } from "../dtos/bankAccounts";
import debug from "debug";

const log: debug.IDebugger = debug('app:bankAccounts-dao');

class BankAccountDAO {
    private _accounts: BankAccountDTO[];

    constructor() {
        this._accounts = [];
        log('Creating new instance of BankAccountDAO')
    }

    create(account: BankAccountDTO): BankAccountDTO {
        let objectAccount
        account.numberAccount = this._accounts.length;
        objectAccount = account;
        this._accounts.push(objectAccount);

        return objectAccount;
    }

    update(account: BankAccountDTO): BankAccountDTO | undefined {
        let objectAccount;
        objectAccount = account;

        if (objectAccount.numberAccount === undefined) {
            return;
        }
        this._accounts[objectAccount.numberAccount] = objectAccount;
        return objectAccount;
    }

    delete(account: number): void {
        const indexAccount = this._accounts.findIndex((obj: BankAccountDTO) => {
            return obj.numberAccount === account;
        })

        this._accounts.slice(indexAccount, 1);
    }

    list(): (BankAccountDTO)[] {
        let objectAccount: (BankAccountDTO)[] = [];

        for (let account of this._accounts) {
            objectAccount.push(account);
        }
        return objectAccount;
    }

    search(cpfCnpj: number): BankAccountDTO | undefined {
        const client = this._accounts.find((obj: BankAccountDTO) => {
            return obj.numberAccount === cpfCnpj;

        })

        if (!client) {
            return;
        }
        return client;
    }

}

