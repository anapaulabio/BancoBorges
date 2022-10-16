import { AccountEntity } from '../../entities/accounts/account.entity';
import { CreateAccountUseCase } from '../accounts/create.account.usecase';
import { AccountsRepository } from '../../../adapters/repositories/accounts.repository'

jest.mock("../../../adapters/repositories/accounts.repository")
const AccountsRepositoryMock = AccountsRepository as jest.Mock<AccountsRepository> 

test('Teste unitário de CreateAccountUseCase', async () => {

    const repositoryAccount = new AccountsRepositoryMock() as jest.Mocked<AccountsRepository>
    repositoryAccount.create.mockResolvedValue({
        "clientId": 0,
        "agency": 10,
        "accountNumber": 4321,
        "balance": 100,
        "transferLimit": 100,
        "tax": 5,
    })
    const account: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 4321,
        balance: 100,
        transferLimit: 100,
        tax: 5
    }

    const createAccountUsecase = new CreateAccountUseCase(
        repositoryAccount,
    )
    expect( await createAccountUsecase.execute(account)).toMatchObject(account);
})