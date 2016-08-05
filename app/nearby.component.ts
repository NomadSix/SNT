import {Component} from 'angular2/core'
import {NearbyService} from './nearby.service'

@Component({
   selector: 'nearby',
   template: `
        <div *ngFor="#service of services">
            <div class='container'>
            <p class='text'>{{ service }}</p>
            </div>
        </div>
   `,
   styles: [`
        .container {
            float: right;
            background-image: url('content/nearby/bg.png');
            width: 180px;
            height: 180px;
            margin-bottom: 10; 
        }
        p {
            posistion: absolute;
            margin: 65% 0;
            width: 100%;
            color: white;

            text-align: center;
            font-size: 175%;

        }
    `],
    providers: [NearbyService]
})
export class NearbyComponent {
    services;

    constructor(nearbyService: NearbyService){
        this.services = nearbyService.getService();
    }

}