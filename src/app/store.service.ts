import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _storesUrl = "http://127.0.0.1:8000/api/stores/";
  private url="http://127.0.0.1:8000/api/";

  public lat: number = -1.2877824;  
  public lng: number = 36.814848;
  public zoom: number = 8;

  public newCoordinators = new Subject();

  public openWindow = new Subject();
  
  constructor(private http: HttpClient, private mapApiLoader: MapsAPILoader, private categoryService: CategoryService) { }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }
  
  getStores(){
    return this.http.get<any>(this._storesUrl)
  }
  getstore(id: Number){
    return this.http.get<any>(this.url+ 'stores/' + id);
  }
  ngOnInit() {

    this.lat = this.categoryService.lat;
    this.lng = this.categoryService.lng;
    this.zoom = this.categoryService.zoom;

    this.setCurrentPosition();
    this.mapApiLoader.load();

    // Zoom to new location after search
    this.categoryService.newCoordinators.subscribe(
      (coords: { lat: number, lng: number, zoom: number }) => {
        if (coords) {
          this.lat = coords.lat;
          this.lng = coords.lng;
          this.zoom = coords.zoom;
          this.mapApiLoader.load();
        }
      }
    );

    // Open window after click on category
    this.categoryService.openWindow.subscribe(
      index => {
        
      }
    );
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = this.categoryService.lat = position.coords.latitude;
        this.lng = this.categoryService.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }

    
  }

  
}

