import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate-me',
  templateUrl: './locate-me.component.html',
  styleUrls: ['./locate-me.component.css']
})
export class LocateMeComponent implements OnInit {

  
locateMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

//this is for plotting marker
showPosition(position) {
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;

  let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  this.map.panTo(location);

  if (!this.marker) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }
  else {
    this.marker.setPosition(location);
  }
}


  constructor(){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
      this.currentLong = +pos.coords.longitude;
      this.currentLat = +pos.coords.latitude;

  ngOnInit(): void {
  }

}
