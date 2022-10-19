import { AccountEntity } from "../../entities/accounts/account.entity";
import updateAccountUsecase from "./update.account.usecase";
import createAccountUsecase from "./create.account.usecase";

test(" Teste unitário de updateAccountUsecase", async () => {
    const account: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 11234,
        balance: 1000,
        transferLimit: 100,
        tax: 5
    }
    await createAccountUsecase.execute(account)
    const account2: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 23654,
        balance: 1000,
        transferLimit: 100,
        tax: 5
    }
    const account3: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 23654,
        balance: 1000,
        transferLimit: 100,
        tax: 5
    }
    expect(await updateAccountUsecase.execute(account2)).toMatchObject(account3)
})