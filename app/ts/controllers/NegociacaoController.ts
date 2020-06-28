import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';
import { DiaDaSemana } from '../models/Enuns/DiaDaSemana';
import { logarTempoDeExecucao } from '../helpers/index';
import { domInject } from '../helpers/decorators/domInject';
import { NegociacaoService } from '../services/NegociacaoService';
import { throttle } from '../helpers/decorators/throttle';

export class NegociacaoController{

    //Carrega o elemento apenas no primeiro acesso
    @domInject('#data') 
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(private service: NegociacaoService){
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    @throttle()
    adiciona() {
        let date = new Date(this._inputData.val().toString().replace('-', ','));
        
        if(date.getDay() == DiaDaSemana.Sabado || date.getDay() == DiaDaSemana.Domingo){
            this._mensagemView.update('Somente negociações em dias úteis sao permitidas');
            return;
        }

        const negociacao = new Negociacao(
            date,
            parseInt(this._inputQuantidade.val().toString()),
            parseFloat(this._inputValor.val().toString()));

        this._negociacoes.adiciona(negociacao);

        this._negociacoes
            .paraArray()
            .forEach(negociacao => console.log(negociacao)); 

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    
    @throttle()
    async importaDados(){

        try{
            let dados : Negociacao[] | void = await this.service.importarNegociacoes();

            if (!dados) return;
    
            this._negociacoes = new Negociacoes();
    
            dados.forEach((dado: Negociacao) => this._negociacoes.adiciona(dado));
    
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update('Importação realizada com sucesso');

        }catch(e){
            this._mensagemView.update(e.message);
        }

    }
}