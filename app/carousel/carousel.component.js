"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var api_service_1 = require('../api/api.service');
require('rxjs/add/operator/map');
var CarouselComponent = (function () {
    function CarouselComponent(_api) {
        var _this = this;
        this._api = _api;
        this.index = 0;
        this.name = "";
        this.location = "";
        this.restaurant = [];
        this.businesses = [];
        this._api.getJson().subscribe(function (api) {
            _this.restaurant = api.data.restaurant;
            _this.businesses = api.data.restaurant.businesses;
            _this.location = api.data.restaurant.businesses[0].location;
            _this.name = _this.businesses[0].name;
            var el = document.getElementById("image");
            el.style.backgroundImage = "url(" + _this.businesses[0].image_url + ")";
        });
    }
    CarouselComponent.prototype.nextImage = function () {
        var el = document.getElementById("image");
        this.index += 1;
        if (this.index > this.businesses.length - 1) {
            this.index = 0;
        }
        this.business = this.businesses[this.index];
        this.location = this.business.location;
        this.name = this.business.name;
        el.style.backgroundImage = "url(" + this.business.image_url + ")";
    };
    CarouselComponent.prototype.lastImage = function () {
        var el = document.getElementById("image");
        this.index -= 1;
        if (this.index < 0) {
            this.index = this.businesses.length - 1;
        }
        this.business = this.businesses[this.index];
        this.location = this.business.location;
        this.name = this.business.name;
        el.style.backgroundImage = "url(" + this.business.image_url + ")";
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'carousel',
            moduleId: module.id,
            templateUrl: 'carousel.html',
            styleUrls: ['carousel.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.Api])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map