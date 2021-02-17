import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _storesUrl = "http://localhost:8000/api/store/";
  constructor(private http: HttpClient) { }

  getStores(){
    return this.http.get<any>(this._storesUrl)
  }
}
