import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AddToCartService } from '../add-to-cart.service';

declare const L: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
  products =[]
  constructor(private _cartProductsService:AddToCartService,public _authService: AuthService) { }

  ngOnInit(): void {
    this._cartProductsService.getCartProducts()
    .subscribe(
    res=>{
      this.products =res
      console.log(this.products.length)
    },
    err => console.log(err)
    )
    if (!navigator.geolocation) {
      console.log('location is not supported');

      navigator.geolocation.getCurrentPosition( position => {
        const coords = position.coords;
        console.log(
          'lat: ${position.coords.latitude}, lon: ${position.coords.longitude}'
          );
        let mymap = L.map('map').setView([coords.latitude, coords.longitude], 13);
        
        L.tileLayer
        ('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlaWxsYW5qb3JvZ2UiLCJhIjoiY2tsOTJld2EzMGxjcTJvcHN0ODlzYnY3ZCJ9.0RxxkogFC6yzMzsWe6bVuQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
      
      });
    }
  }
  


}
