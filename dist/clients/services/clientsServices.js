"use strict";
// contem as regras de negócio da api
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientsDao_1 = __importDefault(require("../daos/clientsDao"));
class ClientsService {
    async create(resource) {
        return clientsDao_1.default.create(resource);
    }
    async deleteById(resourceId) {
        return clientsDao_1.default.delete(resourceId);
    }
    async list() {
        return clientsDao_1.default.list();
    }
    async updateById(resource) {
        return clientsDao_1.default.update(resource);
    }
    async readById(resourceId) {
        return clientsDao_1.default.search(resourceId);
    }
}
exports.default = new ClientsService();
