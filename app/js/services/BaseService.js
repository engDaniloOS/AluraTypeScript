System.register([], function (exports_1, context_1) {
    "use strict";
    var BaseService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BaseService = class BaseService {
                isResponseOk(response) {
                    if (response.ok)
                        return response;
                    throw new Error(response.statusText);
                }
            };
            exports_1("BaseService", BaseService);
        }
    };
});
