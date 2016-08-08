import {Component, ElementRef} from '@angular/core';
import {Api} from '../api/api.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'carousel',
    moduleId: module.id,
    templateUrl: 'carousel.html',
    styleUrls: ['carousel.css']
})
export class CarouselComponent {
    index = 0
    name = ""
    location = ""
    business;
    restaurant = []
    businesses = []
    constructor(private _api:Api){
      this._api.getJson().subscribe(api => {
        this.restaurant = api.data.restaurant;
        this.businesses = api.data.restaurant.businesses;
        this.location= api.data.restaurant.businesses[0].location
        this.name = this.businesses[0].name
        var el = document.getElementById("image")
        el.style.backgroundImage = "url("+this.businesses[0].image_url+")"
      })
    }
    nextImage(){
        var el = document.getElementById("image")
        this.index += 1
        if (this.index > this.businesses.length - 1){
            this.index = 0
        }
        this.business = this.businesses[this.index]
        this.location = this.business.location
        this.name = this.business.name
        el.style.backgroundImage = "url("+this.business.image_url+")"
    }
    lastImage(){
        var el = document.getElementById("image")
        this.index -= 1
        if (this.index < 0){
            this.index = this.businesses.length - 1
        }
        this.business = this.businesses[this.index]
        this.location = this.business.location
        this.name = this.business.name
        el.style.backgroundImage = "url("+this.business.image_url+")"
    }
}
