import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class Api {
  private city
  private state

  constructor(private _http:Http){
    this.city = 'wichita'
    this.state = 'kansas'
  }

  getJson(){
    var api = "http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/"
    var url = this.state + "/" + this.city
    return this._http.get(api + url)
      .map(res => res.json())
  }
}