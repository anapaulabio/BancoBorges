import DeleteAccountUsecase from '../accounts/delete.account.usecase';

test("Teste unitário de DeleteAccountUsecase", async () => {
    const account = { 
        accountId: 0
    }
    expect( await DeleteAccountUsecase.execute(account)).toBeUndefined()
})