import { Negociacao } from "../models/Negociacao";
import { Negociacoes } from "../models/Negociacoes";
import { BaseService } from "./BaseService";
import { NegociacaoDto } from "../models/DTOs/NegociacaoDto";

export class NegociacaoService extends BaseService{

    private pathDefault: string = 'http://localhost:8080/dados';

    async importarNegociacoes(path: string = this.pathDefault): Promise<void | Negociacao[]>{

        let negociacoes: Negociacoes = new Negociacoes();

        return fetch(path)
                    .then(res => this.isResponseOk(res))
                    .then(res => res.json())
                    .then((dados: NegociacaoDto[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
                    .catch(err => {
                        console.log(err.message);
                        throw new Error('Não foi possível realizar a importação!');
                    });
    }
} 