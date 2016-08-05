System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AmenitieService;
    return {
        setters:[],
        execute: function() {
            AmenitieService = (function () {
                function AmenitieService() {
                }
                AmenitieService.prototype.getAmenitie = function () {
                    return ["Restaurant", "Grocery Stores", "Banks", "Other Amenities"];
                };
                return AmenitieService;
            }());
            exports_1("AmenitieService", AmenitieService);
        }
    }
});
//# sourceMappingURL=amenitie.service.js.map