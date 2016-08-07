import {Component} from 'angular2/core'
import {HeaderService} from './header.service'
import {AmenitiesComponent} from './amenities.component'
import {CarouselComponent} from './carousel.component'
import {NearbyComponent} from './nearby.component'

@Component({
    selector: 'my-app',
    template: `
        <div id="content">
        <p>Top Rated Amenities In and Around {{ header }}</p>
            <div class='sides'>
                <div class="left">
                <carousel></carousel>
                <amenities></amenities>
                </div>
                <div class="right">
                <nearby></nearby>
                </div>
            </div>
        </div>
        `,
    styles: [`
    p {
        font-size: 18px;

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
    .sides {
        padding: 0 1em;
    }

    #content {
        width: 680px;
        margin: 0 auto;
    }
    `],
    providers: [HeaderService],
    directives: [AmenitiesComponent, CarouselComponent, NearbyComponent]
})
export class AppComponent { 
    header;

    constructor(amenitieService: HeaderService){
        this.header = amenitieService.getHeader();
    }
}