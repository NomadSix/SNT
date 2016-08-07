import {Component} from 'angular2/core'
import {NearbyService} from './nearby.service'

@Component({
   selector: 'nearby',
   template: `
        <i class='fa fa-angle-up'> </i>
        <div *ngFor="#service of services">
            <div class='container'>
            <div class="fa {{ service.icon }} fa-3x"> </div>
            <p class='text'>{{ service.title }}</p>
            </div>
        </div>
        <i class='fa fa-angle-down'> </i>
   `,
   styles: [`
        i {
            width: 180px;
            height: 30px;
            background-color: #4ebf4a;
            color: white;
            text-align: center;
            font-size: 24px;
            margin-bottom: 10px;
            margin-left: .5em;
            transition: .25s;
        }
        i:hover {
            background-color: 44a540;
        }
        .container {
            float: right;
            text-align: center;
            background-color: #333;
            width: 180px;
            height: 180px;
            margin-bottom: 10; 
            transition: .25s;
            transform-style: preserve-3d;
        }
        .container:hover {
            transform: rotateY(0deg);
        }
        div.fa {
            margin-top:40px;
            color: white;
        }
        p {
            posistion: absolute;
            color: white;
            text-align: center;
            font-size: 22px;

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