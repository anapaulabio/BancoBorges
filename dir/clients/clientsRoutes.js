"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const commonRoutes_1 = require("../common/commonRoutes");
const clientsController_1 = __importDefault(require("./controllers/clientsController"));
const clientsMiddlewares_1 = __importDefault(require("./middlewares/clientsMiddlewares"));
class ClientsRoutes extends commonRoutes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route('/clients')
            .get(clientsController_1.default.listClients)
            .post(clientsMiddlewares_1.default.validateRequiredClientBodyFields, clientsMiddlewares_1.default.validateClientRepeated, clientsController_1.default.createClient);
        this.app.route('/clients/cpfCnpj')
            .all(clientsMiddlewares_1.default.validateClientExists)
            .get(clientsController_1.default.getClientById)
            .put(clientsMiddlewares_1.default.validateRequiredClientBodyFields, clientsController_1.default.updateClient)
            .delete(clientsController_1.default.deleteClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
