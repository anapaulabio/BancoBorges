interface Client {
    id?: string;
    endereco: string;
    limite: number;
    dataCadastro: number;
    atualizacaoCadastro: number;
    observacao: string;
}

interface PF extends Client {
    nome: string;
    cpf: number;
}

interface PJ extends Client {
    razaoSocial: string;
    cnpj: number;
}

class Person implements Client {
    id?: string
    constructor(protected _client: Client) { }

    get endereco(): string {
       return this._client.endereco
    }
    get limite(): number {
        return this._client.limite
    }
    get dataCadastro(): number {
        return this._client.dataCadastro
    }
    get atualizacaoCadastro(): number {
        return this._client.atualizacaoCadastro
    }
    get observacao(): string {
        return this._client.observacao
    }
    
    
    set endereco(endereco: string) {
        this._client.endereco = endereco
     }
     set limite(limite: number){
        this._client.limite = limite
     }
     set dataCadastro(dataCadastro: number) {
        this._client.dataCadastro = dataCadastro
     }
     set atualizacaoCadastro(atualizacaoCadastro: number) {
        this._client.atualizacaoCadastro = atualizacaoCadastro
     }
     set observacao(observacao: string) {
        this._client.observacao = observacao
     }


}

class PersonPF extends Person implements PF {
    constructor(private _pessoaFisica: PF) {
        super(_pessoaFisica)
    }

    get nome(): string {
        return this._pessoaFisica.nome
    }
    get cpf(): number {
        return this._pessoaFisica.cpf
    }
    set nome(nome:string) {
        this._pessoaFisica.nome = nome
    }
    set cpf(cpf:number) {
        this._pessoaFisica.cpf = cpf
    }

}

class PersonPJ extends Person implements PJ {
    constructor(private _pessoaJuridica: PJ) {
        super(_pessoaJuridica)
    }

    get razaoSocial(): string {
        return this._pessoaJuridica.razaoSocial
    }
    get cnpj(): number {
        return this._pessoaJuridica.cnpj
    }
    set razaoSocial(razaoSocial:string) {
        this._pessoaJuridica.razaoSocial = razaoSocial
    }
    set cnpj(cnpj:number) {
        this._pessoaJuridica.cnpj = cnpj
    }

}

