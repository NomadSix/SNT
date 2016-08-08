import {Component} from '@angular/core'

@Component({
   selector: 'nearby',
   moduleId: module.id,
   templateUrl: 'nearby.html',
   styleUrls: ['nearby.css']
})
export class NearbyComponent {
    services = [{title:"Nearby Restaurants", icon:'fa-cutlery'},
                {title:"Nearby Groceries",icon:'fa-shopping-cart'},
                {title:"Nearby Banks",icon:'fa-usd'}
               ];
}
