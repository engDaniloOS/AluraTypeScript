import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';
import { DiaDaSemana } from '../models/Enuns/DiaDaSemana';
import { data } from 'jquery';

export class NegociacaoController{

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

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

        this._negociacoes.paraArray().forEach(
            negociacao => console.log(negociacao)
        ); 

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    } 
}