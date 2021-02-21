import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _storesUrl = "http://127.0.0.1:8000/api/stores/";
  private url="http://127.0.0.1:8000/api/";
  
  constructor(private http: HttpClient) { }

  getStores(){
    return this.http.get<any>(this._storesUrl)
  }
  getstore(id: Number){
    return this.http.get<any>(this.url+ 'stores/' + id);
  }
}
