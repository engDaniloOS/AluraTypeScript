System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacoes", "../models/Negociacao", "../models/Enuns/DiaDaSemana"], function (exports_1, context_1) {
    "use strict";
    var NegociacoesView_1, MensagemView_1, Negociacoes_1, Negociacao_1, DiaDaSemana_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (DiaDaSemana_1_1) {
                DiaDaSemana_1 = DiaDaSemana_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputValor = $('#valor');
                    this._inputQuantidade = $('#quantidade');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let date = new Date(this._inputData.val().toString().replace('-', ','));
                    if (date.getDay() == DiaDaSemana_1.DiaDaSemana.Sabado || date.getDay() == DiaDaSemana_1.DiaDaSemana.Domingo) {
                        this._mensagemView.update('Somente negociações em dias úteis sao permitidas');
                        return;
                    }
                    const negociacao = new Negociacao_1.Negociacao(date, parseInt(this._inputQuantidade.val().toString()), parseFloat(this._inputValor.val().toString()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoes.paraArray().forEach(negociacao => console.log(negociacao));
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
