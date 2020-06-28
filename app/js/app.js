System.register(["./controllers/NegociacaoController", "./services/NegociacaoService"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_1, NegociacaoService_1, negociacaoService, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            },
            function (NegociacaoService_1_1) {
                NegociacaoService_1 = NegociacaoService_1_1;
            }
        ],
        execute: function () {
            negociacaoService = new NegociacaoService_1.NegociacaoService();
            controller = new NegociacaoController_1.NegociacaoController(negociacaoService);
            $('.form').submit(controller.adiciona.bind(controller));
            $('#botao-importa').click(controller.importaDados.bind(controller));
        }
    };
});
