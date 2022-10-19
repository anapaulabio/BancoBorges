import { AccountEntity } from "../../entities/accounts/account.entity";
import createAccountUsecase from "./create.account.usecase";
import depositAccountUsecase from "./deposit.account.usecase";

test("teste unitario de depositAccountUsecase", async () => {
        const account: AccountEntity = {
            clientId: 0,
            agency: 10,
            accountNumber: 11234,
            balance: 1000,
            transferLimit: 100,
            tax: 5             
        }
        await createAccountUsecase.execute(account)
        const account2 = {
            accountId: 0,
            value: 100,   
        }

        expect(await depositAccountUsecase.execute(account2)).toMatchObject(account)
    
})