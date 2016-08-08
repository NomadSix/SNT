import {Component} from '@angular/core'

@Component({
    selector: 'amenities',
    moduleId: module.id,
    templateUrl: 'amenities.html',
    styleUrls: ['amenities.css']
})
export class AmenitiesComponent {
    amenities = [
            {title:'Restaurants', icon:'fa-cutlery'},
            {title:'Grocerie Stores',icon:'fa-shopping-cart'},
            {title:'Banks',icon:'fa-usd'},
            {title:'Other Amenities',icon:'fa-ellipsis-h'}
            ];;
}
