import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]

})
export class AppComponent {
  title = 'Mama-Wa-Estate';
  lat = -1.2877824
  lng = 36.814848;
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
  
