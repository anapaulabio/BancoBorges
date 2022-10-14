import { AccountEntity } from '../../entities/accounts/account.entity';
import CreateAccountUseCase from '../accounts/create.account.usecase';

test('Teste unitário de CreateAccountUseCase', async () => {
    const account: AccountEntity = {
        clientId: 0,
        agency: 10,
        accountNumber: 11234,
        balance: 1000,
        tax: 5
    }
    expect( await CreateAccountUseCase.execute(account)).toMatchObject(account);
})