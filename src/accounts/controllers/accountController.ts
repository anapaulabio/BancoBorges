import express from 'express';
import AccountService from '../services/accountService';
import debug from 'debug';

const log: debug.IDebugger = debug('app:accounts-controller');

class AccountController {
    async listAccount(req: express.Request, res: express.Response){
        const account = await AccountService.list();
        res.status(200).send(account);
    }
    async getAccountById(req: express.Request, res: express.Response){
        const account = await AccountService.readById(Number(req.params.accountNumber));
        res.status(200).send(account);
    }
    async createAccount(req: express.Request, res: express.Response){
        const account = await AccountService.create(req.body);
        res.status(201).send(account);
    }
    async updateAccount(req: express.Request, res: express.Response){
        const account = await AccountService.updateById(req.body);
        res.status(200).send(account);
    }
    async deleteAccount(req: express.Request, res: express.Response){
        const account = await AccountService.deleteById(Number(req.params.accountNumber));
        res.status(204).send;
    }
}

export default new AccountController()