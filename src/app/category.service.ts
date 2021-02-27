import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { mergeMap, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:4200/category';
  private _categoryUrl = "http://127.0.0.1:8000/api/category/";
  private url="http://127.0.0.1:8000/api/";
  lat: number;
  lng: number;
  zoom: number;
  newCoordinators: any;
  openWindow: any;

  constructor(private http: HttpClient) { }
  
  resolveCategory(): Observable<any> {
    console.log('All Categories available!');
    return this.http.get(this.URL);
  }
  getCategory(){
    return this.http.get<any>(this._categoryUrl)
  }
  getcategory(id: Number){
    return this.http.get<any>(this.url+ 'category/' + id);
  }
}
