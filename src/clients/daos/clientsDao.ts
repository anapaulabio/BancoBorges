// Responsável pela relação com banco de dados
import { debug } from 'debug';
import { ClientsDTO } from "../dtos/clientsDtos";

const log: debug.IDebugger = debug('app:in-memory-dao') 

class ClientsDAO {
    private _clients: ClientsDTO[];

    constructor () {
        this._clients = [];
        log('      Creating new instance of ClientDao')
    }

    register(person: ClientsDTO): ClientsDTO {
        let objectPerson
        person.indexId = this._clients.length;
        objectPerson = person 
        this._clients.push(objectPerson);

        return objectPerson;
    }

    update(person: ClientsDTO): ClientsDTO | undefined {
        let objectPerson 
        objectPerson = person

        if(objectPerson.indexId === undefined) {
            return;
        }
        this._clients[objectPerson.indexId] = objectPerson;
        return objectPerson;
    }

    delete(cpfCnpj: number): void {
        const indexId = this._clients.findIndex((obj: ClientsDTO) => {
            if('cpf' in obj) {
                return obj.cpf === cpfCnpj;
            } else {
                return obj.cnpj === cpfCnpj;
            }
        })

        this._clients.slice(indexId, 1);
    }

    list(): (ClientsDTO)[] {
        let objectPerson: (ClientsDTO)[] = [];
        
        for(let client of this._clients){
            objectPerson.push(client);
        }
        return objectPerson
    }
    
    search(cpfCnpj: number): ClientsDTO | undefined {
        const client = this._clients.find((obj: ClientsDTO) => {
            if('cpf' in obj) {
                return obj.cpf === cpfCnpj;
            } else {
                return obj.cnpj === cpfCnpj;
            }
        })

        if(!client){ 
            return;
        }
        return client    
    }

}

export default ClientsDAO