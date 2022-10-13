import { Cep } from '../../../adapters/connectors/cep.interface';
import { CepFactory } from '../../../adapters/connectors/cep.factory';
import { ViaCep } from './viacep.api';

export class ViaCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ViaCep();
    }
}