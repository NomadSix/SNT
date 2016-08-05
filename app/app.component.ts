import {Component} from 'angular2/core'
import {HeaderService} from './header.service'
import {AmenitiesComponent} from './amenities.component'
import {CarouselComponent} from './carousel.component'

@Component({
    selector: 'my-app',
    template: `
        <p>{{ header }}</p>
        <div id="content">
            <div class="left">
            <carousel></carousel>
            <amenities></amenities>
            </div>
            <div class="right"></div>
        </div>
        `,
    styles: [`
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 150%;

        background-color: #000;
        color: #fff;

        border-top: 5px solid #4EBF4A;

        padding: .5em 1em;
    }
    .left {
        float: left;
    }
    .rigth {
        float: right;
    }
    `],
    providers: [HeaderService],
    directives: [AmenitiesComponent, CarouselComponent]
})
export class AppComponent { 
    header;

    constructor(amenitieService: HeaderService){
        this.header = amenitieService.getHeader();
    }
}