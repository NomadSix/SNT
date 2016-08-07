import {Component, ElementRef} from 'angular2/core';

@Component({
    selector: 'carousel',
    template: `
        <div class='carousel'>
            <p id='des'> What's the highest rated resturant in this area? </p>
            <p id='listing'><i class="fa fa-map-marker"></i>{{Listing}} </p>
            <div id="image"> </div>
            <div (click)="lastImage()" id="left" ><e class="fa fa-angle-left fa-2x"></e> </div>
            <div (click)="nextImage()" id="right" ><e class="fa fa-angle-right fa-2x"></e> </div>
        </div>
    `,
    styles:[`
        #des {
            color: #fff;
            padding-top: 20px;
            font-size: 18px;
            text-align: center;
            margin: 0;
        }
        #left:hover {
            background-color: green;
        }
        #left {
            color: #fff;
            margin-top: 50px;
            text-align: center;
            float: left;
            height: 80px;
            width: 40px;
            border-radius: 0 80px 80px 0;
            background-color: #000;
            cursor: pointer;
        }
        e.fa {
            color: white;
            margin-top: 20px;
        }
        #right:hover {
            background-color: green;
        }
        #right {
            color: #fff;
            margin-top: 50px;
            text-align: center;
            float: right;
            height: 80px;
            width: 40px;
            border-radius: 80px 0 0 80px;
            background: #000;
            cursor: pointer;
        }
        #listing {
            text-align: center;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            margin: 7;
        }
        #image {
            display: inline-block;
            margin-left: 50px;
            border-radius: 50%;
            border-style: solid;
            border-width: 3px;
            border-color:  #cccccc;
            box-sizing: border-box;
            background-color:  #f2f2f2;
            width: 150px;
            height: 150px;
        }
        i {
            padding-right: 6px;
            color:  #44b244;
        }
        #right.fa {
            color: white;
        }
    `]
})
export class CarouselComponent {
    num = 0
    Listing = "nope"
    Images = ["content/carousel/placeholder.png",
              "https://i.ytimg.com/vi/AAXRBx_30EE/hqdefault.jpg"]
    constructor(public element:ElementRef){
    }
    nextImage(){
        var el = document.getElementById("image")
        el.style.backgroundImage = "url("+this.Images[this.num]+")"
        console.log(this.Images[this.num])
        this.num += 1
        if (this.num > this.Images.length - 1) 
            this.num = 0
    }
    lastImage(){
        var el = document.getElementById("image")
        el.style.backgroundImage = "url("+this.Images[this.num]+")"
        console.log(this.Images[this.num])
        this.num -= 1
        if (this.num < 0) 
            this.num = 1
    }
}