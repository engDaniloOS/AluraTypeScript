System.register(["../models/Negociacao", "../models/Negociacoes", "./BaseService"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var Negociacao_1, Negociacoes_1, BaseService_1, NegociacaoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (BaseService_1_1) {
                BaseService_1 = BaseService_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService extends BaseService_1.BaseService {
                constructor() {
                    super(...arguments);
                    this.pathDefault = 'http://localhost:8080/dados';
                }
                importarNegociacoes(path = this.pathDefault) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let negociacoes = new Negociacoes_1.Negociacoes();
                        return fetch(path)
                            .then(res => this.isResponseOk(res))
                            .then(res => res.json())
                            .then((dados) => dados.map(dado => new Negociacao_1.Negociacao(new Date(), dado.vezes, dado.montante)))
                            .catch(err => {
                            console.log(err.message);
                            throw new Error('Não foi possível realizar a importação!');
                        });
                    });
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
