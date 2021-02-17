import { Component, OnInit } from '@angular/core';
import { GpsService } from '../gps.service';


@Component({
  selector: 'app-locate-me',
  templateUrl: './locate-me.component.html',
  styleUrls: ['./locate-me.component.css'],
  providers: [GpsService]
})
export class LocateMeComponent implements OnInit {
  currentLat: any;
  currentLong: any;
  marker: any;
  map: any;
  location:any ={};
  watchPosition: any;
  
locateMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

//this is for plotting marker
// showPosition(position) {
//   this.currentLat = position.coords.latitude;
//   this.currentLong = position.coords.longitude;

//   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//   this.map.panTo(location);

//   if (!this.marker) {
//     this.marker = new google.maps.Marker({
//       position: location,
//       map: this.map,
//       title: 'Got you!'
//     });
//   }
//   else {
//     this.marker.setPosition(location);
//   }
// }


  constructor(private navigator: GpsService){
    
  }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');

      navigator.geolocation.getCurrentPosition( position => {
        console.log(
          'lat: ${position.coords.latitude}, lon: ${position.coords.longitude}'
          );
      
      });
    }
    watchPosition(){
      navigator.geolocation.watchPosition((position) => {
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
}
