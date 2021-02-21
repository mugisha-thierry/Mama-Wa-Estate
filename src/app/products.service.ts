import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productUrl = "http://127.0.0.1:8000/api/products/";
  private url="http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) { }

  getproduct(id: Number){
    return this.http.get<any>(this.url+ 'products/' + id);
  }
  getAllproducts(){
    return this.http.get<any>(this._productUrl)
  }
}
