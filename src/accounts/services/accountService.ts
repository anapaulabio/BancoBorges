import { CRUD } from "../../common/interfaces/crud/crudInterfaces";
import AccountDAO from "../daos/accountsDAO";
import { AccountDTO } from "../dtos/AccountsDTO";
import debug from 'debug';

const log: debug.IDebugger = debug('app:accounts-services');

class AccountService implements CRUD {
    async create(resource: AccountDTO): Promise<AccountDTO> {
        return AccountDAO.create(resource)
    }
    async deleteById(resourceId: number): Promise<void> {
        return AccountDAO.delete(resourceId)
    }
    async list(): Promise<AccountDTO[]> {
        return AccountDAO.list()
    }
    async updateById(resource: AccountDTO): Promise<AccountDTO | undefined> {
        return AccountDAO.update(resource)
    }
    async readById(resourceId: number): Promise<AccountDTO | undefined> {
        return AccountDAO.search(resourceId)
    }
}

export default new AccountService();