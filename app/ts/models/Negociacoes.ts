import { Negociacao } from './Negociacao';

export class Negociacoes{

    private _negociacoes: Negociacao[] = []

    paraArray(): Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    adiciona(negociacao: Negociacao) : void{
        this._negociacoes.push(negociacao);
    }
}