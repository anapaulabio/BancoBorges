import listAccountUsecase from './list.account.usecase'

test("Teste unitário de listAccountUsecase", async () => {
    expect( await listAccountUsecase.execute()).toEqual([])
})