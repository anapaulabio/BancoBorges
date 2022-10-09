import { CommonRoutesConfig } from "./common.routes.config";
import ClientsController from "../controllers/clients.controller";
import ClientsMiddleware from "../middlewares/clients.middleware";
import express from "express";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
            .get(ClientsController.listClients)
            .post(
                ClientsMiddleware.validateRequiredClientBodyFields,
                ClientsMiddleware.validateClientRepeated,
                ClientsController.createClient
            );

            this.app.route(`/clients/:cpfCnpj`)
                        .all(ClientsMiddleware.validateClientExists)
                        .get(ClientsController.getClientById)
                        .put(
                            ClientsMiddleware.validateRequiredClientBodyFields,
                            ClientsController.updateClient
                        )
                        .delete(ClientsController.removeClient);

        return this.app;
    }
}