import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
