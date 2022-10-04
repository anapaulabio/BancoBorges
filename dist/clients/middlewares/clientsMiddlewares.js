"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientsServices_1 = __importDefault(require("../services/clientsServices"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-middleware');
class ClientsMiddleware {
    async validateRequiredClientBodyFields(req, res, next) {
        if (req.body && (req.body.cpf || req.body.cnpj)) {
            next();
        }
        else {
            res.status(400).send({ error: `Você deve enviar o campo cpf ou cnpj.` });
        }
    }
    async validateClientExists(req, res, next) {
        const user = await clientsServices_1.default.readById(Number(req.params.cpfCnpj));
        if (user) {
            next();
        }
        else {
            res.status(404).send({ error: `Usuário ${req.params.cpfCnpj} não existe` });
        }
    }
    async validateClientRepeated(req, res, next) {
        let resourceID = ('cpf' in req.body ? req.body.cpf : req.body.cnpj);
        const user = await clientsServices_1.default.readById(resourceID);
        if (!user) {
            next();
        }
        else {
            res.status(404).send({ error: `Usuário ${resourceID} já existe existe` });
        }
    }
}
exports.default = new ClientsMiddleware();
