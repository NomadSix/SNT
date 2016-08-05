System.register(['angular2/core', "./amenitie.service", './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, amenitie_service_1, auto_grow_directive_1;
    var AmenitiesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (amenitie_service_1_1) {
                amenitie_service_1 = amenitie_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            AmenitiesComponent = (function () {
                function AmenitiesComponent(amenitieService) {
                    this.amenities = amenitieService.getAmenitie();
                }
                AmenitiesComponent = __decorate([
                    core_1.Component({
                        selector: 'amenities',
                        template: "\n        <ul>\n            <li *ngFor=\"#amenitie of amenities\">\n            {{ amenitie }}\n            </li>\n        </ul>\n        ",
                        providers: [amenitie_service_1.AmenitieService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [amenitie_service_1.AmenitieService])
                ], AmenitiesComponent);
                return AmenitiesComponent;
            }());
            exports_1("AmenitiesComponent", AmenitiesComponent);
        }
    }
});
//# sourceMappingURL=amenities.component.js.map