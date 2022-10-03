"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientsServices_1 = __importDefault(require("../services/clientsServices"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:clients-controller');
class ClientsController {
    async listClients(req, res) {
        const clients = await clientsServices_1.default.list();
        res.status(200).send(clients);
    }
    async getClientById(req, res) {
        const clients = await clientsServices_1.default.readById(Number(req.params.clientId));
        res.status(200).send(clients);
    }
    async createClient(req, res) {
        const clients = await clientsServices_1.default.create(req.body);
        res.status(201).send(clients);
    }
    async updateClient(req, res) {
        const clients = await clientsServices_1.default.updateById(req.body);
        res.status(200).send(clients);
    }
    async deleteClient(req, res) {
        const clients = await clientsServices_1.default.deleteById(Number(req.params.clientsId));
        res.status(204).send;
    }
}
exports.default = new ClientsController();
