import { ClientsEntity } from "../../../domain/entities/clients/client.entity";

export default interface IMocks {
    getClients(): ClientsEntity[];
}