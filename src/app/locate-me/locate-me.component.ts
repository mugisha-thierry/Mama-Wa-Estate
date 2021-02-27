import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { GpsService } from '../gps.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-locate-me',
  templateUrl: './locate-me.component.html',
  styleUrls: ['./locate-me.component.css'],
  providers: [GpsService]

})
export class LocateMeComponent {
  title = 'Mama-Wa-Estate';
  lat = -1.9988788
  lng = 30.193555099999994;
  location(x){ 
    this.lat=x.coords.lat; 
    this.lng=x.coords.lng; 
  } 

  locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let currentLat = position.coords.latitude;
        let currentLong = position.coords.longitude;
        console.log(currentLat)
        console.log(currentLong)
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  watchPosition(){
    let deslat = 0;
    let deslon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
      console.log(
        'lat: ${position.coords.latitude}, lon: ${position.coords.longitude}'
      );
    },(err) => {
      console.log(err);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
    
  }
}