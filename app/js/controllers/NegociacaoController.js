System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacoes", "../models/Negociacao", "../models/Enuns/DiaDaSemana", "../helpers/index", "../helpers/decorators/domInject", "../helpers/decorators/throttle"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var NegociacoesView_1, MensagemView_1, Negociacoes_1, Negociacao_1, DiaDaSemana_1, index_1, domInject_1, throttle_1, NegociacaoController;
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
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (domInject_1_1) {
                domInject_1 = domInject_1_1;
            },
            function (throttle_1_1) {
                throttle_1 = throttle_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = (() => {
                class NegociacaoController {
                    constructor(service) {
                        this.service = service;
                        this._negociacoes = new Negociacoes_1.Negociacoes();
                        this._negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
                        this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                        this._negociacoesView.update(this._negociacoes);
                    }
                    adiciona() {
                        let date = new Date(this._inputData.val().toString().replace('-', ','));
                        if (date.getDay() == DiaDaSemana_1.DiaDaSemana.Sabado || date.getDay() == DiaDaSemana_1.DiaDaSemana.Domingo) {
                            this._mensagemView.update('Somente negociações em dias úteis sao permitidas');
                            return;
                        }
                        const negociacao = new Negociacao_1.Negociacao(date, parseInt(this._inputQuantidade.val().toString()), parseFloat(this._inputValor.val().toString()));
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoes
                            .paraArray()
                            .forEach(negociacao => console.log(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagemView.update('Negociação adicionada com sucesso!');
                    }
                    importaDados() {
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                let dados = yield this.service.importarNegociacoes();
                                if (!dados)
                                    return;
                                this._negociacoes = new Negociacoes_1.Negociacoes();
                                dados.forEach((dado) => this._negociacoes.adiciona(dado));
                                this._negociacoesView.update(this._negociacoes);
                                this._mensagemView.update('Importação realizada com sucesso');
                            }
                            catch (e) {
                                this._mensagemView.update(e.message);
                            }
                        });
                    }
                }
                __decorate([
                    domInject_1.domInject('#data')
                ], NegociacaoController.prototype, "_inputData", void 0);
                __decorate([
                    domInject_1.domInject('#quantidade')
                ], NegociacaoController.prototype, "_inputQuantidade", void 0);
                __decorate([
                    domInject_1.domInject('#valor')
                ], NegociacaoController.prototype, "_inputValor", void 0);
                __decorate([
                    index_1.logarTempoDeExecucao(),
                    throttle_1.throttle()
                ], NegociacaoController.prototype, "adiciona", null);
                __decorate([
                    throttle_1.throttle()
                ], NegociacaoController.prototype, "importaDados", null);
                return NegociacaoController;
            })();
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
