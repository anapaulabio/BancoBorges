import { AccountEntity } from "../../entities/accounts/account.entity";
import createAccountUsecase from "./create.account.usecase";
import withdrawAccountUsecase from "./withdraw.account.usecase";

test("teste unitario de withdrawAccountUsecase", async () => {
        const account: AccountEntity = {
            clientId: 0,
            agency: 10,
            accountNumber: 11234,
            balance: 1000,
            income: 10  
        }
        await createAccountUsecase.execute(account)
        const account2 = {
            accountId: 0,
            value: 100,   
        }

        expect(await withdrawAccountUsecase.execute(account2)).toMatchObject(account)
    
})