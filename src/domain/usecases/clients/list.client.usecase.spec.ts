import listClientUsecase from "./list.client.usecase";

test("Teste unitário de ListClientUseCase", async() => {
    expect(await listClientUsecase.execute()).toEqual([])
})