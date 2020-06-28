System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, key, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log('------------------------------------');
                console.log(`Parâmetros passados para o método ${key}:${JSON.stringify(args)}`);
                const retorno = metodoOriginal.apply(this, args);
                console.log(`Retorno do método: ${JSON.stringify(retorno)}`);
                return retorno;
            };
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
