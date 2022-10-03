"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:bankAccounts-dao');
class BankAccountDAO {
    constructor() {
        this._accounts = [];
        log('Creating new instance of BankAccountDAO');
    }
    create(account) {
        let objectAccount;
        account.numberAccount = this._accounts.length;
        objectAccount = account;
        this._accounts.push(objectAccount);
        return objectAccount;
    }
    update(account) {
        let objectAccount;
        objectAccount = account;
        if (objectAccount.numberAccount === undefined) {
            return;
        }
        this._accounts[objectAccount.numberAccount] = objectAccount;
        return objectAccount;
    }
    delete(account) {
        const indexAccount = this._accounts.findIndex((obj) => {
            return obj.numberAccount === account;
        });
        this._accounts.slice(indexAccount, 1);
    }
    list() {
        let objectAccount = [];
        for (let account of this._accounts) {
            objectAccount.push(account);
        }
        return objectAccount;
    }
    search(cpfCnpj) {
        const client = this._accounts.find((obj) => {
            return obj.numberAccount === cpfCnpj;
        });
        if (!client) {
            return;
        }
        return client;
    }
}
