import express from 'express';

import { CommonRoutesConfig } from '../common/commonRoutes';
import clientsController from './controllers/clientsController';
import clientsMiddlewares from './middlewares/clientsMiddlewares';

export class ClientsRoutes extends CommonRoutesConfig {
    constructor( app: express.Application){
        super(app, 'ClientsRoutes');
    }

        configureRoutes(): express.Application {
            this.app.route('/clients')
            .get(clientsController.listClients)
            .post(
                clientsMiddlewares.validateRequiredClientBodyFields,
                clientsMiddlewares.validateClientRepeated,
                clientsController.createClient
                );
            
            this.app.route('/clients/cpfCnpj')
            .all(clientsMiddlewares.validateClientExists)
            .get(clientsController.getClientById)
            .put(
                clientsMiddlewares.validateRequiredClientBodyFields,
                clientsController.updateClient
            )
            .delete(clientsController.deleteClient);

            return this.app;
        }
}