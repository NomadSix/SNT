import {Component} from '@angular/core'
import {AmenitiesComponent} from './amenities/amenities.component'
import {NearbyComponent} from './nearby/nearby.component'
import {CarouselComponent} from './carousel/carousel.component'
import {HTTP_PROVIDERS} from '@angular/http';
import {Api} from'./api/api.service';

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
    providers: [Api, HTTP_PROVIDERS],
    directives: [AmenitiesComponent, CarouselComponent, NearbyComponent]
})
export class AppComponent {
    header = "Wichita, KS";
}
