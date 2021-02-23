import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  data:any;
  private url = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) { }

  Add(id: Number,data){
    return this.http.post<any>(this.url+ 'add-to-cart/' + id+'/',data);
  }
}
