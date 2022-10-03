import express from 'express';
import clientsServices from '../services/clientsServices';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-middleware');

class ClientsMiddleware {
    async validateRequiredClientBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if (req.body && (req.body.cpf || req.body.cnpj)) {
            next();
        } else {
            res.status(400).send({error: `Você deve enviar o campo cpf ou cnpj.`});
        }
    }

    async validateClientExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await clientsServices.readById(Number(req.params.cpfCnpj));
        if (user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${req.params.cpfCnpj} não existe`});
        }
    }

    async validateClientRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceID: number = ('cpf' in req.body ? req.body.cpf : req.body.cnpj);
        const user = await clientsServices.readById(resourceID);
        if (!user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${resourceID} já existe existe`});
        }
    }
}

export default new ClientsMiddleware();