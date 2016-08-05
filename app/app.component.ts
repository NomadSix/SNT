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
    providers: [HeaderService],
    directives: [AmenitiesComponent, CarouselComponent]
})
export class AppComponent { 
    header;

    constructor(amenitieService: HeaderService){
        this.header = amenitieService.getHeader();
    }
}