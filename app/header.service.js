System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeaderService;
    return {
        setters:[],
        execute: function() {
            HeaderService = (function () {
                function HeaderService() {
                }
                HeaderService.prototype.getHeader = function () {
                    return "Title";
                };
                return HeaderService;
            }());
            exports_1("HeaderService", HeaderService);
        }
    }
});
//# sourceMappingURL=header.service.js.map