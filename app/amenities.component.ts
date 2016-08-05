import {Component} from 'angular2/core'
import {AmenitieService} from "./amenitie.service"
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'amenities',
    template: `
        <ul>
            <li *ngFor="#amenitie of amenities">
            {{ amenitie }}
            </li>
        </ul>
        `,
    providers: [AmenitieService],
    directives:  [AutoGrowDirective]
})
export class AmenitiesComponent {
    amenities;

    constructor(amenitieService: AmenitieService){
        this.amenities = amenitieService.getAmenitie();
    }
}