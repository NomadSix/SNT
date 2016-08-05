System.register(['angular2/core', './header.service', './amenities.component', './carousel.component'], function(exports_1, context_1) {
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
    var core_1, header_service_1, amenities_component_1, carousel_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_service_1_1) {
                header_service_1 = header_service_1_1;
            },
            function (amenities_component_1_1) {
                amenities_component_1 = amenities_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(amenitieService) {
                    this.header = amenitieService.getHeader();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <p>{{ header }}</p>\n        <div id=\"content\">\n            <div class=\"left\">\n            <carousel></carousel>\n            <amenities></amenities>\n            </div>\n            <div class=\"right\"></div>\n        </div>\n        ",
                        providers: [header_service_1.HeaderService],
                        directives: [amenities_component_1.AmenitiesComponent, carousel_component_1.CarouselComponent]
                    }), 
                    __metadata('design:paramtypes', [header_service_1.HeaderService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map