import { AccountEntity } from "../../entities/accounts/account.entity";
import readAccountUsecase from "./read.account.usecase";
import createAccountUsecase from "./create.account.usecase";

test(" Teste unitário de depositAccountUsecase", async () => {
    const account: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 11234,
        balance: 1000,
        tax: 5
    }
    await createAccountUsecase.execute(account)
    const account2: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 11234,
        balance: 1000,
        tax: 5
    }

    expect(await readAccountUsecase.execute({accountId: 0})).toMatchObject(account2)
})