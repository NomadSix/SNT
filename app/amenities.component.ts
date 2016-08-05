import {Component} from 'angular2/core'
import {AmenitieService} from "./amenitie.service"

@Component({
    selector: 'amenities',
    template: `
        <ul>
            <li *ngFor="#amenitie of amenities">
            <div class='container'>
                <td class='icon'><i class="fa fa-question-circle-o fa-4x" aria-hidden="true"></i></td>
            </div>
            <span class='text'>{{ amenitie }}</span>
            </li>
        </ul>
        `,
    styles: [`
        li {
            list-style-type: none;
        }
        li div {
            height: 70px;
            width: 70px;
            background-color: #f2f2f2;
        }

        .icon {
            text-align: center;
            vertical-align: middle
        }
        .text {
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif
        }
        .container {
            border: 1px solid #ccc;
            border-radius: 6px;
            display: inline-block;
            padding: 10px;
        }
    `],
    providers: [AmenitieService]
})
export class AmenitiesComponent {
    amenities;

    constructor(amenitieService: AmenitieService){
        this.amenities = amenitieService.getAmenitie();
    }
}