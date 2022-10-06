// O controller apenas direciona as requisições para as demais pastas
import express from 'express';
import clientsServices from "../services/clientsServices";
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-controller');

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await clientsServices.list();
        res.status(200).send(clients);
    }
    async getClientById(req: express.Request, res: express.Response){
        const clients = await clientsServices.readById(Number(req.params.cpfCnpj));
        res.status(200).send(clients);
    }
    async createClient(req: express.Request, res: express.Response){
        const clients = await clientsServices.create(req.body);
        res.status(201).send(clients);
    }
    async updateClient(req: express.Request, res: express.Response){
        const clients = await clientsServices.updateById(req.body);
        res.status(200).send(clients);
    }
    async deleteClient(req: express.Request, res: express.Response){
        const clients = await clientsServices.deleteById(Number(req.params.cpfCnpj));
        res.status(204).send;
    }
}

export default new ClientsController();