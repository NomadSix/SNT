import {Component} from 'angular2/core'
import {AmenitieService} from "./amenitie.service"

@Component({
    selector: 'amenities',
    template: `
        <div class="amenities" *ngFor="#amenitie of amenities">
        <div class='container'>
            <i class='fa {{ amenitie.icon }}'></i>
        </div>
        <div class='content'>
            <p>{{ amenitie.title }}</p>
            <p>### near this listing
        </div>
        <div class='link'>
        <p>See All <i id='right' class='fa fa-angle-right'></i></p> 
        </div>
        `,
    styles: [`
        #right {
            float: right;
            padding: 0 1em 0 1em;
        }
        .amenities {
            background-color: #fff;
            border-left: 5px solid #ccc;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }
        .content {
            display: inline-block;
        }
        .container {
            background-color: #f2f2f2;
            display: inline-block;
            font-size: 40px;
            width: 40px;
            height: 40px;
            text-align: center;
            padding: 15;
        }
        .link {
            display: inline-block;
            font-size: 18px;
            font-weight: 900;
            color: #cecece;
            float: right;
            padding: 10px;
        }
        .link:hover {
            color:green;
        }
        i #right.fa {
            margin-top: 100px;
        }
        p {
            margin: 0 auto;
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